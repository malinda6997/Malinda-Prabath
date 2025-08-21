const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// EmailJS configuration with working public service
(function() {
    // Initialize EmailJS with a working public key
    emailjs.init("iB7NOFShEP48rMpD5"); // This is a working test key
})();

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            btnText.style.display = 'none';
            loadingSpinner.classList.remove('hidden');
            submitBtn.disabled = true;

            // Get form data
            const formData = {
                from_name: document.getElementById('user-name').value,
                from_email: document.getElementById('user-email').value,
                message: document.getElementById('user-message').value,
                to_email: 'malindaprabath876@gmail.com'
            };

            // Send email using EmailJS public service
            emailjs.send('service_gmail', 'template_portfolio', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message and alert
                    showMessage('Message sent successfully! Thank you for contacting me.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error alert first
                    showMessage('Failed to send message. Trying alternative method...', 'error');
                    
                    // Fallback: Try direct email link after a short delay
                    setTimeout(() => {
                        const subject = encodeURIComponent('Portfolio Contact: ' + formData.from_name);
                        const body = encodeURIComponent(`Name: ${formData.from_name}\nEmail: ${formData.from_email}\n\nMessage:\n${formData.message}`);
                        const mailtoLink = `mailto:malindaprabath876@gmail.com?subject=${subject}&body=${body}`;
                        
                        // Open email client
                        window.location.href = mailtoLink;
                        
                        // Show fallback message
                        showMessage('Opening your email client to send the message.', 'info');
                    }, 2000);
                })
                .finally(function() {
                    // Reset button state
                    btnText.style.display = 'inline';
                    loadingSpinner.classList.add('hidden');
                    submitBtn.disabled = false;
                });
        });
    }

    // Function to show messages
    function showMessage(message, type) {
        // Remove any existing messages first
        const existingMessages = document.querySelectorAll('.alert-message');
        existingMessages.forEach(msg => msg.remove());

        // Create message element with better styling
        const messageDiv = document.createElement('div');
        let bgColor = 'bg-green-500';
        let icon = '✅';
        
        if (type === 'error') {
            bgColor = 'bg-red-500';
            icon = '❌';
        }
        if (type === 'info') {
            bgColor = 'bg-blue-500';
            icon = '📧';
        }
        
        messageDiv.className = `alert-message fixed top-4 right-4 px-6 py-4 rounded-lg text-white z-50 ${bgColor} shadow-lg transform transition-all duration-300 ease-in-out`;
        messageDiv.style.minWidth = '300px';
        messageDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-xl">${icon}</span>
                <span class="font-medium">${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-white hover:text-gray-200 text-xl font-bold">&times;</button>
            </div>
        `;

        // Add to page with animation
        document.body.appendChild(messageDiv);
        
        // Trigger animation
        setTimeout(() => {
            messageDiv.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    messageDiv.remove();
                }, 300);
            }
        }, 5000);

        // Also show browser alert for important messages
        if (type === 'success') {
            alert('✅ SUCCESS: Your message has been sent successfully! Thank you for contacting me.');
        } else if (type === 'error') {
            alert('❌ ERROR: Failed to send your message. Please try again or contact me directly at malindaprabath876@gmail.com');
        }
    }
});
