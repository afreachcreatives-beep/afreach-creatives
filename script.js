// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      if (nav.style.display === 'block') {
        nav.style.display = '';
        menuBtn.textContent = '☰';
      } else {
        nav.style.display = 'block';
        menuBtn.textContent = '✕';
      }
    });
  }

  // Simple scroll reveal using IntersectionObserver
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
});
