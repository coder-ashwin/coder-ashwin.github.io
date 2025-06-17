document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:info@aromapowerraise.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
        )}`;
        
        window.open(mailtoLink, '_blank');
    });
});
