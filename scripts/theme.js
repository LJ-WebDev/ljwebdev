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
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');

  if (preferLight) {
    sun.classList.add('swap-off');
    sun.classList.remove('swap-on');
    moon.classList.add('swap-on');
    moon.classList.remove('swap-off');
  } else {
    moon.classList.add('swap-off');
    moon.classList.remove('swap-on');
    sun.classList.add('swap-on');
    sun.classList.remove('swap-off');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      preferLight = !preferLight;
      handleTheme();
    });
  }
});
