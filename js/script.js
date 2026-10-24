// Mobile navigation and small page interactions.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#form-message");
    if (message) {
      message.textContent = "Thank you! This is a demonstration form, so your message was not sent or saved.";
    }
    contactForm.reset();
  });
}
