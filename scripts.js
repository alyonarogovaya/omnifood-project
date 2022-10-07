// Establish current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile-navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const bodyEl = document.querySelector('body');
const htmlEl = document.querySelector('html');
const navLinks = document.querySelectorAll('.main-nav-link');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
  bodyEl.classList.toggle('hidden');
  htmlEl.classList.toggle('hidden');
});

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    bodyEl.classList.remove('hidden');
    htmlEl.classList.remove('hidden');
  });
});

//Smooth links

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (l) {
  l.addEventListener('click', function (e) {
    e.preventDefault();
    const href = l.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (l.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

//Fixed-nav

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
