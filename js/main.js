// =====================================
// HEADER LADEN
// =====================================

fetch('../components/header.html')

  .then(response => response.text())

  .then(data => {

    const header =
      document.querySelector("header");

    if(header) {

      header.innerHTML = data;

      initNavigation();
    }
  })

  .catch(err =>

    console.error(
      'Header konnte nicht geladen werden:',
      err
    )
  );


// =====================================
// FOOTER LADEN
// =====================================

fetch('../components/footer.html')

  .then(response => response.text())

  .then(data => {

    const footer =
      document.querySelector("footer");

    if(footer) {

      footer.innerHTML = data;
    }
  })

  .catch(err =>

    console.error(
      'Footer konnte nicht geladen werden:',
      err
    )
  );


// =====================================
// NAVIGATION INITIALISIEREN
// =====================================

function initNavigation() {

  // AKTIVE NAVIGATION

  const links =
    document.querySelectorAll(
      '.nav-link'
    );

  links.forEach(link => {

    if(
      link.href === window.location.href
    ) {

      link.classList.add('active');
    }
  });

  // MOBILE NAVIGATION

  const mobileToggle =
    document.getElementById(
      "mobileNavToggle"
    );

  const navLinks =
    document.querySelector(
      ".nav-links"
    );

  if(
    mobileToggle &&
    navLinks
  ) {

    mobileToggle.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle(
          "active"
        );
      }
    );
  }

  // MOBILE DROPDOWN

  const dropdowns =
    document.querySelectorAll(
      ".nav-dropdown"
    );

  dropdowns.forEach(dropdown => {

    const button =
      dropdown.querySelector(
        ".dropdown-toggle"
      );

    if(button) {

      button.addEventListener(
        "click",
        () => {

          if(
            window.innerWidth <= 8000
          ) {

            dropdown.classList.toggle(
              "active"
            );
          }
        }
      );
    }
  });
}


// =====================================
// KONTAKTFORMULAR
// =====================================

const contactForm =
  document.getElementById(
    "contactForm"
  );

if(contactForm) {

  contactForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const name =
        document.getElementById(
          "name"
        ).value;

      const email =
        document.getElementById(
          "email"
        ).value;

      const message =
        document.getElementById(
          "message"
        ).value;

      const service =
        document.getElementById(
          "service"
        )?.value || "Allgemein";

      const contactMethod =
        document.querySelector(
          'input[name="contactMethod"]:checked'
        )?.value || "both";

      // =====================================
      // EMAIL
      // =====================================

      const mailBody =

        `Name: ${name}%0D%0A` +

        `Email: ${email}%0D%0A` +

        `Service: ${service}%0D%0A%0D%0A` +

        `Nachricht:%0D%0A${message}`;

      const mailtoLink =

        `mailto:joana.o.lavender@gmail.com` +

        `?subject=Kontaktanfrage von ${name}` +

        `&body=${mailBody}`;

      // =====================================
      // WHATSAPP
      // =====================================

      const whatsappText =
        encodeURIComponent(

`Hallo LavenderWorks!

Name: ${name}
Email: ${email}
Service: ${service}

Nachricht:
${message}`
        );

      const whatsappLink =
        `https://wa.me/4915215448631?text=${whatsappText}`;

      // =====================================
      // ÖFFNEN
      // =====================================

      if(
        contactMethod === "email"
      ) {

        window.open(
          mailtoLink,
          "_blank"
        );
      }

      else if(
        contactMethod === "whatsapp"
      ) {

        window.open(
          whatsappLink,
          "_blank"
        );
      }

      else {

        window.open(
          mailtoLink,
          "_blank"
        );

        window.open(
          whatsappLink,
          "_blank"
        );
      }

      // =====================================
      // FEEDBACK
      // =====================================

      const formMessage =
        document.getElementById(
          "formMessage"
        );

      if(formMessage) {

        formMessage.textContent =
          "Danke! Deine Anfrage wurde vorbereitet.";
      }
    }
  );
}


// =====================================
// COOKIE BANNER
// =====================================

const cookieBanner =
  document.getElementById(
    "cookieBanner"
  );

const acceptButton =
  document.getElementById(
    "acceptCookies"
  );

if(
  cookieBanner &&
  acceptButton
) {

  if(
    !localStorage.getItem(
      "cookiesAccepted"
    )
  ) {

    cookieBanner.style.display =
      "flex";
  }

  acceptButton.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "cookiesAccepted",
        "true"
      );

      cookieBanner.style.display =
        "none";
    }
  );
}
