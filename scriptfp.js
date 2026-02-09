function init() {
  initDatePickerFP();

  // if you have global sync, keep it
  if (typeof syncDatesAcrossTabs === 'function') {
    syncDatesAcrossTabs();
  }
}

document.addEventListener('DOMContentLoaded', init);

// ===============================
// DATE PICKER (Front Page only)
// ===============================
function initDatePickerFP() {
  const dateDisplay = document.getElementById('lhDatefp');
  const dateModal = document.getElementById('dateModalfp');
  const currentMonthSpan = document.getElementById('dateCurrentMonthfp');
  const calendarDays = document.getElementById('dateDaysfp');
  const prevBtn = document.getElementById('datePrevBtnfp');
  const nextBtn = document.getElementById('dateNextBtnfp');
  const hiddenInput = document.getElementById('lhDatePickerfp');

  if (!dateDisplay || !dateModal) return;

  // Prevent duplicate binding
  if (dateDisplay.dataset.dpBound === '1') return;
  dateDisplay.dataset.dpBound = '1';

  let currentDate = new Date();
  let selectedDate = new Date();

  function formatDateDisplay(date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function formatMonthYear(date) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getFullYear() === d2.getFullYear();
  }

  function closeModal() {
    dateModal.style.display = 'none';
  }

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    if (currentMonthSpan) currentMonthSpan.textContent = formatMonthYear(currentDate);
    if (!calendarDays) return;

    calendarDays.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const prevMonthDays = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = prevMonthDays - 1; i >= 0; i--) {
      const day = document.createElement('div');
      day.className = 'date-day other-month';
      day.textContent = prevMonthLastDay - i;
      calendarDays.appendChild(day);
    }

    const today = new Date();

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = document.createElement('div');
      day.className = 'date-day';
      day.textContent = i;

      const dayDate = new Date(year, month, i);

      if (isSameDay(dayDate, today)) day.classList.add('today');
      if (isSameDay(dayDate, selectedDate)) day.classList.add('selected');

day.addEventListener('click', function() {
  selectedDate = new Date(year, month, i);
  dateDisplay.textContent = formatDateDisplay(selectedDate);

  const hiddenInput = document.getElementById('lhDatePicker');
  if (hiddenInput) {
    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dd = String(selectedDate.getDate()).padStart(2, '0');
    hiddenInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // ✅ DISPATCH GLOBAL EVENT (THIS IS STEP 4)
  document.dispatchEvent(new CustomEvent('rams:dateChanged', {
    detail: {
      iso: selectedDate.toISOString().slice(0, 10),         // "2026-01-22"
      display: formatDateDisplay(selectedDate)              // "22 Jan 2026"
    }
  }));

  closeModal();
});


      calendarDays.appendChild(day);
    }

    const totalCells = calendarDays.children.length;
    const cellsToFill = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 1; i <= cellsToFill; i++) {
      const day = document.createElement('div');
      day.className = 'date-day other-month';
      day.textContent = i;
      calendarDays.appendChild(day);
    }
  }

  // Style and initial text
  dateDisplay.style.cursor = 'pointer';
  dateDisplay.style.textDecoration = 'underline';
  dateDisplay.title = 'Click to change date';

  const initialText = dateDisplay.textContent?.trim() || formatDateDisplay(selectedDate);
dateDisplay.textContent = initialText;
document.dispatchEvent(new CustomEvent('rams:dateChanged', {
  detail: { iso: '', display: initialText }
}));


  dateDisplay.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    currentDate = new Date(selectedDate);
    renderCalendar();
    dateModal.style.display = 'block';
  });

  if (prevBtn) prevBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); });

  window.addEventListener('click', (e) => { if (e.target === dateModal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && dateModal.style.display === 'block') closeModal(); });
}






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
  function makeUid(prefix){
  return (prefix || 'sec') + '-' + Date.now() + '-' + Math.random().toString(16).slice(2);
}

// Give every [data-persist] inside a section a unique data-key (only if it doesn't already have one)
function assignPersistKeys(sectionEl){
  if(!sectionEl) return;

  // Ensure the section has a stable id for grouping keys
  if (!sectionEl.getAttribute('data-section-id')) {
    sectionEl.setAttribute('data-section-id', makeUid('section'));
  }
  var sid = sectionEl.getAttribute('data-section-id');

  // Assign keys to persist elements (skip those that already have name/id/data-key)
  var idx = 0;
  sectionEl.querySelectorAll('[data-persist]').forEach(function(el){
    var hasKey =
      el.getAttribute('name') ||
      el.id ||
      el.getAttribute('data-key');

    if(!hasKey){
      el.setAttribute('data-key', sid + '::' + (idx++));
    }
  });
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
    assignPersistKeys(clone);
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
    if (window.UniversalSave && window.UniversalSave.save) {
  try { window.UniversalSave.save(); } catch(_){}
}

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

function addFormPage(){
  var container = document.getElementById('formPages');
  if(!container){ alert('Form pages container not found.'); return; }
  
  // Clone the first form-page as a template
  var template = container.querySelector('.form-page');
  if(!template){ alert('No form page template found.'); return; }
  
  var newPage = template.cloneNode(true);
  
  // Remove letterhead from cloned page
  newPage.querySelectorAll('.letterhead').forEach(function(el) {
    el.remove();
  });
  
  // CRITICAL: Remove all script tags from cloned page to prevent duplicate handlers
  newPage.querySelectorAll('script').forEach(function(script) {
    script.remove();
  });
  
  // CRITICAL: Remove tab navigation elements to prevent duplicate handlers
  newPage.querySelectorAll('.tab-button, .tab-buttons, .tabs-container, [class*="tab-btn"]').forEach(function(el) {
    el.remove();
  });
  
  stripIds(newPage);
  
  // Reset contenteditable content EXCEPT for PPE, COSHH, Equipment, Sign-off
  newPage.querySelectorAll('[contenteditable="true"]').forEach(function(el){
    // Check if this element is inside a section we want to PRESERVE
    var preserve = 
      el.closest('.ppe-wrap') ||
      el.closest('.ppe-checks') ||
      el.closest('.equip-table') ||
      el.closest('.coshh-table') ||
      el.closest('.signreg-table') ||
      el.classList.contains('editable-meta') ||
      el.classList.contains('sig-value');
    
    // Only clear if NOT in a preserved section
    if (!preserve) {
      el.innerHTML = '';
    }
  });
  
  // Reset form inputs EXCEPT checkboxes in PPE section
  newPage.querySelectorAll('input[type="text"], textarea, select').forEach(function(el){
    // Don't reset if inside PPE section
    if (el.closest('.ppe-wrap') || el.closest('.ppe-checks')) {
      return; // Skip, keep the value
    }
    
    if(el.type === 'checkbox' || el.type === 'radio'){
      el.checked = false;
    } else {
      el.value = '';
    }
  });
  
// Reset hazards table to 1 blank row with risk dropdowns
newPage.querySelectorAll('.hazardsTable').forEach(function(table) {
  var tbody = table.querySelector('tbody');
  if (tbody) {
    tbody.innerHTML = '';
    
    // Create one blank row
    var tr = document.createElement('tr');
    
    for (var i = 0; i < 7; i++) {
      var td = document.createElement('td');
      td.contentEditable = 'true';
      td.className = 'editable';
      tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
    
    // Use the existing setupRiskCellsForRow function to create dropdowns
    if (typeof setupRiskCellsForRow === 'function') {
      setupRiskCellsForRow(tr);
    }
    
    console.log('✅ Blank hazard row created with risk dropdowns');
  }
});
  
  container.appendChild(newPage);
  newPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  console.log('✅ New form added - PPE, COSHH, Equipment preserved (tabs removed)');
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
  // ===============================
// Persist dynamic section structure
// ===============================



// Restore sections BEFORE UniversalSave hydrates field values
window.__RESTORE_TEMPLATE_EXTRA__ = function (data) {
  if (!data || !Array.isArray(data.__sections__)) return;

  var sheet = document.querySelector('.sheet');
  if (!sheet) return;

  // Remove existing sections
  Array.prototype.slice.call(sheet.querySelectorAll('.section')).forEach(function(s){
    s.parentNode.removeChild(s);
  });

  // Insert saved sections
  data.__sections__.forEach(function(item){
    sheet.insertAdjacentHTML('beforeend', item.html);
  });

  // Rebuild snippet UI + keys (so inserted sections work)
  Array.prototype.slice.call(sheet.querySelectorAll('.section')).forEach(function(sec){
    ensureSnippetUI(sec);
    assignPersistKeys(sec);
  });

  // Re-number headers
  renumberSections();
  if (typeof syncDatesAcrossTabs === 'function') {
  setTimeout(syncDatesAcrossTabs, 0);
}

};

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

