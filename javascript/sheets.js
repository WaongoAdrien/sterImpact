// Enable Bootstrap validation
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
  
  // Form Submission and Handling
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Show loading spinner
    document.getElementById("loading").style.display = "block";
  
    // Create a new FormData object to collect form data
    const formData = new FormData(this);
  
    // Prepare Google Sheets script URL (update with your actual URL)
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec';
  
    // Send form data to Google Sheets
    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Show success message
      swal("Success!", "Your message has been submitted successfully.", "success");
  
      // Reset form
      document.getElementById("contact-form").reset();
      document.getElementById("loading").style.display = "none"; // Hide loading spinner
    })
    .catch(error => {
      // Show error message
      swal("Error", "There was a problem submitting the form. Please try again.", "error");
      document.getElementById("loading").style.display = "none"; // Hide loading spinner
    });
  });
  
  // Show selected file names (for multiple file uploads)
  document.getElementById("files").addEventListener("change", function() {
    const fileList = Array.from(this.files).map(file => file.name).join(", ");
    document.getElementById("file-list").innerText = `Selected: ${fileList}`;
  });
  