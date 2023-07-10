function generatePDF() {
    let content = document.getElementById('newspdf');
    let element = content.cloneNode(true);
    element.style.marginTop = 0;
    element.style.marginBottom = 1000;
    var opt = {
          margin:       [-15, 2, 0, 2],
          filename:     'html2pdf_example.pdf',
          image:        { type: 'png', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'cm', format: 'letter', orientation: 'portrait' }
        };
        // Choose the element that our invoice is rendered in.
        html2pdf().set(opt).from(element).save();
    }