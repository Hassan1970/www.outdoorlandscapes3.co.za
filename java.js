// Enhanced form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            const formAlert = document.getElementById('formAlert');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '' || email === '' || message === '') {
                e.preventDefault();
                formAlert.textContent = 'Please fill in all required fields';
                formAlert.style.display = 'block';
                formAlert.className = 'form-alert alert-error';
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                formAlert.textContent = 'Please enter a valid email address';
                formAlert.style.display = 'block';
                formAlert.className = 'form-alert alert-error';
                return;
            }
            
            // If validation passes, the form will submit to FormSubmit
            formAlert.textContent = 'Sending your message...';
            formAlert.style.display = 'block';
            formAlert.className = 'form-alert alert-success';
        });
    }
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    console.log('OutDoor Crafts Lanscapes website loaded successfully!');
});