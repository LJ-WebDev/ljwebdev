// Making header expand when scrolled down by 10 px or more
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 10) {
    header.classList.add('expanded');
  } else {
    header.classList.remove('expanded');
  }
});

// Making tech tips interactive
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for tech tips
  const techTips = document.querySelectorAll('.tech-tip');

  if ('ontouchstart' in window) {
    // Mobile: use click to toggle active
    techTips.forEach((tip) => {
      tip.addEventListener('click', (e) => {
        e.stopPropagation();
        tip.classList.toggle('active');
      });

      document.addEventListener('click', () => {
        techTips.forEach((tip) => {
          tip.classList.remove('active');
        });
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
