/**
 * Risk Assessment Form - Main JavaScript
 * Handles rich text editing, form interactions, and document saving
 */

// ===========================================
// Simple Save Handler
// ===========================================
/*
(function () {
  function simpleSave() {
    try {
      const html = '<!doctype html>\n' + document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'RiskAssessment_' + new Date().toISOString().slice(0, 10) + '.html';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (err) {
      console.error('simpleSave failed', err);
      alert('Save failed: ' + err.message);
    }
  }

  const btn = document.getElementById('btnSaveHtml');
  if (!btn) return;
  btn.removeEventListener('click', simpleSave);
  btn.addEventListener('click', function (e) {
    try {
      if (typeof saveSingleFile === 'function') {
        const p = saveSingleFile();
        if (p && p.catch) p.catch(() => simpleSave());
        return;
      }
    } catch (_) { /* fall through  }
    simpleSave();
  });
})();
*/
// ===========================================
// Page Break Management
// ===========================================
(() => {
  function getTargetSection(btn) {
    const sel = getSelection && getSelection();
    let node = sel && sel.anchorNode;
    if (node && node.nodeType === 3) node = node.parentElement;
    return (node && node.closest && node.closest('section')) || btn.closest('section');
  }

  function togglePageBreakAfter(section) {
    if (!section) return;
    const next = section.nextElementSibling;
    if (next && next.classList.contains('page-break')) {
      next.remove();
    } else {
      section.insertAdjacentHTML(
        'afterend',
        '<div class="page-break" role="separator" aria-label="Page break (click to remove)" tabindex="0"></div>'
      );
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#btnAddPageBreak');
    if (!btn) return;
    e.preventDefault();
    togglePageBreakAfter(getTargetSection(btn));
  });

  document.addEventListener('click', (e) => {
    const mark = e.target.closest('.page-break');
    if (!mark) return;
    mark.remove();
  });

  document.addEventListener('keydown', (e) => {
    const mark = document.activeElement;
    if (!mark || !mark.classList || !mark.classList.contains('page-break')) return;
    if (e.key === 'Enter' || e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      mark.remove();
    }
  });
})();

// =============================================


// ===========================================
// Rich Text Editor Toolbar
// ===========================================
(() => {
  const toolbar = document.querySelector('.ra-rte');

  function activeEditable() {
    const sel = window.getSelection?.();
    let node = sel && sel.rangeCount ? sel.anchorNode : null;
    if (node && node.nodeType === 3) node = node.parentElement;
    return (node && node.closest('[contenteditable="true"]')) ||
      document.querySelector('[contenteditable="true"]');
  }

  function focusEditable() {
    const el = activeEditable();
    if (el) el.focus();
    return el;
  }

  function exec(cmd, value = null) {
    if (!focusEditable()) return;
    document.execCommand(cmd, false, value);
    refreshStates();
  }

  function refreshStates() {
    const stateful = ['bold', 'italic', 'underline', 'insertOrderedList', 'insertUnorderedList',
      'justifyLeft', 'justifyCenter', 'justifyRight'];
    stateful.forEach(cmd => {
      const on = document.queryCommandState(cmd);
      toolbar.querySelectorAll(`[data-cmd="${cmd}"]`)
        .forEach(btn => btn.classList.toggle('is-active', !!on));
    });
  }

  toolbar.addEventListener('mousedown', e => {
    if (e.target.closest('.rte-btn, .rte-select, input[type="color"]')) e.preventDefault();
  });

  document.addEventListener('click', e => {
    const btn = e.target.closest('.ra-rte [data-cmd]');
    if (!btn) return;

    const cmd = btn.getAttribute('data-cmd');

    if (cmd === 'createLink') {
      e.preventDefault();
      const url = prompt('Enter URL (https://…)');
      if (!url) return;
      const safe = /^(https?:)?\/\//i.test(url) ? url : 'https://' + url;
      exec('createLink', safe);
      return;
    }

    if (cmd === 'indent' || cmd === 'outdent') {
      e.preventDefault();
      exec(cmd);
      return;
    }

    e.preventDefault();
    exec(cmd);
  });

  const textPicker = document.getElementById('textColorPicker');
  document.getElementById('btnTextColor')?.addEventListener('click', () => {
    textPicker?.click();
  });
  textPicker?.addEventListener('input', e => exec('foreColor', e.target.value));

  const cellPicker = document.getElementById('cellColorPicker');
  document.getElementById('btnCellBg')?.addEventListener('click', () => {
    cellPicker?.click();
  });
  cellPicker?.addEventListener('input', e => {
    const sel = window.getSelection?.();
    let node = sel && sel.rangeCount ? sel.anchorNode : null;
    if (node && node.nodeType === 3) node = node.parentElement;
    const cell = node?.closest('td,th');
    if (cell) cell.style.backgroundColor = e.target.value;
  });

  document.addEventListener('selectionchange', () => {
    if (document.activeElement?.closest('[contenteditable="true"]')) refreshStates();
  });

  document.addEventListener('keydown', e => {
    const meta = e.ctrlKey || e.metaKey;
    if (!meta) return;
    const k = e.key.toLowerCase();
    if (k === 'b') { e.preventDefault(); exec('bold'); }
    if (k === 'i') { e.preventDefault(); exec('italic'); }
    if (k === 'u') { e.preventDefault(); exec('underline'); }
  });
})();

// ===========================================
// Selection Save/Restore for Toolbar
// ===========================================
(() => {
  const toolbar = document.querySelector('.ra-rte');
  if (!toolbar) return;

  let savedRange = null;

  function saveRange() {
    const sel = window.getSelection && window.getSelection();
    if (sel && sel.rangeCount) savedRange = sel.getRangeAt(0);
  }

  function restoreRange() {
    const sel = window.getSelection && window.getSelection();
    if (!sel || !savedRange) return;
    sel.removeAllRanges();
    sel.addRange(savedRange);
  }

  document.addEventListener('selectionchange', saveRange);

  toolbar.addEventListener('mousedown', e => {
    if (e.target.closest('.rte-btn, .rte-sep, input[type="color"], select')) {
      e.preventDefault();
      restoreRange();
    }
  });

  function focusEditable() {
    const sel = window.getSelection && window.getSelection();
    let node = sel && sel.rangeCount ? sel.anchorNode : null;
    if (node && node.nodeType === 3) node = node.parentElement;
    const ed = node && node.closest ? node.closest('[contenteditable="true"]') : null;
    const fallback = ed || document.querySelector('[contenteditable="true"]');
    if (fallback) fallback.focus();
    return !!fallback;
  }

  function exec(cmd, val = null) {
    if (!focusEditable()) return;
    restoreRange();
    document.execCommand(cmd, false, val);
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('.ra-rte [data-cmd]');
    if (!btn) return;
    e.preventDefault();
    const cmd = btn.getAttribute('data-cmd');

    if (cmd === 'createLink') {
      restoreRange();
      const url = prompt('Enter URL (https://…)');
      if (!url) return;
      const safe = /^(https?:)?\/\//i.test(url) ? url : 'https://' + url;
      exec('createLink', safe);
      return;
    }

    exec(cmd);
  });

  const textPicker = document.getElementById('textColorPicker');
  document.getElementById('btnTextColor')?.addEventListener('click', () => textPicker?.click());
  textPicker?.addEventListener('input', e => exec('foreColor', e.target.value));

  const cellPicker = document.getElementById('cellColorPicker');
  document.getElementById('btnCellBg')?.addEventListener('click', () => cellPicker?.click());
  cellPicker?.addEventListener('input', e => {
    restoreRange();
    const sel = window.getSelection && window.getSelection();
    let node = sel && sel.rangeCount ? sel.anchorNode : null;
    if (node && node.nodeType === 3) node = node.parentElement;
    const cell = node && node.closest ? node.closest('td,th') : null;
    if (cell) cell.style.backgroundColor = e.target.value;
  });

  function refreshStates() {
    const cmds = ['bold', 'italic', 'underline', 'insertUnorderedList', 'insertOrderedList', 'justifyLeft', 'justifyCenter', 'justifyRight'];
    cmds.forEach(c => {
      const on = document.queryCommandState(c);
      toolbar.querySelectorAll(`[data-cmd="${c}"]`).forEach(b => b.classList.toggle('is-active', !!on));
    });
  }

  document.addEventListener('selectionchange', () => {
    if (document.activeElement?.closest('[contenteditable="true"]')) refreshStates();
  });
})();

// ===========================================
// PPE Checklist Management
// ===========================================
function selectElementContents(el) {
  try {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } catch (_) { }
}

document.getElementById('btnAddPPE')?.addEventListener('click', function () {
  const sel = window.getSelection && window.getSelection();
  let node = sel && sel.rangeCount ? sel.anchorNode : null;
  if (node && node.nodeType === 3) node = node.parentElement;
  const ppeContainer = (node && node.closest) ? node.closest('.ppe-wrap')?.querySelector('.ppe-checks') : null;
  const container = ppeContainer || document.querySelector('.ppe-checks');
  if (!container) {
    alert('PPE checklist area not found');
    return;
  }
  const div = document.createElement('div');
  div.className = 'check';
  const id = 'ppe_new_' + Date.now();
  div.innerHTML = '<label><input type="checkbox" id="' + id + '"> <span class="editable" contenteditable="true">New PPE</span></label>';
  container.appendChild(div);
  const span = div.querySelector('.editable');
  if (span) {
    span.focus();
    selectElementContents(span);
  }
});

document.getElementById('btnRemovePPE')?.addEventListener('click', function () {
  const sel = window.getSelection && window.getSelection();
  let node = sel && sel.rangeCount ? sel.anchorNode : null;
  if (node && node.nodeType === 3) node = node.parentElement;
  const ppeContainer = (node && node.closest) ? node.closest('.ppe-wrap')?.querySelector('.ppe-checks') : null;
  const container = ppeContainer || document.querySelector('.ppe-checks');
  if (!container) {
    alert('PPE checklist area not found');
    return;
  }
  const last = container.querySelector('.check:last-child');
  if (last) last.remove();
});

// ===========================================
// COSHH Table Row Management
// ===========================================
document.querySelector('.coshh-add-row')?.addEventListener('click', function () {
  const table = document.querySelector('.coshh-table tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (!lastRow) return;
  const newRow = lastRow.cloneNode(true);
  newRow.querySelectorAll('td').forEach(td => {
    const editable = td.querySelector('.editable');
    if (editable) editable.textContent = '';
  });
  table.appendChild(newRow);
});

document.querySelector('.coshh-remove-row')?.addEventListener('click', function () {
  const table = document.querySelector('.coshh-table tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (lastRow && table.querySelectorAll('tr').length > 1) lastRow.remove();
});

// ===========================================
// Sign-off Register Row Management
// ===========================================
document.querySelector('.signreg-add-row')?.addEventListener('click', function () {
  const table = document.getElementById('signregTable')?.querySelector('tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (!lastRow) return;
  const newRow = lastRow.cloneNode(true);
  const rowNum = table.querySelectorAll('tr').length + 1;
  newRow.querySelector('.rowno').textContent = rowNum;
  newRow.querySelectorAll('.editable').forEach(el => el.textContent = '');
  table.appendChild(newRow);
});

document.querySelector('.signreg-remove-row')?.addEventListener('click', function () {
  const table = document.getElementById('signregTable')?.querySelector('tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (lastRow && table.querySelectorAll('tr').length > 1) lastRow.remove();
});

// ===========================================
// Hazards Table Row Management
// ===========================================
document.querySelector('.ra-add-row')?.addEventListener('click', function () {
  const table = document.querySelector('.hazardsTable tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (!lastRow) return;
  const newRow = lastRow.cloneNode(true);
  newRow.querySelectorAll('.editable').forEach(el => el.textContent = 'Add Text');
  newRow.querySelectorAll('select').forEach(select => select.value = '');
  table.appendChild(newRow);
});

document.querySelector('.ra-dup-last')?.addEventListener('click', function () {
  const table = document.querySelector('.hazardsTable tbody');
  if (!table) return;
  const lastRow = table.querySelector('tr:last-child');
  if (!lastRow) return;
  const newRow = lastRow.cloneNode(true);
  table.appendChild(newRow);
});

// ===========================================
// Helper Functions
// ===========================================
function closestPage(el){ return el.closest('.form-page') || document; }
function findInPage(el, selector){ const p = closestPage(el); return p ? p.querySelector(selector) : document.querySelector(selector); }
function findAllInPage(el, selector){ const p = closestPage(el); return p ? p.querySelectorAll(selector) : document.querySelectorAll(selector); }

// ===== Risk dropdowns (per hazards table) =====
function colorSelect(sel){
  sel.classList.remove('low','med','high');
  if(sel.value === 'low'){ sel.classList.add('low'); }
  else if(sel.value === 'medium'){ sel.classList.add('med'); }
  else if(sel.value === 'high'){ sel.classList.add('high'); }
}
function setBadge(badge, value){
  const v = (value||'').toLowerCase();
  badge.classList.remove('low','med','high');
  let label = '';
  if(v==='low'){ label='LOW'; badge.classList.add('low'); }
  else if(v==='medium'){ label='MEDIUM'; badge.classList.add('med'); }
  else if(v==='high'){ label='HIGH'; badge.classList.add('high'); }
  badge.textContent = label;
}
function makeSelect(current){
  const sel = document.createElement('select');
  sel.className = 'risk-select';
  [['','-- Select --'],['low','LOW'],['medium','MEDIUM'],['high','HIGH']].forEach(([val,lab])=>{
    const o = document.createElement('option'); o.value=val; o.textContent=lab; sel.appendChild(o);
  });
  sel.value = current || '';
  colorSelect(sel);
  sel.addEventListener('change', function(){
    colorSelect(sel);
    const badge = sel.parentElement && sel.parentElement.querySelector('.badge');
    if(badge){ setBadge(badge, sel.value); }
  });
  return sel;
}
function makeBadge(current){
  const b = document.createElement('span'); b.className='badge'; setBadge(b, current); return b;
}
function setupRiskForCell(td){
  if(!td) return;
  const existing = td.querySelector('.risk-cell');
  if(existing){
    const sel = existing.querySelector('select.risk-select');
    if(sel) colorSelect(sel);
    return;
  }
  const raw = (td.textContent||'').trim().toLowerCase();
  let val = '';
  if(raw.startsWith('low')) val='low';
  else if(raw.startsWith('medium')) val='medium';
  else if(raw.startsWith('high')) val='high';
  td.innerHTML='';
  td.contentEditable='false';
  const wrap = document.createElement('div'); wrap.className='risk-cell';
  const sel = makeSelect(val);
  const badge = makeBadge(val);
  wrap.appendChild(sel); wrap.appendChild(badge);
  td.appendChild(wrap);
}
function setupRiskCellsForTable(table){
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(tr => setupRiskCellsForRow(tr));
}
function setupRiskCellsForRow(tr){
  const cells = tr.children;
  if(cells && cells.length>=6){
    setupRiskForCell(cells[3]); // 4th col
    setupRiskForCell(cells[5]); // 6th col
  }
}

// ===== Hazards table row tools (delegated) =====
function ht_getTable(btn){ return findInPage(btn, '.hazardsTable'); }
function ht_getBody(btn){
  const t = ht_getTable(btn); if(!t) return null;
  return t.tBodies[0] || t.appendChild(document.createElement('tbody'));
}
function ht_cols(btn){ const t = ht_getTable(btn); return (t && t.tHead) ? t.tHead.querySelectorAll('th').length : 7; }

function ht_createBlankRow(btn){
  const tr = document.createElement('tr');
  const cols = ht_cols(btn);
  for(let i=0;i<cols;i++){
    const td = document.createElement('td');
    td.contentEditable = "true";
    td.classList.add('editable');
    tr.appendChild(td);
  }
  return tr;
}

function ht_addRow(btn){
  const tb = ht_getBody(btn); if(!tb) return;
  const tr = ht_createBlankRow(btn);
  tb.appendChild(tr);
  setupRiskCellsForRow(tr);
  tr.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function ht_dupLast(btn){
  const tb = ht_getBody(btn); if(!tb) return;
  const last = tb.lastElementChild;
  if(!last){ ht_addRow(btn); return; }
  const clone = last.cloneNode(true);
  clone.querySelectorAll('td').forEach(td => { td.contentEditable = "true"; td.classList.add('editable'); });
  tb.appendChild(clone);
  setupRiskCellsForRow(tb.lastElementChild);
  tb.lastElementChild.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function ht_removeLast(btn){
  const tb = ht_getBody(btn); if(!tb) return;
  if(tb.lastElementChild) tb.removeChild(tb.lastElementChild);
}

// ===== Sign-off register (per page) =====
function sr_table(btn){ return findInPage(btn, '.signreg-table'); }
function sr_body(btn){ const t = sr_table(btn); return t ? (t.tBodies[0] || t.appendChild(document.createElement('tbody'))) : null; }
function sr_renumber(root){ (root||document).querySelectorAll('.signreg-table tbody tr .rowno').forEach((td,i)=> td.textContent = (i+1).toString()); }

function sr_addRow(btn){
  const tb = sr_body(btn); if(!tb) return;
  const tr = document.createElement('tr');
  tr.innerHTML = '<td class="center rowno"></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="sig-box editable" contenteditable="true" role="textbox" aria-label="Signature"></div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>';
  tb.appendChild(tr);
  sr_renumber(tb);
}

function sr_removeRow(btn){
  const tb = sr_body(btn); if(!tb || tb.children.length<=1) return;
  tb.lastElementChild.remove();
  sr_renumber(tb);
}

// ===== COSHH table tools =====
function coshh_table(btn){ return findInPage(btn, '.coshh-table'); }
function coshh_body(btn){ const t = coshh_table(btn); return t ? (t.tBodies[0] || t.appendChild(document.createElement('tbody'))) : null; }

function coshh_addRow(btn){
  const tb = coshh_body(btn); if(!tb) return;
  const tr = document.createElement('tr');
  tr.innerHTML = '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>' +
    '<td><div class="editable" contenteditable="true">Click to edit</div></td>';
  tb.appendChild(tr);
}

function coshh_removeRow(btn){
  const tb = coshh_body(btn); if(!tb || tb.children.length<=1) return;
  tb.lastElementChild.remove();
}

// ===========================================
// Form Pages Management
// ===========================================
function clearEditableExceptMeta(root){
  // Clear editable content but preserve meta information and additional sections
  root.querySelectorAll('.editable').forEach(el => {
    // Skip if it's a meta element (preserve site details)
    if (el.classList.contains('editable-meta')) {
      return;
    }
    
    // Skip PPE checklist elements (preserve both labels and notes)
    const parentTable = el.closest('table');
    if (el.closest('.ppe-checks') || (parentTable && parentTable.querySelector('.ppe-checks'))) {
      return;
    }
    
    // Skip Equipment Details/Schedule table elements (correct class name: equip-table)
    if (el.closest('.equip-table')) {
      return;
    }
    
    // Skip COSHH Information table elements
    if (el.closest('.coshh-table')) {
      return;
    }
    
    // Skip Document Producer signature elements
    if (el.closest('.sig-grid') && el.classList.contains('sig-value')) {
      return;
    }
    
    // Skip Sign-off Register elements (preserve existing entries)
    if (el.closest('.signreg-table')) {
      return;
    }
    
    // Clear only the content that should be reset
    el.innerHTML = '';
  });
}

function resetHazards(root){
  root.querySelectorAll('.hazardsTable').forEach(tbl => {
    let tb = tbl.tBodies[0] || tbl.appendChild(document.createElement('tbody'));
    tb.innerHTML = '';
    const cols = (tbl.tHead ? tbl.tHead.querySelectorAll('th').length : 7);
    const tr = document.createElement('tr');
    for(let i=0;i<cols;i++){
      const td=document.createElement('td'); td.contentEditable="true"; td.classList.add('editable'); tr.appendChild(td);
    }
    tb.appendChild(tr);
    setupRiskCellsForTable(tbl);
  });
}

function resetSignReg(root){
  root.querySelectorAll('.signreg-table').forEach(tbl => {
    let tb = tbl.tBodies[0] || tbl.appendChild(document.createElement('tbody'));
    tb.innerHTML = '';
    const tr = document.createElement('tr');
    tr.innerHTML = '<td class="center rowno">1</td>' +
      '<td><div class="editable" contenteditable="true"></div></td>' +
      '<td><div class="editable" contenteditable="true"></div></td>' +
      '<td><div class="editable" contenteditable="true"></div></td>' +
      '<td><div class="sig-box editable" contenteditable="true" role="textbox" aria-label="Signature"></div></td>' +
      '<td><div class="editable" contenteditable="true"></div></td>';
    tb.appendChild(tr);
    sr_renumber(tbl);
  });
}

function addFormPage(){
  const pages = document.getElementById('formPages');
  const first = pages.querySelector('.form-page');
  if(!first) return;
  const clone = first.cloneNode(true);
  // Remove any nested script elements inside clone to avoid duplicate scripts
  clone.querySelectorAll('script').forEach(s => s.remove());
  // Clear user-entered content but PRESERVE site details, PPE, equipment, COSHH, signatures, and sign-off register
  clearEditableExceptMeta(clone);
  resetHazards(clone);
  // NOTE: NOT calling resetSignReg(clone) to preserve sign-off register content
  // Insert a remove button at top of clone (ensure exists)
  if(!clone.querySelector('.page-toolbar')){
    const pb = document.createElement('div');
    pb.className = 'no-print page-toolbar';
    pb.innerHTML = '<button type="button" class="btn danger remove-form-page">Remove this form</button>';
    clone.insertBefore(pb, clone.firstChild);
  }
  pages.appendChild(clone);
  // Initialize risk cells for hazards tables in the new page
  clone.querySelectorAll('.hazardsTable').forEach(setupRiskCellsForTable);
}

function removeFormPage(btn){
  const page = closestPage(btn);
  const pages = document.getElementById('formPages');
  const count = pages.querySelectorAll('.form-page').length;
  if(count <= 1){ alert('At least one form page must remain.'); return; }
  page.remove();
}

document.querySelector('.add-form-page')?.addEventListener('click', function () {
  addFormPage();
});

document.addEventListener('click', function(e){
  if(e.target.closest('.ra-add-row')){ ht_addRow(e.target); }
  if(e.target.closest('.ra-dup-last')){ ht_dupLast(e.target); }
  if(e.target.closest('.ra-remove-last')){ ht_removeLast(e.target); }
  if(e.target.closest('.signreg-add-row')){ sr_addRow(e.target); }
  if(e.target.closest('.signreg-remove-row')){ sr_removeRow(e.target); }
  if(e.target.closest('.coshh-add-row')){ coshh_addRow(e.target); }
  if(e.target.closest('.coshh-remove-row')){ coshh_removeRow(e.target); }
  if(e.target.closest('.remove-form-page')){ removeFormPage(e.target); }
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.remove-form-page');
  if (!btn) return;
  const page = btn.closest('.form-page');
  if (page) {
    const formPages = document.getElementById('formPages');
    if (formPages && formPages.querySelectorAll('.form-page').length > 1) {
      page.remove();
    }
  }
});

// ===========================================
// Image Upload Handler
// ===========================================
const imgPick = document.getElementById('imgPick');
if (imgPick) {
  imgPick.addEventListener('change', function (e) {
    const files = this.files;
    if (!files || !files[0]) return;
    const f = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      document.execCommand('insertHTML', false,
        '<img src="' + event.target.result + '" alt="" style="width:300px;max-width:100%;height:auto">');
    };
    reader.readAsDataURL(f);
    this.value = '';
  });
}

//====================SNIPPETS====================//
(function(){
  // Global state to persist across saves/reloads
  window.HazardSnippetState = window.HazardSnippetState || {
    LIB: Array.isArray(window.hazardSnippets) ? window.hazardSnippets : [],
    CURRENT: null,
    AUTO: false,
    initialized: false
  };
  
  const STATE = window.HazardSnippetState;
  const LIB = STATE.LIB;
  let CURRENT = STATE.CURRENT;
  let AUTO = STATE.AUTO;

  // --- helpers ---
  function selectionRow(){
    const s = getSelection(); if(!s || !s.rangeCount) return null;
    let n = s.getRangeAt(0).commonAncestorContainer;
    if(n.nodeType === 3) n = n.parentNode;
    return n.closest('table.hazardsTable tbody tr');
  }
  function setEditable(td, val){
    if(!td) return;
    
    // Check if the cell already has an editable div
    let div = td.querySelector('.editable');
    if(!div) {
      // If no editable div, create one and move existing content
      const existingContent = td.innerHTML;
      div = document.createElement('div');
      div.className = 'editable';
      div.contentEditable = 'true';
      td.innerHTML = '';
      td.appendChild(div);
    }
    
    // Set the new value
    div.innerHTML = val || '';
  }
  function setRisk(td, v){
    if(!td) return;
    v = (v||'').toLowerCase();
    const sel = td.querySelector('select.risk-select');
    if(sel){
      sel.value = v; sel.dispatchEvent(new Event('change', {bubbles:true}));
    }else{
      td.textContent = v;
      if(typeof window.setupRiskForCell === 'function') window.setupRiskForCell(td);
    }
  }
  function applySnippetToRow(tr, sn){
    if(!tr || !sn) return;
    
    const c = tr.children;           // columns: 0 hazard,1 who,2 how,3 init,4 controls,5 resid,6 action
    
    if (c.length < 7) return;
    
    setEditable(c[0], sn.hazard);
    setEditable(c[1], sn.who);
    setEditable(c[2], sn.how);
    setEditable(c[4], sn.controls);
    setEditable(c[6], sn.action);
    
    setRisk(c[3], sn.init);
    setRisk(c[5], sn.resid);
    
    if(typeof window.setupRiskCellsForRow === 'function') {
      window.setupRiskCellsForRow(tr);
    }
  }
  function applySnippetToCurrentRow(sn){ applySnippetToRow(selectionRow(), sn); }

  // --- tiny menu anchored to the RTE button ---
  function ensureMenu(){
    let m = document.getElementById('haz-snippet-menu');
    if(m) return m;

    m = document.createElement('div');
    m.id = 'haz-snippet-menu';
    m.style.cssText = 'position:absolute;z-index:1000;background:#fff;border:1px solid #ddd;border-radius:8px;padding:6px;box-shadow:0 8px 20px rgba(0,0,0,.12);min-width:240px;display:none;';
    m.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
        <strong style="font-size:12px">Hazard snippets</strong>
        <label style="font-size:12px;display:inline-flex;align-items:center;gap:6px;">
          <input type="checkbox" id="hazAutoChk"> auto-fill +row
        </label>
      </div>
      <div id="hazList" style="max-height:240px;overflow:auto;"></div>
    `;
    const list = m.querySelector('#hazList');
    
    LIB.forEach(s => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = s.title;
      b.style.cssText = 'display:block;width:100%;text-align:left;padding:6px 8px;border:0;background:#fff;border-radius:6px;font-size:12px;cursor:pointer;';
      b.addEventListener('mouseenter', ()=> b.style.background = '#f6f6f6');
      b.addEventListener('mouseleave', ()=> b.style.background = '#fff');
      
      b.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        CURRENT = s;
        STATE.CURRENT = s; // Persist state
        
        // Find the current row or use the first available row
        let targetRow = selectionRow();
        
        if (!targetRow) {
          // If no row is selected, use the last row in the hazards table
          const table = document.querySelector('table.hazardsTable');
          const tbody = table && table.querySelector('tbody');
          targetRow = tbody && tbody.lastElementChild;
        }
        
        if (targetRow) {
          applySnippetToRow(targetRow, CURRENT);
        } else {
          alert('Please click in a hazards table row first, or add a row to apply the snippet.');
        }
        
        hideMenu();
      });
      
      list.appendChild(b);
    });
    
    document.body.appendChild(m);

    m.addEventListener('click', e=> e.stopPropagation());
    document.addEventListener('click', hideMenu);
    m.querySelector('#hazAutoChk').addEventListener('change', e=> {
      AUTO = e.target.checked;
      STATE.AUTO = AUTO; // Persist state
    });

    return m;
  }
  function showMenu(anchorBtn){
    const m = ensureMenu();
    const r = anchorBtn.getBoundingClientRect();
    m.style.left = (window.scrollX + r.left) + 'px';
    m.style.top  = (window.scrollY + r.bottom + 6) + 'px';
    m.style.display = 'block';
    m.querySelector('#hazAutoChk').checked = AUTO;
  }
  function hideMenu(){
    const m = document.getElementById('haz-snippet-menu');
    if(m) m.style.display = 'none';
  }

  // Initialize snippet functionality
  function initSnippets(){
    if(STATE.initialized) return; // Prevent double initialization
    
    const btn = document.getElementById('btnToggleSnippets');
    
    if(btn && LIB.length){
      // Remove any existing listeners to prevent duplicates
      btn.replaceWith(btn.cloneNode(true));
      const newBtn = document.getElementById('btnToggleSnippets');
      
      newBtn.addEventListener('click', function(e){
        // If caret is inside a hazards row, open picker; else fall back to your original toggle text
        const currentRow = selectionRow();
        
        if(currentRow){
          e.stopPropagation();
          showMenu(newBtn);
        }else{
          // keep your existing toggle behaviour/text if you had it
          newBtn.textContent = newBtn.textContent.includes('On') ? 'Snippets: Off' : 'Snippets: On';
        }
      });
    }

    // Auto-apply to new rows added from the table's own add button
    document.addEventListener('click', function(e){
      if(!AUTO || !CURRENT) return;
      const addBtn = e.target.closest('.ra-add-row');  // your table "Add row" class
      if(!addBtn) return;
      setTimeout(function(){
        const page = addBtn.closest('.form-page') || document;
        const tbl  = page.querySelector('table.hazardsTable');
        const tr   = tbl && tbl.tBodies[0] && tbl.tBodies[0].lastElementChild;
        if(tr) applySnippetToRow(tr, CURRENT);
      }, 0);
    });

    // Setup mutation observers for new hazard rows
    document.querySelectorAll('table.hazardsTable tbody').forEach(tb=>{
      new MutationObserver(muts=>{
        if(!AUTO || !CURRENT) return;
        muts.forEach(m => m.addedNodes.forEach(n=>{
          if(n.nodeType===1 && n.tagName==='TR') applySnippetToRow(n, CURRENT);
        }));
      }).observe(tb, {childList:true});
    });
    
    STATE.initialized = true;
  }

  // Force initialization with multiple fallback methods
  function forceInit() {
    STATE.initialized = false; // Reset to allow re-initialization
    
    // Clean up any existing menus first
    const oldMenu = document.getElementById('haz-snippet-menu');
    if (oldMenu) oldMenu.remove();
    
    initSnippets();
  }

  // Try multiple initialization methods with robust timing
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceInit);
  } else {
    forceInit();
  }
  
  // Multiple fallback attempts to ensure reliable initialization
  setTimeout(forceInit, 50);
  setTimeout(forceInit, 200);
  setTimeout(forceInit, 500);
  setTimeout(forceInit, 1000);
  setTimeout(forceInit, 2000);
})();

// ===== AUTO-SAVE WITH RESTORE =====
(function() {
  let saveTimeout;
  const AUTOSAVE_DELAY = 500;
  const STORAGE_KEY = 'ra_autosave_data';

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

  function autoSave() {
    try {
      const fullHtml = document.documentElement.outerHTML;
      const timestamp = new Date().toISOString();
      
      localStorage.setItem(STORAGE_KEY, fullHtml);
      localStorage.setItem(STORAGE_KEY + '_ts', timestamp);
      
      console.log('✓ Risk Assessment saved');
      showSaveIndicator('✓ Saved');
    } catch (e) {
      console.error('Auto-save failed:', e);
      showSaveIndicator('✗ Save failed');
    }
  }

  function triggerAutoSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(autoSave, AUTOSAVE_DELAY);
  }

  // Listen for changes
  document.addEventListener('input', triggerAutoSave, true);
  document.addEventListener('change', triggerAutoSave, true);
  document.addEventListener('keyup', triggerAutoSave, true);
  document.addEventListener('click', triggerAutoSave, true);

  // Save periodically
  setInterval(autoSave, 2000);

  // RESTORE on page load
  window.addEventListener('load', function() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const timestamp = localStorage.getItem(STORAGE_KEY + '_ts');
    
    if (savedData && savedData.length > 100 && timestamp) {
      try {
        const savedDate = new Date(timestamp);
        const now = new Date();
        const hoursSince = (now - savedDate) / (1000 * 60 * 60);
        
        // Only restore if saved within last 24 hours
        if (hoursSince < 24) {
          const newDoc = new DOMParser().parseFromString(savedData, 'text/html');
          if (newDoc && newDoc.body) {
            const oldFormPages = document.getElementById('formPages');
            const newFormPages = newDoc.getElementById('formPages');
            
            if (oldFormPages && newFormPages) {
              // Restore sections inside formPages, preserving elements
              const oldSections = oldFormPages.querySelectorAll('section.form-page');
              const newSections = newFormPages.querySelectorAll('section.form-page');
              
              if (oldSections.length > 0 && newSections.length > 0) {
                // Restore each section's content
                newSections.forEach((newSection, index) => {
                  if (oldSections[index]) {
                    oldSections[index].innerHTML = newSection.innerHTML;
                  }
                });
                console.log('✓ Risk Assessment restored from auto-save');
                showSaveIndicator('✓ Restored');
              }
            }
          }
        }
      } catch (e) {
        console.error('Restore failed:', e);
      }
    }
  });

  // Save before leaving
  window.addEventListener('beforeunload', autoSave);

  console.log('✓ Risk Assessment auto-save initialized');
})();

// Clear auto-save function
function clearAutoSave() {
  if (confirm('Are you sure you want to clear auto-saved data?')) {
    localStorage.removeItem('ra_autosave_data');
    localStorage.removeItem('ra_autosave_data_ts');
    alert('Auto-save data cleared!');
  }
}
