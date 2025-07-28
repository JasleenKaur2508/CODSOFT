// Initialize AOS
AOS.init();

// Contact form submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out! I’ll get back to you soon.');
      form.reset();
    });
  }
});
