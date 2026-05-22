// Header einfügen
fetch('../components/header.html')
  .then(response => response.text())
  .then(data => document.querySelector('header').innerHTML = data)
  .catch(err => console.error('Header konnte nicht geladen werden:', err));

// Footer einfügen
fetch('../components/footer.html')
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
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Email Inhalt
  const mailBody =
    `Name: ${name}%0D%0A` +
    `Email: ${email}%0D%0A%0D%0A` +
    `Nachricht:%0D%0A${message}`;

  const mailtoLink =
    `mailto:joana.o.lavender@gmail.com?subject=Kontaktanfrage von ${name}&body=${mailBody}`;

  // WhatsApp Inhalt
  const whatsappText = encodeURIComponent(
    `Hallo Joana,\n\nName: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`
  );

  const whatsappLink =
    `https://wa.me/4915215448631?text=${whatsappText}`;

  // Öffnen
  window.open(mailtoLink, "_blank");
  window.open(whatsappLink, "_blank");

  // Feedback im Formular
  document.getElementById("formMessage").textContent =
    "Danke! Email & WhatsApp wurden vorbereitet.";
});

const cookieBanner =
  document.getElementById("cookieBanner");

const acceptButton =
  document.getElementById("acceptCookies");

if(
  !localStorage.getItem("cookiesAccepted")
) {
  cookieBanner.style.display = "flex";
}

acceptButton.addEventListener("click", () => {

  localStorage.setItem(
    "cookiesAccepted",
    "true"
  );

  cookieBanner.style.display = "none";
});
