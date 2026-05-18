// Header einfügen
fetch('components/header.html')
  .then(response => response.text())
  .then(data => document.querySelector('header').innerHTML = data)
  .catch(err => console.error('Header konnte nicht geladen werden:', err));

// Footer einfügen
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => document.querySelector('footer').innerHTML = data)
  .catch(err => console.error('Footer konnte nicht geladen werden:', err));

// Navigation: Aktive Seite markieren
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
// Kontaktformular
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Hier könntest du AJAX oder EmailJS einbinden
    formMessage.textContent = "Danke! Deine Nachricht wurde abgeschickt.";
    contactForm.reset();
  });
}
