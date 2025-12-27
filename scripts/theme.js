const root = document.documentElement;

// Get saved theme from localStorage, or default to system preference
let preferLight =
  JSON.parse(localStorage.getItem('theme')) ??
  window.matchMedia('(prefers-color-scheme: light)').matches;

function handleTheme() {
  if (preferLight) {
    root.classList.add('light');
  } else {
    root.classList.remove('light');
  }

  // Update the toggle checkbox state (assuming checked = dark theme)
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.checked = !preferLight;
  }

  // Save to localStorage
  localStorage.setItem('theme', JSON.stringify(preferLight));
}

document.addEventListener('DOMContentLoaded', () => {
  handleTheme();

  const themeToggle = document.querySelector('#theme-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      preferLight = !preferLight;
      handleTheme();
    });
  }
});
