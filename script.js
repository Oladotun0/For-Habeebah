const sections = document.querySelectorAll('.chapter, .closing');

const heart = document.querySelector('.cursor-heart');

document.addEventListener('mousemove', (e) => {
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.05
});

sections.forEach((section) => {
  observer.observe(section);
});