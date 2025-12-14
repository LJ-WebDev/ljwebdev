document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for tech tips
  const techTips = document.querySelectorAll('.tech-tip');

  techTips.forEach((tip) => {
    tip.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });
    tip.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });

    tip.addEventListener('click', () => {
      tip.classList.toggle('active');
    });
  });
});
