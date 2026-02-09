// ═══════════════════════════════════════════════════════════
// PDF EXPORT - jsPDF + html2canvas
// Adapted from Site Inspection Report working implementation
// ═══════════════════════════════════════════════════════════

async function generatePDF() {
  const btn = document.getElementById('btnExportPDF');
  const status = document.getElementById('pdf-status');
  const originalText = btn ? btn.textContent : 'Export PDF';
  
  if (btn) {
    btn.textContent = '⏳ Generating PDF...';
    btn.disabled = true;
  }
  if (status) {
    status.textContent = '⏳ Generating RAMS PDF...';
    status.style.color = '#0066cc';
  }

  try {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
      throw new Error('jsPDF library not loaded. Please ensure jsPDF is included in the HTML.');
    }
    
    const doc = new jsPDF();
    let currentPage = 1;
    let y = 20;
    
    console.log('=== RAMS PDF Generation Started ===');
    
    // ========================================
    // PAGE 1: COVER PAGE / LETTERHEAD
    // ========================================
    
    // Get letterhead data
    const lhProducer = document.getElementById('lhProducer')?.textContent || 'RAMS Document';
    const lhClientName = document.getElementById('lhClientName')?.textContent || 'Client Name';
    const lhTitle = document.getElementById('lhTitle')?.textContent || 'Risk Assessment & Method Statement';
    const lhSubtitle = document.getElementById('lhSubtitle')?.textContent || '';
    const lhDate = document.getElementById('lhDate')?.textContent || new Date().toLocaleDateString();
    
    // Try to load logo
    let logoLoaded = false;
    try {
      const logoImg = document.getElementById('main-logo-img');
      if (logoImg && logoImg.src && !logoImg.src.includes('data:image')) {
        const logoCanvas = await html2canvas(logoImg, {
          scale: 3,
          backgroundColor: null,
          logging: false,
          useCORS: true,
          allowTaint: true
        });
        const logoData = logoCanvas.toDataURL('image/png');
        const logoWidth = 50;
        const logoHeight = (logoCanvas.height * logoWidth) / logoCanvas.width;
        doc.addImage(logoData, 'PNG', 15, 10, logoWidth, Math.min(logoHeight, 25));
        logoLoaded = true;
        console.log('✓ Logo added to PDF');
      }
    } catch (e) {
      console.log('⚠ Could not load logo:', e.message);
    }
    
    // Title
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(20, 30, 60);
    doc.text('RAMS', 105, 30, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(40, 40, 40);
    doc.text('Risk Assessment & Method Statement', 105, 40, { align: 'center' });
    
    // Separator line
    doc.setDrawColor(70, 130, 180);
    doc.setLineWidth(0.8);
    doc.line(20, 50, 190, 50);
    
    y = 65;
    
    // Project info box
    doc.setFillColor(245, 248, 252);
    doc.roundedRect(25, y - 5, 160, 80, 4, 4, 'F');
    doc.setDrawColor(70, 130, 180);
    doc.setLineWidth(0.5);
    doc.roundedRect(25, y - 5, 160, 80, 4, 4, 'S');
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(50, 50, 50);
    
    doc.text('Project:', 30, y);
    doc.setFont(undefined, 'normal');
    const projectLines = doc.splitTextToSize(lhTitle, 100);
    doc.text(projectLines, 60, y);
    y += Math.max(projectLines.length * 6, 12);
    
    doc.setFont(undefined, 'bold');
    doc.text('Producer:', 30, y);
    doc.setFont(undefined, 'normal');
    doc.text(cleanRAMSText(lhProducer), 60, y);
    y += 10;
    
    doc.setFont(undefined, 'bold');
    doc.text('Client:', 30, y);
    doc.setFont(undefined, 'normal');
    doc.text(cleanRAMSText(lhClientName), 60, y);
    y += 10;
    
    if (lhSubtitle) {
      doc.setFont(undefined, 'bold');
      doc.text('Subtitle:', 30, y);
      doc.setFont(undefined, 'normal');
      doc.text(cleanRAMSText(lhSubtitle), 60, y);
      y += 10;
    }
    
    doc.setFont(undefined, 'bold');
    doc.text('Date:', 30, y);
    doc.setFont(undefined, 'normal');
    doc.text(lhDate, 60, y);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont(undefined, 'italic');
    doc.text('Confidential Document', 105, 270, { align: 'center' });
    
    addRAMSPageFooter(doc, currentPage);
    
    // ========================================
    // PAGE 2+: RAMS SECTIONS
    // ========================================
    
    const sections = document.querySelectorAll('.section');
    console.log('Found RAMS sections:', sections.length);
    
    if (sections.length > 0) {
      sections.forEach((section, index) => {
        console.log(`Processing section ${index + 1}`);
        
        doc.addPage();
        currentPage++;
        y = 20;
        
        // Section header
        const headerEl = section.querySelector('h3, h4, .section-header');
        const sectionTitle = headerEl ? headerEl.textContent.trim() : `Section ${index + 1}`;
        
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(20, 30, 60);
        doc.text(sectionTitle, 20, y);
        
        doc.setDrawColor(70, 130, 180);
        doc.setLineWidth(0.5);
        doc.line(20, y + 3, 190, y + 3);
        
        y += 15;
        
        // Section content - get all contenteditable divs
        const contentDivs = section.querySelectorAll('[contenteditable="true"]');
        
        contentDivs.forEach((content, divIndex) => {
          const text = getRAMSFormattedText(content);
          if (text) {
            if (y > 250) {
              addRAMSPageFooter(doc, currentPage);
              doc.addPage();
              currentPage++;
              y = 20;
              
              doc.setFontSize(14);
              doc.setFont(undefined, 'bold');
              doc.setTextColor(20, 30, 60);
              doc.text(sectionTitle + ' (continued)', 20, y);
              y += 10;
            }
            
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(40, 40, 40);
            
            const textLines = doc.splitTextToSize(text, 170);
            doc.text(textLines, 20, y);
            y += textLines.length * 5 + 8;
          }
        });
        
        addRAMSPageFooter(doc, currentPage);
      });
    }
    
    // ========================================
    // SAVE PDF
    // ========================================
    
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `RAMS-${lhTitle.substring(0, 20)}-${timestamp}.pdf`;
    doc.save(filename);
    
    console.log('=== RAMS PDF Generated Successfully ===');
    console.log('Filename:', filename);
    console.log('Total pages:', currentPage);
    
    if (status) {
      status.textContent = `✅ PDF Generated: ${filename}`;
      status.style.color = '#00aa00';
      setTimeout(() => status.textContent = '', 3000);
    }
    
  } catch (error) {
    console.error('❌ PDF generation failed:', error);
    if (status) {
      status.textContent = `❌ Error: ${error.message}`;
      status.style.color = '#cc0000';
    }
    alert(`Failed to generate PDF.\n\nError: ${error.message}\n\nCheck console (F12) for details.`);
  } finally {
    if (btn) {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  }
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function getRAMSFormattedText(element) {
  if (!element) return '';
  
  let html = element.innerHTML;
  
  let text = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<div>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<p>/gi, '')
    .replace(/<li>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<ul>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<b>|<strong>/gi, '')
    .replace(/<\/b>|<\/strong>/gi, '')
    .replace(/<i>|<em>/gi, '')
    .replace(/<\/i>|<\/em>/gi, '')
    .replace(/<u>/gi, '')
    .replace(/<\/u>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  return text;
}

function cleanRAMSText(text) {
  if (!text) return '';
  return text
    .replace(/[^\x20-\x7E\n]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function addRAMSPageFooter(doc, pageNum) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(20, 280, 190, 280);
  
  doc.setTextColor(120, 120, 120);
  doc.setFont('helvetica', 'bold');
  doc.text('Produced by AHS', 20, 287);
  doc.setFont('helvetica', 'normal');
  doc.text('Confidential — RAMS Document', 105, 287, { align: 'center' });
  doc.text(`Page ${pageNum}`, 190, 287, { align: 'right' });
}

// Wire up button
document.addEventListener('DOMContentLoaded', function() {
  const pdfBtn = document.getElementById('btnExportPDF');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', generatePDF);
    console.log('✅ PDF export ready (jsPDF + html2canvas)');
  }
});