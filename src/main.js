import { profile } from './data/profile.js';
import { createHeader } from './components/Header.js';
import { createHero } from './components/Hero.js';
import { createMetrics } from './components/Metrics.js';
import { createHighlights } from './components/Highlights.js';
import { createResearch } from './components/Research.js';
import { createTeaching } from './components/Teaching.js';
import { createFooter } from './components/Footer.js';

const app = document.querySelector('#app');

const page = document.createElement('div');
page.className = 'page-shell';

page.append(
  createHeader(profile),
  createHero(profile),
  createMetrics(profile),
  createHighlights(profile),
  createResearch(profile),
  createTeaching(profile),
  createFooter(profile)
);

app.append(page);
