// ===== 1. MOBILE MENU =====
// Clicking the hamburger button adds/removes the "open" class on the nav
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// ===== 2. DARK MODE TOGGLE =====
const themeBtn = document.getElementById("theme-btn");
const root = document.documentElement;   // the <html> element

// Remember the choice using localStorage (survives page changes and reloads)
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function () {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  }
});

// ===== 3. SCROLL ANIMATION =====
// IntersectionObserver tells us when an element enters the screen
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(function (el) {
  observer.observe(el);
});

// ===== 4. CONTACT FORM =====
// There is no server, so this opens the visitor's email app
// with the message already filled in.
const form = document.getElementById("contact-form");

if (form) {   // only runs on the contact page
  form.addEventListener("submit", function (e) {
    e.preventDefault();   // stop the page from reloading

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("CRE enquiry from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    );

    // CHANGE this to your real email address
    window.location.href = "mailto:mufeedzirajudeen17@gmail.com?subject=" + subject + "&body=" + body;

    document.getElementById("form-status").textContent =
      "Opening your email app...";
    form.reset();
  });
}

// ===== 5. FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();