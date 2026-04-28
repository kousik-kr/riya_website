import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderHighlights } from './components/highlights.js';
import { renderResearch } from './components/research.js';
import { renderTeaching } from './components/teaching.js';
import { renderFooter } from './components/footer.js';

function renderPage() {
  const header = document.querySelector('.site-header');
  const main = document.querySelector('#main-content');
  const footer = document.querySelector('.site-footer');

  if (!header || !main || !footer) return;

  header.innerHTML = renderHeader();
  main.innerHTML = [renderHero(), renderAbout(), renderHighlights(), renderResearch(), renderTeaching()].join('');
  footer.innerHTML = renderFooter();
}

document.addEventListener('DOMContentLoaded', renderPage);
