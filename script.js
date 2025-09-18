// Smooth scroll + collapse mobile nav after click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Collapse mobile nav
    const bsCollapse = document.querySelector('.navbar-collapse');
    if (bsCollapse && bsCollapse.classList.contains('show')) {
      const collapse = new bootstrap.Collapse(bsCollapse);
      collapse.hide();
    }
  });
});

// Highlight active nav link on scroll
function setActiveOnScroll() {
  const fromTop = window.scrollY + 120;
  document.querySelectorAll('section[id]').forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.id;
    const link = document.querySelector('.nav-link[href="#' + id + '"]');

    if (fromTop >= top && fromTop < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveOnScroll);
setActiveOnScroll();
