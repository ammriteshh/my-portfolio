function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark-theme" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const currentTheme = body.classList.contains("dark-theme")
    ? "dark-theme"
    : "";
  themeToggle.textContent = currentTheme === "dark-theme" ? "☀️" : "🌙";
  // Save preference to local storage
  localStorage.setItem("theme", currentTheme);
});
