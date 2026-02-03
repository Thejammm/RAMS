
console.log("Script started successfully");
// debug toggle wrapper - set window.SNIP_DEBUG = true to enable debug output
try{
  window.SNIP_DEBUG = window.SNIP_DEBUG || false;
  window.SNIP_DBG = {
    debug: function(...args){ if(window.SNIP_DEBUG && console && console.debug) console.debug(...args); },
    info: function(...args){ if(window.SNIP_DEBUG && console && console.info) console.info(...args); },
    warn: function(...args){ if(window.SNIP_DEBUG && console && console.warn) console.warn(...args); },
    group: function(...args){ if(window.SNIP_DEBUG && console && console.group) console.group(...args); },
    groupEnd: function(){ if(window.SNIP_DEBUG && console && console.groupEnd) console.groupEnd(); }
  };
}catch(_){ /* ignore */ }

// ===== helpers: formatting =====
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => (
    { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]
  ));
}
function formatInline(s){
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/\n/g, '<br>');
}
function toHTML(text){
  if(!text) return '';
  const s = String(text).trim();
  if (/<(ul|ol|li|p|h[1-6]|table|thead|tbody|tr|td|div|br)\b/i.test(s)) return s;
  const parts = s.split(/\n+|;\s+/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1){
    return '<ul>' + parts.map(p => '<li>' + formatInline(escapeHtml(p)) + '</li>').join('') + '</ul>';
  }
  return '<p>' + formatInline(escapeHtml(s)) + '</p>';
}
// find the section that this toolbar belongs to
function sectionFromToolbarChild(el){
  const tb = el.closest('.rte-toolbar');
  // the toolbar is inserted directly before the table inside the section
  return tb ? tb.closest('.method-statement-section') : null;
}

function togglePageBreakAfterSection(section){
  if (!section) return;
  const next = section.nextElementSibling;
  if (next && next.classList.contains('page-break')) {
    next.remove();                   // already there -> remove
  } else {
    section.insertAdjacentHTML('afterend',
      '<div class="page-break" role="separator" aria-label="Page break (click to remove)" tabindex="0"></div>');
  }
}

// ===== build/populate the <select> from METHOD_SNIPPETS =====
function populateSelect(select){
  if(!select) return;
  select.innerHTML = '';
  Object.keys(METHOD_SNIPPETS).forEach(cat => {
    const og = document.createElement('optgroup');
    og.label = cat;
    (METHOD_SNIPPETS[cat] || []).forEach((snip, idx) => {
      const opt = document.createElement('option');
      opt.value = cat + '::' + idx;
      opt.textContent = snip.title;
      og.appendChild(opt);
    });
    select.appendChild(og);
  });
}

// ===== per-cell toolbar wiring =====
function findBlockElements(clickedEl){
  const sc = clickedEl.closest('.section-content');
  const select = sc.querySelector('.snip-select');
  const editor = sc.querySelector('.editable-section[contenteditable="true"]');
  return { select, editor };
}

function insertSnippet(select, editor){
  if(!select || !editor) return;
  const val = select.value;
  if(!val) return;

  const [cat, idxStr] = val.split('::');
  const item = (METHOD_SNIPPETS[cat] || [])[parseInt(idxStr,10)];
  if(!item) return;

  const heading = item.title ? `<h4 class="snippet-heading">${escapeHtml(item.title)}</h4>` : '';
  const html = heading + toHTML(item.content);

  // Always append at end (preserve order)
  editor.focus();
  // move caret to end before insertHTML so it appends
  const r = document.createRange();
  r.selectNodeContents(editor);
  r.collapse(false);
  const s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);

  if (document.queryCommandSupported && document.queryCommandSupported('insertHTML')){
    document.execCommand('insertHTML', false, html);
  } else {
    editor.insertAdjacentHTML('beforeend', html);
  }
}

// Apply a structured snippet to all relevant fields in a section
function applySnippetToSection(item, section){
  if(!item || !section) return false;
  if(!item.fields || typeof item.fields !== 'object') return false;

  const LABEL_ALIASES = {
    'TRAINING & ASSOCIATED RISKS': ['TRAINING', 'TRAINING & RISKS', 'TRAINING AND ASSOCIATED RISKS'],
    'ASSOCIATED RISK ASSESSMENTS': ['ASSOCIATED RISK ASSESSMENTS', 'ASSOCIATED RISKS', 'RISK ASSESSMENTS'],
    'METHOD OF WORKS': ['METHOD', 'METHODS', 'METHOD OF WORKS', 'PROCEDURE', 'PROCEDURES'],
    'TITLE': ['TITLE', 'PROJECT TITLE'],
    'EQUIPMENT': ['EQUIPMENT', 'TOOLS', 'TOOLING'],
    'PPE': ['PPE', 'PERSONAL PROTECTIVE EQUIPMENT']
  };

  function normalizeLabelText(s){
    if(!s) return '';
    return String(s)
      .toUpperCase()
      .replace(/[\u2018\u2019\u201C\u201D]/g, "'")
      .replace(/[^A-Z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function levenshtein(a, b){
    a = a || '';
    b = b || '';
    const m = a.length, n = b.length;
    if(m === 0) return n;
    if(n === 0) return m;
    const dp = Array.from({length: m+1}, (_, i) => new Array(n+1).fill(0));
    for(let i=0;i<=m;i++) dp[i][0] = i;
    for(let j=0;j<=n;j++) dp[0][j] = j;
    for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
        const cost = a[i-1] === b[j-1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
      }
    }
    return dp[m][n];
  }

  function similarityScore(a, b){
    a = normalizeLabelText(a);
    b = normalizeLabelText(b);
    if(!a || !b) return 0;
    if(a === b) return 1;
    if(a.indexOf(b) !== -1 || b.indexOf(a) !== -1) return 0.95;
    const aTokens = a.split(' '), bTokens = b.split(' ');
    const common = aTokens.filter(t => bTokens.includes(t));
    if(common.length > 0) return 0.8;
    const dist = levenshtein(a, b);
    const maxLen = Math.max(a.length, b.length);
    if(maxLen === 0) return 0;
    const score = 1 - (dist / maxLen);
    return Math.max(0, score);
  }

  function findEditableByLabel(labelText){
    const labels = Array.from(section.querySelectorAll('td.section-label, th'));
    const wantedRaw = (labelText || '').trim();
    const wanted = normalizeLabelText(wantedRaw);

    for(const lbl of labels){
      if(!lbl) continue;
      let txt = normalizeLabelText(lbl.textContent || '');
      if(!txt.startsWith(wanted)) continue;
      const row = lbl.closest('tr');
      if(row){
        const nextRow = row.nextElementSibling;
        if(nextRow){
          const nextCandidate = nextRow.querySelector('td.section-content, td, .section-content');
          if(nextCandidate){
            const inner = nextCandidate.querySelector('.editable-section');
            if(inner) return inner;
            if(nextCandidate.matches && nextCandidate.matches('[contenteditable="true"]')) return nextCandidate;
            const ed = nextCandidate.querySelector('[contenteditable="true"]');
            if(ed) return ed;
          }
        }
      }
      let candidate = lbl.nextElementSibling;
      if(candidate){
        const inner = candidate.querySelector('.editable-section');
        if(inner) return inner;
        if(candidate.matches && candidate.matches('[contenteditable="true"]')) return candidate;
        const ed = candidate.querySelector('[contenteditable="true"]');
        if(ed) return ed;
      }
    }

    const candidates = labels.map(lbl => ({ el: lbl, text: normalizeLabelText(lbl.textContent || '') }));
    const aliasList = LABEL_ALIASES[labelText.toUpperCase()] || LABEL_ALIASES[wantedRaw.toUpperCase()] || [];
    const wantedVariants = [wanted].concat(aliasList.map(normalizeLabelText));

    let best = { score: 0, candidate: null };
    for(const v of wantedVariants){
      for(const c of candidates){
        const score = similarityScore(v, c.text);
        if(score > best.score){ best = { score, candidate: c }; }
      }
    }

    if(best.candidate && best.score >= 0.45){
      const lbl = best.candidate.el;
      const row = lbl.closest('tr');
      if(row){
        const nextRow = row.nextElementSibling;
        if(nextRow){
          const nextCandidate = nextRow.querySelector('td.section-content, td, .section-content');
          if(nextCandidate){
            const inner = nextCandidate.querySelector('.editable-section');
            if(inner) return inner;
            if(nextCandidate.matches && nextCandidate.matches('[contenteditable="true"]')) return nextCandidate;
            const ed = nextCandidate.querySelector('[contenteditable="true"]');
            if(ed) return ed;
          }
        }
      }
      let candidate = lbl.nextElementSibling;
      if(candidate){
        const inner = candidate.querySelector('.editable-section'); if(inner) return inner;
        if(candidate.matches && candidate.matches('[contenteditable="true"]')) return candidate;
        const ed = candidate.querySelector('[contenteditable="true"]'); if(ed) return ed;
      }
    }

    return null;
  }

  const fieldMap = {
    title: 'TITLE',
    equipment: 'EQUIPMENT',
    ppe: 'PPE',
    training: 'TRAINING & ASSOCIATED RISKS',
    method: 'METHOD OF WORKS',
    risks: 'IDENTIFIED RISK INFORMATION',
    associated: 'ASSOCIATED RISK ASSESSMENTS'
  };

  Object.keys(item.fields).forEach(key => {
    const val = item.fields[key];
    const label = fieldMap[key] || key;
    let target = null;
    if(key === 'method' || label === 'METHOD OF WORKS'){
      target = section.querySelector('.section-content .editable-section');
    } else {
      target = findEditableByLabel(label);
    }
    if(target){
      target.innerHTML = toHTML(val);
    }
  });

  return true;
}

function clearEditor(editor){
  if(editor){ editor.innerHTML = ''; editor.focus(); }
}

function runSnippetDebug(){
  const sec = document.querySelector('.method-statement-section');
  if(!sec) return;
  const all = Object.keys(METHOD_SNIPPETS).reduce((acc, k) => acc.concat(METHOD_SNIPPETS[k] || []), []);
  const item = all.find(i => i.id === 'test-one' || i.title === 'Test One');
  if(!item) return;
  applySnippetToSection(item, sec);
}

// Global delegation for all toolbars
document.addEventListener('click', function(e){
  if(e.target.closest('.section-content .snip-insert')){
    const { select, editor } = findBlockElements(e.target);
    insertSnippet(select, editor);
  }
  if(e.target.closest('.section-content .snip-clear')){
    const { editor } = findBlockElements(e.target);
    clearEditor(editor);
  }

  if(e.target.closest('.rte-toolbar .snip-insert')){
    const tb = e.target.closest('.rte-toolbar');
    const sel = tb ? tb.querySelector('.snip-select') : null;
    if(sel && activeEditable){
      const val = sel.value;
      if(val){
        const [cat, idxStr] = val.split('::');
        const item = (METHOD_SNIPPETS[cat] || [])[parseInt(idxStr,10)];
        const sec = sectionFromToolbarChild(tb);
        if(item && item.fields && sec){
          const applied = applySnippetToSection(item, sec);
          if(applied) return;
        }
      }
      insertSnippet(sel, activeEditable);
    }
  }
  if(e.target.closest('.rte-toolbar .snip-clear')){
    if(activeEditable) clearEditor(activeEditable);
  }
});

// Hide snippet UI on print
(function(){
  try {
    const style = document.createElement('style');
    style.textContent = '@media print{ .snippet-toolbar, .snip-select, .snip-insert, .snip-clear{ display:none !important; } }';
    document.head.appendChild(style);
  } catch(_) {}
})();

// ===== RTE toolbar =====
function buildToolbar(){
  const wrap = document.createElement('div');
  wrap.className = 'rte-toolbar';
  wrap.innerHTML = `
    <button type="button" class="rte-btn" title="Bold" data-cmd="bold"><b>B</b></button>
    <button type="button" class="rte-btn" title="Italic" data-cmd="italic"><i>I</i></button>
    <button type="button" class="rte-btn" title="Underline" data-cmd="underline"><u>U</u></button>
    <span class="rte-sep"></span>
    <button type="button" class="rte-btn" title="Bulleted list" data-cmd="insertUnorderedList">• List</button>
    <button type="button" class="rte-btn" title="Numbered list" data-cmd="insertOrderedList">1. List</button>
    <button type="button" class="rte-btn" title="Indent" data-cmd="indent">→</button>
    <button type="button" class="rte-btn" title="Outdent" data-cmd="outdent">←</button>
    <span class="rte-sep"></span>
    <button type="button" class="rte-btn" title="Page break after section" data-action="pageBreak">Page Break</button>
    <span class="rte-sep"></span>
    <label style="font-size:12px; margin-left:6px">Snippet</label>
    <span class="snippet-wrap" style="display:flex; flex-direction:column; gap:4px; margin-left:6px;">
      <select class="snip-select" style="font-size:12px; min-width:180px;"></select>
      <div style="display:flex; gap:6px;">
        <button type="button" class="rte-btn snip-insert">Insert</button>
        <button type="button" class="rte-btn snip-clear">Clear</button>
      </div>
    </span>
  `;
  try{ const sel = wrap.querySelector('.snip-select'); if(sel) populateSelect(sel); } catch(_){}
  return wrap;
}

let activeEditable = null;
document.addEventListener('focusin', (e) => {
  try{
    const ed = e.target.closest && e.target.closest('[contenteditable="true"]');
    if (ed) activeEditable = ed;
  }catch(_){ }
});

function handleToolbarClick(e){
  const btn = e.target.closest('.rte-toolbar button');
  if (!btn) return;

  if (btn.dataset.action === 'pageBreak') {
    e.preventDefault();
    const sec = sectionFromToolbarChild(btn);
    togglePageBreakAfterSection(sec);
    return;
  }

  const cmd = btn.dataset.cmd;
  if (!cmd) return;

  if (!activeEditable) {
    alert('Click inside a box first, then use the toolbar.');
    return;
  }
  activeEditable.focus();

  if (cmd === 'createLink') {
    const url = prompt('Enter URL (https://...)');
    if (url) document.execCommand('createLink', false, url);
    return;
  }

  document.execCommand(cmd, false, null);
}

// click marker to remove
document.addEventListener('click', (e) => {
  const marker = e.target.closest('.page-break');
  if (marker) marker.remove();
});

// ===== inject snippet toolbar into each cell of a method table =====
function ensureSnippetToolbarForMethodSection(section){
  if(!section) return;
  const rte = section.querySelector('.rte-toolbar');
  if(rte){
    const sel = rte.querySelector('.snip-select');
    if(sel) populateSelect(sel);
  }
}

// ===== your existing table creators (unchanged) =====
function createMethodStatementTable(){
  return `
    <table class="method-table" style="table-layout:fixed; width:100%;">
      <colgroup>
        <col style="width:10%;">
        <col style="width:35%;">
        <col style="width:55%;">
      </colgroup>
      <tbody>
      <tr><th colspan="3" class="section-header">METHOD STATEMENT</th></tr>
      <tr>
        <td class="section-label">MS ref:</td>
        <td class="editable-section" contenteditable="true">MS01</td>
        <td class="mh-title" contenteditable="true">METHODS OF WORK</td>
      </tr>
      <tr>
        <td class="section-label">TITLE</td>
        <td class="editable-section" contenteditable="true">Add Text</td>
        <td class="section-content" rowspan="6">

          <div class="editable-section" contenteditable="true" data-snippet-category="procedures" style="min-height:260px;"></div>
        </td>
      </tr>
      <tr>
        <td class="section-label">EQUIPMENT</td>
        <td class="editable-section" contenteditable="true">Add Text</td>
      </tr>
      <tr>
        <td class="section-label">PPE</td>
        <td class="editable-section" contenteditable="true">Add Text</td>
      </tr>
      <tr><th colspan="2" class="section-header">TRAINING & ASSOCIATED RISKS</th></tr>
      <tr>
        <td colspan="2" class="section-content">
          <div class="editable-section" contenteditable="true" data-snippet-category="procedures" style="min-height:150px;"></div>
        </td>
      </tr>
      <tr>
        <td class="section-label" style="font-size:9px; font-weight:600; letter-spacing:0.5px; padding:2px 6px;">RISK ASSESSMENT REF:</td>
        <td class="editable-section" contenteditable="true">Add Text</td>
      </tr>
      </tbody>
    </table>
  `;
}

function addMethodStatementTable(){
  const container = document.getElementById('methodTables');
  if(!container){ alert('Method tables container not found'); return; }

  const section = document.createElement('section');
  section.className = 'wm-section method-statement-section';
  section.innerHTML = `
    <div class="actions">
      <button type="button" class="list-btn remove" onclick="removeMethodStatementTable(this)">Remove</button>
    </div>
    ${createMethodStatementTable()}
  `;
  container.appendChild(section);

  ensureSnippetToolbarForMethodSection(section);

  const table = section.querySelector('table.method-table');
  const rte = buildToolbar();
  rte.addEventListener('mousedown', (e) => {
    if (e.target.closest('.rte-btn')) {
      e.preventDefault();
    }
  });
  rte.addEventListener('click', handleToolbarClick);
  rte.dataset.rteClick = '1';
  section.insertBefore(rte, table);
}

function removeMethodStatementTable(button){
 if(confirm('Remove this method statement table?')){
    const section = button.closest('.method-statement-section');
    if(section) section.remove();
  }
} 

// ===== init =====
document.addEventListener('DOMContentLoaded', function(){
  const existing = document.querySelectorAll('#methodTables .method-statement-section');
  if(existing.length){ 
    existing.forEach(ensureSnippetToolbarForMethodSection); 
  } else {
    addMethodStatementTable();
  }
  document.querySelectorAll('.rte-toolbar .snip-select').forEach(populateSelect);
  document.querySelectorAll('.rte-toolbar').forEach(tb => {
    if (tb.dataset.rteInit) return;
    tb.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) e.preventDefault();
    });
    tb.addEventListener('click', handleToolbarClick);
    tb.dataset.rteInit = '1';
    tb.dataset.rteClick = '1';
  });

  document.addEventListener('click', function(e){
    const btn = e.target.closest('.rte-btn');
    if(!btn) return;
    const tb = btn.closest('.rte-toolbar');
    if(tb && tb.dataset && tb.dataset.rteClick) return;
    handleToolbarClick.call(tb || document, e);
  });
});

// ===== AUTO-SAVE WITH RESTORE =====
(function() {
  let saveTimeout;
  const SAVE_DELAY = 500;
  const STORAGE_KEY = 'methodStatement_backup';

  function showSaveIndicator(text = '✓ Saved') {
    let indicator = document.getElementById('saveIndicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'saveIndicator';
      indicator.style.cssText = 'position:fixed;top:60px;right:20px;background:#10b981;color:white;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:bold;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);opacity:1;transition:opacity 0.3s;';
      document.body.appendChild(indicator);
    }
    indicator.textContent = text;
    indicator.style.opacity = '1';
    setTimeout(() => {
      indicator.style.opacity = '0.5';
    }, 1500);
  }

  function saveContent() {
    try {
      const htmlContent = document.documentElement.outerHTML;
      localStorage.setItem(STORAGE_KEY, htmlContent);
      localStorage.setItem(STORAGE_KEY + '_ts', new Date().toISOString());
      console.log('✓ Method Statement saved');
      showSaveIndicator('✓ Saved');
    } catch (e) {
      console.error('Save failed:', e);
      showSaveIndicator('✗ Save failed');
    }
  }

  function triggerSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveContent, SAVE_DELAY);
  }

  // Save on changes
  document.addEventListener('input', triggerSave, true);
  document.addEventListener('change', triggerSave, true);
  document.addEventListener('keyup', triggerSave, true);
  document.addEventListener('click', triggerSave, true);

  // Save periodically
  setInterval(saveContent, 2000);

  // RESTORE on page load
  window.addEventListener('load', function() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.length > 100) {
      try {
        const newDoc = new DOMParser().parseFromString(saved, 'text/html');
        if (newDoc && newDoc.body) {
          // Find the a4-container in both documents
          const oldContainer = document.querySelector('.a4-container');
          const newContainer = newDoc.querySelector('.a4-container');
          
          if (oldContainer && newContainer) {
            // Only restore the inner content, not the entire container
            // This preserves the date picker and modal elements
            const oldSheets = oldContainer.querySelectorAll('.sheet');
            const newSheets = newContainer.querySelectorAll('.sheet');
            
            if (oldSheets.length > 0 && newSheets.length > 0) {
              // Restore each sheet's content
              newSheets.forEach((newSheet, index) => {
                if (oldSheets[index]) {
                  oldSheets[index].innerHTML = newSheet.innerHTML;
                }
              });
              console.log('✓ Method Statement restored');
              showSaveIndicator('✓ Restored');
            }
          }
        }
      } catch (e) {
        console.error('Restore failed:', e);
      }
    }
  });

  // Save with Ctrl+S
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      saveContent();
      
      const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'method-statement.html';
      a.click();
      URL.revokeObjectURL(url);
    }
  });

  // Save before leaving
  window.addEventListener('beforeunload', saveContent);

  console.log('✓ Method Statement auto-save initialized');
})();

console.log("Script completed successfully");

// ===== Letterhead Date Picker =====
// ===== Minimal Outlook-style Date Picker =====
document.addEventListener('DOMContentLoaded', function() {
  const dateDisplay = document.getElementById('lhDate');
  const dateModal = document.getElementById('dateModal');
  const currentMonthSpan = document.getElementById('currentMonth');
  const calendarDays = document.getElementById('calendarDays');
  const prevBtn = document.getElementById('prevMonth');
  const nextBtn = document.getElementById('nextMonth');
  
  let currentDate = new Date();
  let selectedDate = new Date();
  
  if (dateDisplay && dateModal) {
    console.log('Date picker elements found');
    
    // Format date for display (e.g., "2 Feb 2026")
    function formatDateDisplay(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }
    
    // Format month/year for header
    function formatMonthYear(date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    
    // Check if two dates are the same day
    function isSameDay(date1, date2) {
      return date1.getDate() === date2.getDate() &&
             date1.getMonth() === date2.getMonth() &&
             date1.getFullYear() === date2.getFullYear();
    }
    
    // Render calendar
    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      
      // Update header
      currentMonthSpan.textContent = formatMonthYear(currentDate);
      
      // Clear days
      calendarDays.innerHTML = '';
      
      // First day of month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      
      // Days from previous month
      const prevMonthDays = firstDay.getDay();
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      
      // Add previous month days
      for (let i = prevMonthDays - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'date-day other-month';
        day.textContent = prevMonthLastDay - i;
        calendarDays.appendChild(day);
      }
      
      // Add current month days
      const today = new Date();
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = document.createElement('div');
        day.className = 'date-day';
        day.textContent = i;
        
        const dayDate = new Date(year, month, i);
        
        // Highlight today
        if (isSameDay(dayDate, today)) {
          day.classList.add('today');
        }
        
        // Highlight selected
        if (isSameDay(dayDate, selectedDate)) {
          day.classList.add('selected');
        }
        
        // Click handler
        day.addEventListener('click', function() {
          selectedDate = new Date(year, month, i);
          dateDisplay.textContent = formatDateDisplay(selectedDate);
          
          // Update hidden input if exists
          const hiddenInput = document.getElementById('lhDatePicker');
          if (hiddenInput) {
            const yyyy = selectedDate.getFullYear();
            const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const dd = String(selectedDate.getDate()).padStart(2, '0');
            hiddenInput.value = `${yyyy}-${mm}-${dd}`;
          }
          
          closeModal();
        });
        
        calendarDays.appendChild(day);
      }
      
      // Add next month days to fill grid
      const totalCells = calendarDays.children.length;
      const cellsToFill = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
      for (let i = 1; i <= cellsToFill; i++) {
        const day = document.createElement('div');
        day.className = 'date-day other-month';
        day.textContent = i;
        calendarDays.appendChild(day);
      }
    }
    
    // Make date display clickable
    dateDisplay.style.cursor = 'pointer';
    dateDisplay.style.textDecoration = 'underline';
    dateDisplay.title = 'Click to change date';
    
    // Initialize display
    dateDisplay.textContent = formatDateDisplay(selectedDate);
    
    // Open modal
    dateDisplay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Date clicked - opening modal');
      
      currentDate = new Date(selectedDate);
      renderCalendar();
      dateModal.style.display = 'block';
    });
    
    // Close modal
    function closeModal() {
      dateModal.style.display = 'none';
    }
    
    // Navigation
    prevBtn?.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
    
    nextBtn?.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === dateModal) {
        closeModal();
      }
    });
    
    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && dateModal.style.display === 'block') {
        closeModal();
      }
    });
    
  } else {
    console.log('Date picker elements NOT found');
  }
});

