document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for tech tips
  const techTips = document.querySelectorAll('.tech-tip');

  if ('ontouchstart' in window) {
    // Mobile: use click to toggle active
    techTips.forEach((tip) => {
      tip.addEventListener('click', () => {
        tip.classList.toggle('active');
      });
    });
  } else {
    // Desktop: use mouseenter/mouseleave
    techTips.forEach((tip) => {
      tip.addEventListener('mouseenter', () => {
        tip.classList.add('active');
      });
      tip.addEventListener('mouseleave', () => {
        tip.classList.remove('active');
      });
    });
  }
});
