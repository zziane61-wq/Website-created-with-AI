// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simple validation
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (isValid) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                background: #2ecc71;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1rem;
                text-align: center;
                animation: slideDown 0.3s ease;
            `;
            successMsg.textContent = 'تم إرسال الرسالة بنجاح!';
            this.insertBefore(successMsg, this.firstChild);

            // Reset form
            this.reset();

            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    });
}
