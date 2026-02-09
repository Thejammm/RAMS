
// Tab switching - clean version
(function() {
  'use strict';
  
  function showTab(tabId) {
    console.log('Switching to tab:', tabId);
    
    // Update buttons
    document.querySelectorAll('.tab-button').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    // Update panels
    document.querySelectorAll('.tab-panel').forEach(function(panel) {
      panel.classList.toggle('active', panel.id === tabId);
    });
  
    // Update body attribute for CSS targeting
    document.body.setAttribute('data-active-tab', tabId);
    
    // Reinitialize snippets for the active tab
    setTimeout(function() {
      if (tabId === 'tab-ms' && window.populateMSSnippets) {
        window.populateMSSnippets();
        console.log('✅ MS snippets reinitialized for tab switch');
      } else if (tabId === 'tab-ra' && window.populateRASnippets) {
        window.populateRASnippets();
        console.log('✅ RA snippets reinitialized for tab switch');
      }
    }, 50);
  }
  
  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
  
  function initTabs() {
    console.log('Tab switcher initializing...');
    
    document.querySelectorAll('.tab-button').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const tabId = this.getAttribute('data-tab');
        if (tabId) {
          showTab(tabId);
        }
      });
    });
    
    console.log('✓ Tab switcher ready');
  }
})();

// =============================================
// RISK ASSESSMENT - SIMPLE INLINE SCRIPT 
// =============================================

console.log('✅ RA inline script loaded');

// Track which table was last clicked
var lastClickedTable = null;

// Track which ROW was last clicked (for Clear Row & Remove Clicked Row)
var lastClickedHazardRow = null;

// Track which form page was last interacted with
var lastClickedFormPage = null;

// Listen for clicks in any table
document.addEventListener('click', function(e) {
  var cell = e.target.closest('td, th');
  if (cell) {
    lastClickedTable = cell.closest('table');
    console.log('📍 Clicked in table:', lastClickedTable.className);
    
    // If it's a hazards table, also track the specific row
    if (lastClickedTable && lastClickedTable.classList.contains('hazardsTable')) {
      var row = e.target.closest('.hazardsTable tbody tr');
      if (row) {
        lastClickedHazardRow = row;
        console.log('📍 Hazard row clicked');
      }
    }
  }
  
  // Track which form page was clicked
  var formPage = e.target.closest('.form-page');
  if (formPage) {
    lastClickedFormPage = formPage;
  }
}, true);

// ===== ADD ROW =====
var btnAdd = document.getElementById('btnAddRow');
if (btnAdd) {
  btnAdd.onclick = function(e) {
    e.preventDefault();
    
    if (!lastClickedTable) {
      alert('Please click inside a table first');
      return;
    }
    
    var tbody = lastClickedTable.querySelector('tbody');
    if (!tbody) {
      alert('Table body not found');
      return;
    }
    
    var lastRow = tbody.querySelector('tr:last-child');
    if (!lastRow) {
      alert('No rows found in table');
      return;
    }
    
    // Clone the last row
    var newRow = lastRow.cloneNode(true);
    
    // Clear editable content
    newRow.querySelectorAll('[contenteditable="true"]').forEach(function(el) {
      el.innerHTML = '';
    });
    
    newRow.querySelectorAll('.editable').forEach(function(el) {
      el.innerHTML = '';
    });
    
    // Clear inputs
    newRow.querySelectorAll('input[type="text"]').forEach(function(el) {
      el.value = '';
    });
    
    // Clear checkboxes
    newRow.querySelectorAll('input[type="checkbox"]').forEach(function(el) {
      el.checked = false;
    });
    
    // Append new row
    tbody.appendChild(newRow);

    // If hazards table, setup risk dropdowns
    if (lastClickedTable.classList.contains('hazardsTable')) {
      setupRiskCellsForRow(newRow);
    }

    console.log('✅ Row added to', lastClickedTable.className);
    
    // Scroll to new row
    newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  console.log('✅ Add Row button connected');
}

// ===== REMOVE ROW =====
var btnRemove = document.getElementById('btnRemoveRow');
if (btnRemove) {
  btnRemove.onclick = function(e) {
    e.preventDefault();
    
    if (!lastClickedTable) {
      alert('Please click inside a table first');
      return;
    }
    
    var tbody = lastClickedTable.querySelector('tbody');
    if (!tbody) {
      alert('Table body not found');
      return;
    }
    
    var rows = tbody.querySelectorAll('tr');
    
    // Keep at least 1 row in all tables
    if (rows.length <= 1) {
      alert('Cannot remove the last row. At least one row must remain.');
      return;
    }
    
    // Remove last row
    var lastRow = tbody.querySelector('tr:last-child');
    if (lastRow) {
      lastRow.remove();
      console.log('✅ Row removed from', lastClickedTable.className);
    }
  };
  console.log('✅ Remove Row button connected');
}

// ===== DUPLICATE ROW (Hazards only) =====
var btnDup = document.getElementById('btnDuplicateRow');
if (btnDup) {
  btnDup.onclick = function(e) {
    e.preventDefault();
    
    if (!lastClickedTable) {
      alert('Please click inside a table first');
      return;
    }
    
    if (!lastClickedTable.classList.contains('hazardsTable')) {
      alert('Duplicate row only works in the Hazards table');
      return;
    }
    
    var tbody = lastClickedTable.querySelector('tbody');
    if (!tbody) return;
    
    var lastRow = tbody.querySelector('tr:last-child');
    if (!lastRow) return;
    
    // Clone WITH content
    var newRow = lastRow.cloneNode(true);
    tbody.appendChild(newRow);

    // Re-setup risk dropdowns
    setupRiskCellsForRow(newRow);

    console.log('✅ Row duplicated in Hazards table');
    
    newRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  console.log('✅ Duplicate Row button connected');
}

// ========================================
// CLEAR CLICKED ROW (NEW FUNCTION)
// ========================================
var btnClearRow = document.getElementById('btnClearRow');
if (btnClearRow) {
  btnClearRow.onclick = function(e) {
    e.preventDefault();
    
    if (!lastClickedHazardRow) {
      alert('⚠️ Please click inside a hazard table row first.');
      return;
    }

    var tr = lastClickedHazardRow;
    var cells = tr.children;

    // Clear all cells
    for (var i = 0; i < cells.length; i++) {
      var td = cells[i];
      
      // For risk dropdown columns (3 and 5) - RESET but KEEP structure
      if (i === 3 || i === 5) {
        var select = td.querySelector('.risk-select');
        var badge = td.querySelector('.badge');
        
        if (select) {
          select.value = '';  // Reset to "-- Select --"
          if (badge) {
            badge.className = 'badge';  // Remove color classes
            badge.textContent = '';      // Clear text
          }
        }
      } else {
        // For regular editable cells - WIPE content
        var div = td.querySelector('.editable');
        if (div) {
          div.innerHTML = '';
        } else {
          td.innerHTML = '';
          // Re-create the editable div structure
          var newDiv = document.createElement('div');
          newDiv.className = 'editable';
          newDiv.contentEditable = 'true';
          td.appendChild(newDiv);
        }
      }
    }

    console.log('✅ Row cleared (dropdowns reset, structure preserved)');
  };
  console.log('✅ Clear Row button connected');
}

// ========================================
// REMOVE CLICKED ROW (NEW FUNCTION)
// ========================================
var btnRemoveClicked = document.getElementById('btnRemoveClickedRow');
if (btnRemoveClicked) {
  btnRemoveClicked.onclick = function(e) {
    e.preventDefault();
    
    if (!lastClickedHazardRow) {
      alert('⚠️ Please click inside a hazard table row first.');
      return;
    }

    var tbody = lastClickedHazardRow.closest('tbody');
    if (!tbody) {
      alert('Table body not found.');
      return;
    }

    var rows = tbody.querySelectorAll('tr');
    
    // KEEP AT LEAST 1 ROW
    if (rows.length <= 1) {
      alert('Cannot remove the last row. At least one row must remain.');
      return;
    }

    // Remove the clicked row
    lastClickedHazardRow.remove();
    lastClickedHazardRow = null;
    
    console.log('✅ Clicked row removed');
  };
  console.log('✅ Remove Clicked Row button connected');
}

// ===== ADD PPE =====
var btnAddPPE = document.getElementById('btnAddPPE');
if (btnAddPPE) {
  btnAddPPE.onclick = function(e) {
    e.preventDefault();
    
    // Use the last clicked form page, or fall back to the button's closest form page
    var formPage = lastClickedFormPage || e.target.closest('.form-page') || document;
    var container = formPage.querySelector('.ppe-checks');
    
    if (!container) {
      alert('PPE checklist area not found');
      return;
    }
    
    var div = document.createElement('div');
    div.className = 'check';
    var id = 'ppe_' + Date.now();
    div.innerHTML = '<label><input type="checkbox" id="' + id + '"> <span class="editable" contenteditable="true">New PPE item</span></label>';
    
    container.appendChild(div);
    
    var span = div.querySelector('.editable');
    if (span) {
      span.focus();
      // Select all text
      var range = document.createRange();
      range.selectNodeContents(span);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    
    console.log('✅ PPE item added to form page');
  };
  console.log('✅ Add PPE button connected');
}

// ===== REMOVE PPE =====
var btnRemovePPE = document.getElementById('btnRemovePPE');
if (btnRemovePPE) {
  btnRemovePPE.onclick = function(e) {
    e.preventDefault();
    
    // Use the last clicked form page, or fall back to the button's closest form page
    var formPage = lastClickedFormPage || e.target.closest('.form-page') || document;
    var container = formPage.querySelector('.ppe-checks');
    
    if (!container) {
      alert('PPE checklist area not found');
      return;
    }
    
    var items = container.querySelectorAll('.check');
    if (items.length > 0) {
      items[items.length - 1].remove();
      console.log('✅ PPE item removed from form page');
    } else {
      alert('No PPE items to remove');
    }
  };
  console.log('✅ Remove PPE button connected');
}

console.log('🎉 RA script initialization complete');

// =============================================
// RISK DROPDOWNS FOR HAZARDS TABLE
// =============================================

function setupRiskForCell(td) {
  if (!td) return;
  
  // Skip if already setup
  if (td.querySelector('.risk-cell')) return;
  
  // Get existing value
  var raw = (td.textContent || '').trim().toLowerCase();
  var val = '';
  if (raw.includes('low')) val = 'low';
  if (raw.includes('medium')) val = 'medium';
  if (raw.includes('high')) val = 'high';
  
  // Clear cell
  td.innerHTML = '';
  td.contentEditable = 'false';
  
  // Create wrapper
  var wrap = document.createElement('div');
  wrap.className = 'risk-cell';
  
  // Create dropdown
  var sel = document.createElement('select');
  sel.className = 'risk-select';
  
  var options = [
    ['', '-- Select --'],
    ['low', 'LOW'],
    ['medium', 'MEDIUM'],
    ['high', 'HIGH']
  ];
  
  options.forEach(function(opt) {
    var option = document.createElement('option');
    option.value = opt[0];
    option.textContent = opt[1];
    sel.appendChild(option);
  });
  
  sel.value = val;
  
  // Create badge
  var badge = document.createElement('span');
  badge.className = 'badge';
  
  function updateColors() {
    badge.classList.remove('low', 'med', 'high');
    sel.classList.remove('low', 'med', 'high');
    
    if (sel.value === 'low') {
      badge.textContent = 'LOW';
      badge.classList.add('low');
      sel.classList.add('low');
    } else if (sel.value === 'medium') {
      badge.textContent = 'MEDIUM';
      badge.classList.add('med');
      sel.classList.add('med');
    } else if (sel.value === 'high') {
      badge.textContent = 'HIGH';
      badge.classList.add('high');
      sel.classList.add('high');
    } else {
      badge.textContent = '';
    }
  }
  
  sel.addEventListener('change', updateColors);
  updateColors();
  
  wrap.appendChild(sel);
  wrap.appendChild(badge);
  td.appendChild(wrap);
}

function setupRiskCellsForRow(tr) {
  var cells = tr.children;
  if (cells.length >= 7) {
    setupRiskForCell(cells[3]); // 4th column = Initial Risk
    setupRiskForCell(cells[5]); // 6th column = Residual Risk
  }
}

function setupRiskCellsForTable(table) {
  var tbody = table.querySelector('tbody');
  if (!tbody) return;
  
  var rows = tbody.querySelectorAll('tr');
  rows.forEach(function(row) {
    setupRiskCellsForRow(row);
  });
}

// Setup risk dropdowns on page load
document.querySelectorAll('.hazardsTable').forEach(function(table) {
  setupRiskCellsForTable(table);
});

console.log('✅ Risk dropdowns initialized');





// ══════════════════════════���════════════════════════════════
// RA SNIPPET POPULATION & INSERT
// ═══════════════════════════════════════════════════════════

// Track last clicked table
var lastClickedTable = null;

document.addEventListener('click', function(e) {
  var table = e.target.closest('.hazardsTable');
  if (table) {
    lastClickedTable = table;
  }
});

// Populate RA snippet dropdown
function populateRASnippets() {
  if (!window.SNIPPETS || !window.SNIPPETS["RA Hazards"]) {
    console.warn('⚠️ RA snippets not loaded yet');
    return;
  }
  
  // Find ALL .ra-snip-select elements and populate them
  var selects = document.querySelectorAll('.ra-snip-select');
  if (selects.length === 0) {
    console.warn('⚠️ No RA snippet dropdowns found');
    return;
  }
  
  selects.forEach(function(select) {
    select.innerHTML = '<option value="">-- Select Hazard --</option>';
    
    window.SNIPPETS["RA Hazards"].forEach(function(snippet, index) {
      var option = document.createElement('option');
      option.value = index;
      option.textContent = snippet.title;
      select.appendChild(option);
    });
  });
  
  console.log('✅ RA snippet dropdowns populated:', selects.length, 'select(s) with', window.SNIPPETS["RA Hazards"].length, 'snippets');
}

// Insert RA snippet into table
document.addEventListener('click', function(e) {
  if (e.target.closest('.snip-insert-ra')) {
    var btn = e.target.closest('.snip-insert-ra');
    var toolbar = btn.closest('.snippet-toolbar');
    if (!toolbar) {
      console.warn('⚠️ Snippet toolbar not found');
      return;
    }
    var select = toolbar.querySelector('.ra-snip-select');
    if (!select) {
      console.warn('⚠️ RA snippet select not found');
      return;
    }
    var value = select.value;
    
    if (!value) {
      alert('Please select a hazard snippet first');
      return;
    }
    
    if (!window.SNIPPETS || !window.SNIPPETS["RA Hazards"]) {
      console.warn('⚠️ RA Hazards snippets not loaded');
      return;
    }
    
    var index = parseInt(value);
    var snippet = window.SNIPPETS["RA Hazards"][index];
    if (!snippet) {
      console.warn('⚠️ RA Snippet not found at index:', index);
      return;
    }
    
    // Find the hazards table - search in the same tab first
    var tab = btn.closest('.tab-panel');
    var table = tab ? tab.querySelector('.hazardsTable[data-role="hazards"]') : document.querySelector('.hazardsTable[data-role="hazards"]');
    
    if (!table) {
      alert('Hazards table not found');
      console.warn('⚠️ Hazards table not found');
      return;
    }
    
    var tbody = table.querySelector('tbody');
    if (!tbody) {
      console.warn('⚠️ Table body not found');
      return;
    }
    
    // Get the target row - use the last clicked row if available, otherwise use the last row
    var rows = tbody.querySelectorAll('tr');
    if (rows.length === 0) {
      console.warn('⚠️ No rows in hazards table');
      return;
    }
    
    var targetRow = lastClickedHazardRow || rows[rows.length - 1];
    if (!targetRow) return;
    
    console.log('📝 Inserting snippet into row:', targetRow === lastClickedHazardRow ? 'clicked row' : 'last row');
    
    var cells = targetRow.children;
    
    console.log('🔍 Populating', cells.length, 'cells in target row');
    console.log('Row HTML:', targetRow.innerHTML);
    
    // Populate cells - try multiple selectors since structure might vary
    // Column 0: Hazard
    if (cells[0] && snippet.hazard) {
      console.log('Col 0:', cells[0].outerHTML);
      // Try multiple selector strategies
      var div = cells[0].querySelector('div.editable') || 
                cells[0].querySelector('div[contenteditable]') ||
                cells[0];
      console.log('Col 0 - Hazard target:', div.tagName, 'innerHTML length:', div.innerHTML.length);
      div.innerHTML = snippet.hazard;
    }
    
    // Column 1: Who
    if (cells[1] && snippet.who) {
      console.log('Col 1:', cells[1].outerHTML);
      var div = cells[1].querySelector('div.editable') || 
                cells[1].querySelector('div[contenteditable]') ||
                cells[1];
      console.log('Col 1 - Who target:', div.tagName);
      div.innerHTML = snippet.who;
    }
    
    // Column 2: How
    if (cells[2] && snippet.how) {
      console.log('Col 2:', cells[2].outerHTML);
      var div = cells[2].querySelector('div.editable') || 
                cells[2].querySelector('div[contenteditable]') ||
                cells[2];
      console.log('Col 2 - How target:', div.tagName);
      div.innerHTML = snippet.how;
    }
    
    // Column 3: Initial Risk (dropdown)
    if (cells[3] && snippet.init) {
      var riskSelect = cells[3].querySelector('.risk-select');
      if (riskSelect) {
        riskSelect.value = snippet.init;
        riskSelect.dispatchEvent(new Event('change'));
      }
    }
    
    // Column 4: Controls
    if (cells[4] && snippet.controls) {
      console.log('Col 4:', cells[4].outerHTML);
      var div = cells[4].querySelector('div.editable') || 
                cells[4].querySelector('div[contenteditable]') ||
                cells[4];
      console.log('Col 4 - Controls target:', div.tagName);
      div.innerHTML = snippet.controls;
    }
    
    // Column 5: Residual Risk (dropdown)
    if (cells[5] && snippet.resid) {
      var riskSelect = cells[5].querySelector('.risk-select');
      if (riskSelect) {
        riskSelect.value = snippet.resid;
        riskSelect.dispatchEvent(new Event('change'));
      }
    }
    
    // Column 6: Action by
    if (cells[6] && snippet.action) {
      console.log('Col 6:', cells[6].outerHTML);
      var div = cells[6].querySelector('div.editable') || 
                cells[6].querySelector('div[contenteditable]') ||
                cells[6];
      console.log('Col 6 - Action target:', div.tagName);
      div.innerHTML = snippet.action;
    }
    
    console.log('✅ RA snippet inserted:', snippet.title);
  }
});

// Make populateRASnippets globally accessible
window.populateRASnippets = populateRASnippets;

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateRASnippets);
} else {
  populateRASnippets();
}
document.addEventListener('rams:dateChanged', (e) => {
  const d = e.detail?.display;
  if (!d) return;

  const el = document.getElementById('lhDatera'); // (make sure RA date id is UNIQUE)
  if (el) el.textContent = d;
});
