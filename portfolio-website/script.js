/* =========================================================
   Mobile nav toggle
========================================================= */
const menuBtn = document.getElementById("menuBtn");
const tabNav = document.getElementById("tabNav");

menuBtn.addEventListener("click", () => {
  const isOpen = tabNav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

tabNav.querySelectorAll(".tab").forEach((link) => {
  link.addEventListener("click", () => {
    tabNav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   Active tab highlight on scroll
========================================================= */
const sections = document.querySelectorAll("main .section");
const tabs = document.querySelectorAll(".tab");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        tabs.forEach((tab) => {
          tab.classList.toggle("is-active", tab.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

/* =========================================================
   Hero typing animation
========================================================= */
const typedLine = document.getElementById("typedLine");
const finalText = "};";
let idx = 0;

function typeClosingBrace() {
  if (idx <= finalText.length) {
    typedLine.textContent = finalText.slice(0, idx);
    idx++;
    setTimeout(typeClosingBrace, 180);
  }
}
typedLine.textContent = "";
window.addEventListener("DOMContentLoaded", () => setTimeout(typeClosingBrace, 400));

/* =========================================================
   Contact form validation (client-side only)
========================================================= */
const form = document.getElementById("contactForm");
const output = document.getElementById("formOutput");

const fields = {
  name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
  email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
  message: { input: document.getElementById("message"), error: document.getElementById("messageError") },
};

function validateName(value) {
  return value.trim().length >= 2 ? "" : "Enter at least 2 characters.";
}

function validateEmail(value) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value.trim()) ? "" : "Enter a valid email address.";
}

function validateMessage(value) {
  return value.trim().length >= 10 ? "" : "Say a bit more — at least 10 characters.";
}

const validators = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
};

function runValidation(key) {
  const { input, error } = fields[key];
  const message = validators[key](input.value);
  error.textContent = message;
  input.classList.toggle("is-invalid", Boolean(message));
  return message === "";
}

Object.keys(fields).forEach((key) => {
  fields[key].input.addEventListener("blur", () => runValidation(key));
  fields[key].input.addEventListener("input", () => {
    if (fields[key].input.classList.contains("is-invalid")) runValidation(key);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const results = Object.keys(fields).map(runValidation);
  const allValid = results.every(Boolean);

  if (allValid) {
    output.textContent = `> message queued — thanks, ${fields.name.input.value.trim()}! I'll reply by email soon.`;
    form.reset();
    Object.values(fields).forEach(({ input }) => input.classList.remove("is-invalid"));
  } else {
    output.textContent = "> fix the highlighted fields and try again.";
  }
});

/* =========================================================
   Footer year
========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
