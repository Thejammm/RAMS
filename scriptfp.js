// ===== AUTO-SAVE WITH RESTORE =====
(function() {
  let autoSaveTimeout;
  const AUTOSAVE_DELAY = 500;
  const STORAGE_KEY = 'rams_master_autosave';

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

  function saveToLocalStorage() {
    try {
      const htmlContent = document.documentElement.outerHTML;
      const timestamp = new Date().toISOString();
      
      localStorage.setItem(STORAGE_KEY, htmlContent);
      localStorage.setItem(STORAGE_KEY + '_ts', timestamp);
      
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.length > 100) {
        console.log('✓ Saved to localStorage (' + (saved.length / 1024).toFixed(1) + ' KB)');
        showSaveIndicator('✓ Saved');
      }
    } catch (e) {
      console.error('Save failed:', e);
      showSaveIndicator('✗ Save failed');
    }
  }

  function triggerAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(saveToLocalStorage, AUTOSAVE_DELAY);
  }

  // Save on input/change
  document.addEventListener('input', triggerAutoSave, true);
  document.addEventListener('change', triggerAutoSave, true);
  
  // Save on contenteditable changes
  document.addEventListener('click', triggerAutoSave, true);
  document.addEventListener('keyup', triggerAutoSave, true);

  // Save periodically
  setInterval(saveToLocalStorage, 2000);

  // Save before leaving
  window.addEventListener('beforeunload', saveToLocalStorage);

  // RESTORE on page load
  window.addEventListener('load', function() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.length > 100) {
      try {
        const newDoc = new DOMParser().parseFromString(saved, 'text/html');
        if (newDoc && newDoc.body) {
          // Copy the body content (formPages and all sheets) but preserve modals
          const oldFormPages = document.getElementById('formPages');
          const newFormPages = newDoc.getElementById('formPages');
          
          if (oldFormPages && newFormPages) {
            // Restore the sheet content inside formPages, preserving all elements
            const oldSheets = oldFormPages.querySelectorAll('.sheet');
            const newSheets = newFormPages.querySelectorAll('.sheet');
            
            if (oldSheets.length > 0 && newSheets.length > 0) {
              // Restore each sheet's content
              newSheets.forEach((newSheet, index) => {
                if (oldSheets[index]) {
                  oldSheets[index].innerHTML = newSheet.innerHTML;
                }
              });
              console.log('✓ Restored from auto-save');
              showSaveIndicator('✓ Restored');
            }
          }
        }
      } catch (e) {
        console.error('Restore failed:', e);
      }
    }
  });

  console.log('✓ Auto-save with restore initialized');
})();


// ===== Date Picker Modal =====
// ===== Minimal Outlook-style Date Picker =====
document.addEventListener('DOMContentLoaded', function() {
  const dateDisplay = document.getElementById('lhDate');
  const dateModal = document.getElementById('dateModal');
  const currentMonthSpan = document.getElementById('dateCurrentMonth');
  const calendarDays = document.getElementById('dateDays');
  const prevBtn = document.getElementById('datePrevBtn');
  const nextBtn = document.getElementById('dateNextBtn');
  
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
    
    console.log('Date picker initialized');
  } else {
    console.log('Date picker elements NOT found');
  }
});


(function(){
  var currentTarget = null;
  document.addEventListener('focusin', function(e){
    var t = e.target;
    if (t && (t.isContentEditable || t.getAttribute('contenteditable') === 'true' || t.tagName === 'TEXTAREA' || (t.classList && t.classList.contains('editable')))){
      currentTarget = t;
    }
  });
  document.addEventListener('mousedown', function(e){
    var t = e.target.closest('[contenteditable="true"], .editable, textarea');
    if(t){ currentTarget = t; }
  }, true);

  function applyExecCommand(cmd){
    if(!currentTarget) return;
    if (currentTarget.tagName === 'TEXTAREA'){ return; } // keep simple for textareas
    try{ currentTarget.focus(); }catch(_){}
    if(cmd === 'createLink'){
      var url = prompt('Enter URL (https://...)');
      if(url){ document.execCommand('createLink', false, url); }
      return;
    }
    document.execCommand(cmd, false, null);
  }

  var bar = document.querySelector('.global-rte');
  if(bar){
    bar.addEventListener('click', function(e){
      var btn = e.target.closest('.rte-btn'); if(!btn) return;
      applyExecCommand(btn.getAttribute('data-cmd'));
    });
  }
})();

(function(){

 

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => (
    { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]
  ));
}

// turn **bold**, *italic*, __underline__ into HTML (after escaping)
function formatInline(s){
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/\n/g, '<br>');
}


  function populateSelect(select){
    if(!select) return;
    select.innerHTML = '';
    Object.keys(window.SNIPPETS).forEach(cat => {
      const og = document.createElement('optgroup');
      og.label = cat;
      window.SNIPPETS[cat].forEach((snip, idx) => {
        const opt = document.createElement('option');
        opt.value = cat + '::' + idx;
        opt.textContent = snip.title;
        og.appendChild(opt);
      });
      select.appendChild(og);
    });
  }

function toHTML(text){
  if(!text) return '';
  const s = String(text).trim();

  // If the snippet already contains block HTML, insert as-is
  // (lets you paste full <ul>, <p>, etc. using backticks)
  if (/<(ul|ol|li|p|h[1-6]|table|thead|tbody|tr|td|div|br)\b/i.test(s)) {
    return s;
  }

  // Otherwise: semicolons/newlines -> bullets; single line -> paragraph
  const parts = s.split(/\n+|;\s+/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1){
    return '<ul>' + parts
      .map(p => '<li>' + formatInline(escapeHtml(p)) + '</li>')
      .join('') + '</ul>';
  }
  return '<p>' + formatInline(escapeHtml(s)) + '</p>';
}


  function findBlockElements(clickedEl){
    // Find the closest section-content that owns this toolbar/button
    const sc = clickedEl.closest('.section-content') || document;
    const select = sc.querySelector('.snip-select') || document.getElementById('snip-select');
    const editor = sc.querySelector('.snippet-editor') || document.getElementById('snippetEditor');
    return { select, editor };
  }

  // Populate every snippet select on load
  document.querySelectorAll('.snip-select').forEach(populateSelect);

  // If there's still a lone Section 5 select by id, populate it too
  const legacySelect = document.getElementById('snip-select');
  if(legacySelect){ populateSelect(legacySelect); }

function insertSnippet(select, editor){
  if(!select || !editor) return;
  const val = select.value;
  if(!val) return;

  const [cat, idxStr] = val.split('::');
  const item = (window.SNIPPETS[cat] || [])[parseInt(idxStr,10)];
  if(!item) return;

  const heading = item.title ? `<h4 class="snippet-heading">${escapeHtml(item.title)}</h4>` : '';
  const html = heading + toHTML(item.content);

  editor.focus();
  if (document.queryCommandSupported && document.queryCommandSupported('insertHTML')){
    document.execCommand('insertHTML', false, html);
  } else {
    editor.insertAdjacentHTML('beforeend', html);
  }
}


  function clearEditor(editor){
    if(editor){ editor.innerHTML = ''; editor.focus(); }
  }

  // Delegated click listeners for all toolbars
  document.addEventListener('click', function(e){
    if(e.target.closest('.snip-insert')){
      const { select, editor } = findBlockElements(e.target);
      insertSnippet(select, editor);
    }
    if(e.target.closest('.snip-clear')){
      const { editor } = findBlockElements(e.target);
      clearEditor(editor);
    }
  });

  // Ensure snippet toolbars are hidden on print
  try {
    const style = document.createElement('style');
    style.textContent = '@media print{ .snippet-toolbar, .snip-select, .snip-insert, .snip-clear{ display:none !important; } }';
    document.head.appendChild(style);
  } catch(_){}
})();

(function(){
window.SNIPPETS = window.SNIPPETS || {};
window.SNIPPETS['Section 2 Originals'] = [
  { title: `Section 2 – Bullet Points (10 items)`, content: `Internal protection: dust screens, sheeting, floor/fixture protection to rooms/areas receiving works.; Set up around each window ensuring that scaffolding is in place and certified for safe working externally.; Ensure any isolations, are requested/carried out and permits are in place.; Ensure the Resident Liaison Officer (RLO) has been made aware of the working areas and suitable restriction (barriers) for residents are in place and planned.; Bring in tools and equipment required for the task.; Careful removal of existing sashes, glass, beads, cords/weights, and frames; controlled handling of glass.; Make-safe and prepare openings (repair reveals/sills/lintels, check damp-proofing/cavity closers as specified).; Install new timber sliding sash and standard opening sash windows.; Glaze, seal, draught-proof, fit ironmongery; make good trims and finishes.; QA checks, clean-down, removal of waste to skips; snag and sign-off.` } ,
];
window.SNIPPETS['Section 3 Originals'] = [
  { title: `Section 3 – Bullet Points (7 items)`, content: `Occupied, vulnerable setting (care home): The works are taking place within an occupied and vulnerable setting, specifically a care home. This requires careful management of resident access and egress, clear identification of all operatives with ID badges, and liaison with the Resident Liaison Officer (RLO).; Asbestos: No work will be undertaken without confirmation asbestos containing materials (ACM) has been removed or identified. Should ACM's be suspected by the operatives work will stop immediately and the principal contractor will be notified.; Live services (gas/electric/water): Services present; Isolations must be undertaken by an approved electrician under permit. Services must be located and confirmed prior to works.; Work at height / access: Work at height presents a critical risk. All access must comply with the Work at Height Strategy (Ladders Last). Scaffolding must meet TG20:21 and SG4 standards.; Glass handling & dropped objects: Strict controls required for glass removal. Glass will not meet today's approved building regulations and will not behave in an expected manner.; Manual handling: Manual handling risks must be managed. Hoists, gin wheels, or tele-handlers will be used where specified.; Dust, wood dust & noise/vibration: Exposure must be controlled using on-tool extraction or water suppression. Task-specific risk assessments will be prepared.` } ,
  { title: `Section 3 – Paragraphs`, content: `Key health and safety arrangements taken from the Principal Contractors, Construction Phase Plan (CPP). This information will be circulated to all operatives prior to attending site. Appropriate arrangements and controls will be put in place by Lee & Micklethwait Ltd (L&M) in line with regulation 15 of the Construction (Design & Management) regulations 2015.` } ,
];
window.SNIPPETS['Section 4 Originals'] = [
  { title: `Section 4 – Bullet Points (4 items)`, content: `Manage and supervise day to day activities; Carry out daily checks for poor housekeeping, hazards, unrestricted areas; Ensure RAMS are being followed; Escalate unsafe practices to the PC` } ,
  { title: `Section 4 – Paragraphs`, content: `Principal Contractor: Ensure compliance with CDM 2015, Plan, manage and monitor the construction phase.

Site Manager / Supervisor: Name: TBC - Duty: Oversee daily operations, toolbox talks and supervision.

Operatives: Names: TBC - Duty: Carry out works in accordance with this method statement and risk assessments.

The on-site manager/supervisor will:` } ,
  { title: `Section 4 – Training Grid Items (8)`, content: `SMSTS/SSSTS; CSCS Card; Manual Handling; Asbestos Awareness; Working at Height; Fire Extinguisher; Face Fit Test; PASMA/IPAF` } ,
];

    document.querySelectorAll('.snip-select').forEach(function(select){
      select.innerHTML = '';
      Object.keys(window.SNIPPETS).forEach(function(cat){
        var og = document.createElement('optgroup'); og.label = cat;
        (window.SNIPPETS[cat] || []).forEach(function(snip, idx){
          var opt = document.createElement('option');
          opt.value = cat + '::' + idx;
          opt.textContent = snip.title;
          og.appendChild(opt);
        });
        select.appendChild(og);
      });
    });
    })();
    

(function(){
  // ===== Track last interacted section =====
  var lastSection = null;
  function setLastSectionFrom(target){
    var sec = target && target.closest ? target.closest('.section') : null;
    if (sec) { lastSection = sec; }
  }
  document.addEventListener('focusin', function(e){ setLastSectionFrom(e.target); }, true);
  document.addEventListener('mousedown', function(e){ setLastSectionFrom(e.target); }, true);

  // ===== Helpers =====
  function stripIds(root){
    if(!root) return;
    root.querySelectorAll('[id]').forEach(function(el){ el.removeAttribute('id'); });
  }
  function getActiveEditable(){
    var sel = window.getSelection && window.getSelection();
    if (sel && sel.rangeCount){
      var node = sel.getRangeAt(0).commonAncestorContainer;
      if (node && node.nodeType === 3) node = node.parentNode;
      var ed = node && node.closest ? node.closest('[contenteditable="true"]') : null;
      if (ed) return ed;
    }
    if (lastSection){
      var ed2 = lastSection.querySelector('[contenteditable="true"]');
      if (ed2) return ed2;
    }
    return document.querySelector('[contenteditable="true"]');
  }
  function repopulateSnippetSelects(scope){
    if (!window.SNIPPETS) return;
    var selects = (scope || document).querySelectorAll('.snip-select');
    selects.forEach(function(select){
      var value = select.value;
      select.innerHTML = '';
      Object.keys(window.SNIPPETS).forEach(function(cat){
        var og = document.createElement('optgroup'); og.label = cat;
        (window.SNIPPETS[cat] || []).forEach(function(snip, idx){
          var opt = document.createElement('option');
          opt.value = cat + '::' + idx;
          opt.textContent = snip.title;
          og.appendChild(opt);
        });
        select.appendChild(og);
      });
      // keep previous selection if possible
      if (value) select.value = value;
    });
  }
  function ensureSnippetUI(scope){
    var sc = (scope || document).querySelector('.section-content') || scope || document;
    if (!scope.querySelector('.snippet-toolbar')){
      var toolbar = document.createElement('div');
      toolbar.className = 'no-print snippet-toolbar';
      toolbar.setAttribute('aria-label','Snippets controls');
      toolbar.innerHTML = '<label>Snippet:</label>\
        <select class=\"snip-select\"></select>\
        <button type=\"button\" class=\"btn snip-insert\">Insert</button>\
        <button type=\"button\" class=\"btn danger snip-clear\">Clear</button>';
      sc.insertBefore(toolbar, sc.firstChild);
    }
    if (!scope.querySelector('.snippet-editor')){
      var ed = document.createElement('div');
      ed.className = 'snippet-editor editable';
      ed.setAttribute('contenteditable','true');
      ed.setAttribute('aria-label','Snippet editor');
      sc.appendChild(ed);
    }
    repopulateSnippetSelects(scope);
  }

  // ===== Snippets toggle (non-destructive: just CSS class) =====
  var snippetsEnabled = true;
  try {
    var saved = localStorage.getItem('ms_snippets_enabled');
    if (saved !== null) snippetsEnabled = saved === 'true';
  } catch(e){}
  if(!snippetsEnabled){ document.body.classList.add('snippets-off'); }
  function setSnippetsButtonState(){
    var btn = document.getElementById('btnToggleSnippets');
    if(!btn) return;
    btn.textContent = 'Snippets: ' + (snippetsEnabled ? 'On' : 'Off');
    btn.setAttribute('aria-pressed', snippetsEnabled ? 'true' : 'false');
    btn.classList.toggle('is-active', snippetsEnabled);
  }
  function toggleSnippets(){
    snippetsEnabled = !snippetsEnabled;
    try { localStorage.setItem('ms_snippets_enabled', String(snippetsEnabled)); } catch(e){}
    document.body.classList.toggle('snippets-off', !snippetsEnabled);
    setSnippetsButtonState();
  }

  // ===== RTE helpers =====
  function insertNodeAtCaret(node){
    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0){ 
      var ed = getActiveEditable();
      if (ed){ ed.appendChild(node); return; }
      document.body.appendChild(node); return;
    }
    var range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(node);
    range.setStartAfter(node);
    range.setEndAfter(node);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  function insertTablePrompt(){
    var rows = parseInt(prompt('How many rows?', '2'), 10);
    if (!(rows > 0)) return;
    var cols = parseInt(prompt('How many columns?', '2'), 10);
    if (!(cols > 0)) return;
    var table = document.createElement('table');
    table.className = 'rte-table';
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.margin = '8px 0';
    for (var r=0; r<rows; r++){
      var tr = document.createElement('tr');
      for (var c=0; c<cols; c++){
        var cell = document.createElement(r===0 ? 'th' : 'td');
        cell.textContent = r===0 ? ('H'+(c+1)) : '\\u00A0';
        cell.style.border = '1px solid #777';
        cell.style.padding = '4px 6px';
        tr.appendChild(cell);
      }
      table.appendChild(tr);
    }
    insertNodeAtCaret(table);
  }
  function openCellColorPicker(){ var p = document.getElementById('cellColorPicker'); if(p) p.click(); }
  function openTextColorPicker(){ var p = document.getElementById('textColorPicker'); if(p) p.click(); }
  function applyCellBgColour(color){
    var sel = window.getSelection();
    var applied = false;
    if (sel && sel.rangeCount){
      document.querySelectorAll('td,th').forEach(function(cell){
        if (sel.containsNode && sel.containsNode(cell, true)){
          cell.style.backgroundColor = color;
          applied = true;
        }
      });
      if(!applied){
        var node = sel.anchorNode;
        if(node && node.nodeType === 3) node = node.parentNode;
        var td = node && node.closest ? node.closest('td,th') : null;
        if(td){ td.style.backgroundColor = color; applied = true; }
      }
    }
    if(!applied){
      var ed = getActiveEditable();
      var td2 = ed && ed.closest ? ed.closest('td,th') : null;
      if(td2){ td2.style.backgroundColor = color; }
    }
  }
  function applyTextColour(color){
    try { document.execCommand('foreColor', false, color); }
    catch(e){
      var span = document.createElement('span');
      span.style.color = color;
      var sel = window.getSelection();
      if (!sel || sel.rangeCount === 0){ return; }
      var range = sel.getRangeAt(0);
      if (range.collapsed) return;
      try { range.surroundContents(span); }
      catch(e){ var frag = range.extractContents(); span.appendChild(frag); range.insertNode(span); }
    }
  }

  // ===== Manual Page Breaks =====
  function createPageBreakEl(){
    var wrap = document.createElement('div');
    wrap.className = 'page-break';
    wrap.setAttribute('role','separator');
    wrap.setAttribute('aria-label','Manual page break');
    var label = document.createElement('span');
    label.className = 'pb-label';
    label.textContent = 'Manual page break';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pb-remove';
    btn.title = 'Remove page break';
    btn.setAttribute('aria-label','Remove page break');
    btn.textContent = '×';
    wrap.appendChild(label);
    wrap.appendChild(btn);
    return wrap;
  }
  function addPageBreakAfterSelected(){
    var base = lastSection || document.querySelector('.sheet .section:last-of-type');
    if(!base){ alert('No section selected/found to add a page break after.'); return; }
    var marker = createPageBreakEl();
    base.parentNode.insertBefore(marker, base.nextSibling);
    marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  document.addEventListener('click', function(e){
    var rm = e.target.closest && e.target.closest('.pb-remove');
    if(rm){
      var marker = rm.closest('.page-break');
      if(marker && marker.parentNode){ marker.parentNode.removeChild(marker); }
    }
  });

  // ===== Numbering =====
  function renumberSections(){
    var headers = document.querySelectorAll('.sheet .section .section-header');
    var n = 1;
    headers.forEach(function(h){
      var raw = (h.textContent || '').trim();
      var m = raw.match(/^\s*(section)\s*\d+\s*:\s*(.*)$/i);
      var title = m ? m[2] : raw;
      var word = (m && m[1]) ? m[1] : 'Section';
      if (/^[A-Z]+$/.test(word)) { word = 'SECTION'; }
      else { word = 'Section'; }
      h.textContent = word + ' ' + (n++) + (title ? ': ' + title : '');
    });
  }

  // ===== Main actions =====
  function addSectionAfterSelected(){
    var base = lastSection || Array.prototype.slice.call(document.querySelectorAll('.sheet .section')).pop();
    if(!base){ alert('No section found to clone.'); return; }
    var clone = base.cloneNode(true);
    stripIds(clone);
    ensureSnippetUI(clone);
    base.parentNode.insertBefore(clone, base.nextSibling);
    lastSection = clone;
    clone.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Focus caret inside the new section
    var focusTarget = clone.querySelector('.snippet-editor[contenteditable=\"true\"]') ||
                      clone.querySelector('[contenteditable=\"true\"]');
    if (focusTarget){
      try {
        focusTarget.focus();
        var range = document.createRange();
        range.selectNodeContents(focusTarget);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } catch(_e){}
    }
    renumberSections();
  }
  function removeSelectedSection(){
    var target = lastSection || document.querySelector('.sheet .section');
    if(!target){ alert('No section to remove.'); return; }
    var parent = target.parentNode;
    if(parent){
      parent.removeChild(target);
      lastSection = parent.querySelector('.section') || null;
    }
    renumberSections();
  }
  function renameSelectedSection(){
    var section = lastSection || document.querySelector('.sheet .section');
    if(!section){ alert('No section to rename.'); return; }
    var header = section.querySelector('.section-header');
    if(!header){ alert('Selected section has no header element with class \"section-header\".'); return; }
    var current = header.textContent.trim();
    var next = prompt('Rename section header:', current);
    if (next !== null) { header.textContent = next; renumberSections(); }
  }

  // ===== Wire up toolbar buttons =====
  var addBtn = document.getElementById('btnAddSection');
  var remBtn = document.getElementById('btnRemoveSection');
  var renBtn = document.getElementById('btnRenameSection');
  var pbBtn = document.getElementById('btnAddPageBreak');
  var togBtn = document.getElementById('btnToggleSnippets');
  var tblBtn = document.getElementById('btnInsertTable');
  var cellBtn = document.getElementById('btnCellBg');
  var textBtn = document.getElementById('btnTextColor');
  var cellPicker = document.getElementById('cellColorPicker');
  var textPicker = document.getElementById('textColorPicker');

  if(addBtn){ addBtn.addEventListener('click', addSectionAfterSelected); }
  if(remBtn){ remBtn.addEventListener('click', removeSelectedSection); }
  if(renBtn){ renBtn.addEventListener('click', renameSelectedSection); }
  if(pbBtn){ pbBtn.addEventListener('click', addPageBreakAfterSelected); }
  if(togBtn){ togBtn.addEventListener('click', toggleSnippets); }
  if(tblBtn){ tblBtn.addEventListener('click', insertTablePrompt); }
  if(cellBtn){ cellBtn.addEventListener('click', openCellColorPicker); }
  if(textBtn){ textBtn.addEventListener('click', openTextColorPicker); }
  if(cellPicker){ cellPicker.addEventListener('change', function(e){ applyCellBgColour(e.target.value); }); }
  if(textPicker){ textPicker.addEventListener('change', function(e){ applyTextColour(e.target.value); }); }

  // ===== Form Pages Control =====
  function addFormPage(){
    var container = document.getElementById('formPages');
    if(!container){ alert('Form pages container not found.'); return; }
    
    // Clone the first form-page as a template
    var template = container.querySelector('.form-page');
    if(!template){ alert('No form page template found.'); return; }
    
    var newPage = template.cloneNode(true);
    stripIds(newPage);
    
    // Reset all contenteditable content in the new page
    newPage.querySelectorAll('[contenteditable="true"]').forEach(function(el){
      el.innerHTML = '';
    });
    
    // Reset form inputs
    newPage.querySelectorAll('input[type="text"], textarea, select').forEach(function(el){
      if(el.type === 'checkbox' || el.type === 'radio'){
        el.checked = false;
      } else {
        el.value = '';
      }
    });
    
    container.appendChild(newPage);
    newPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function removeFormPage(){
    var container = document.getElementById('formPages');
    if(!container){ alert('Form pages container not found.'); return; }
    
    var pages = container.querySelectorAll('.form-page');
    if(pages.length <= 1){ alert('Cannot remove the last form page.'); return; }
    
    // Remove the last page
    pages[pages.length - 1].remove();
  }

  // Wire up form page buttons
  var addFormBtn = document.querySelector('.add-form-page');
  var removeFormBtn = document.querySelector('.remove-form-page');
  
  if(addFormBtn){ addFormBtn.addEventListener('click', addFormPage); }
  if(removeFormBtn){ removeFormBtn.addEventListener('click', removeFormPage); }

  // Initial UI state
  setSnippetsButtonState();
  repopulateSnippetSelects(document);
  renumberSections();
})();

// Press Ctrl+S to export (overrides browser save)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    
    // Export current state
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RAMS-' + new Date().toISOString().slice(0,10) + '.html';
    a.click();
    URL.revokeObjectURL(url);
  }
});



	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
  // Back to top button
const backToTopBtn = document.getElementById('backToTop');

// Download helper function
function downloadFile(content, filename) {
  try {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log('Downloaded:', filename);
  } catch (err) {
    console.error('Download failed for ' + filename, err);
  }
}

// Multi-tab save handler - called from button onclick
function downloadAllTabs() {
  console.log('Download all tabs button clicked');
  
  // Get current RAMS Master content
  const ramsContent = document.documentElement.outerHTML;
  
  // Try to get Method Statement content from localStorage
  let msContent = localStorage.getItem('methodStatement_backup') || 
                  localStorage.getItem('methodStatement_autosave_data') || 
                  '<!-- Method Statement data not available -->';
  
  // Try to get Risk Assessment content from localStorage
  let raContent = localStorage.getItem('ra_autosave_data') || 
                  localStorage.getItem('ra_backup') || 
                  '<!-- Risk Assessment data not available -->';

  // Create timestamp
  const timestamp = new Date().toISOString().slice(0, 10);

  console.log('Downloading 3 files...');
  
  // Download RAMS Master
  downloadFile(ramsContent, `RAMS_Master_${timestamp}.html`);
  
  // Download Method Statement
  setTimeout(() => downloadFile(msContent, `Method_Statement_${timestamp}.html`), 300);
  
  // Download Risk Assessment
  setTimeout(() => downloadFile(raContent, `Risk_Assessment_${timestamp}.html`), 600);
}



// Show button when scrolled down 300px
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to top smoothly when clicked
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// ========================================
// TAB SWITCHING (like DRM repo)
// ========================================
function showTab(tabId) {
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });
}