// Simple navigation with data passing via URL

// Get data from URL parameters
function getUrlData() {
  const params = new URLSearchParams(window.location.search);
  return {
    projectName: params.get('project') || '',
    clientName: params.get('client') || '',
    siteAddress: params.get('site') || '',
    preparedBy: params.get('prepared') || '',
    startDate: params.get('startdate') || '',
    documentDate: params.get('docdate') || '',
    worksDescription: params.get('works') || '',
    docRefMaster: params.get('refmaster') || '',
    docRefMS: params.get('refms') || '',
    docRefRA: params.get('refra') || ''
  };
}

// Fill fields from URL on page load
function fillFieldsFromUrl() {
  const data = getUrlData();
  
  document.querySelectorAll('[data-field]').forEach(element => {
    const fieldName = element.getAttribute('data-field');
    if (data[fieldName]) {
      if (element.tagName === 'INPUT') {
        element.value = data[fieldName];
      } else {
        element.textContent = data[fieldName];
      }
    }
  });
}

// Collect current data from page
function collectPageData() {
  const data = {};
  document.querySelectorAll('[data-field]').forEach(element => {
    const fieldName = element.getAttribute('data-field');
    let value = '';
    
    if (element.tagName === 'INPUT') {
      value = element.value;
    } else {
      value = element.textContent.trim();
    }
    
    if (value) {
      data[fieldName] = value;
    }
  });
  return data;
}

// Build URL with data
function buildUrlWithData(baseUrl) {
  const data = collectPageData();
  const params = new URLSearchParams();
  
  if (data.projectName) params.set('project', data.projectName);
  if (data.clientName) params.set('client', data.clientName);
  if (data.siteAddress) params.set('site', data.siteAddress);
  if (data.preparedBy) params.set('prepared', data.preparedBy);
  if (data.startDate) params.set('startdate', data.startDate);
  if (data.documentDate) params.set('docdate', data.documentDate);
  if (data.worksDescription) params.set('works', data.worksDescription);
  if (data.docRefMaster) params.set('refmaster', data.docRefMaster);
  if (data.docRefMS) params.set('refms', data.docRefMS);
  if (data.docRefRA) params.set('refra', data.docRefRA);
  
  return baseUrl + (params.toString() ? '?' + params.toString() : '');
}

// Update navigation links to include data
function updateNavLinks() {
  document.querySelectorAll('.nav-tab').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const baseUrl = this.getAttribute('href');
      const newUrl = buildUrlWithData(baseUrl);
      window.location.href = newUrl;
    });
  });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
  fillFieldsFromUrl();
  updateNavLinks();
});