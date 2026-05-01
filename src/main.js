import { profile } from './data/profile.js';
import { createHeader } from './components/Header.js';
import { createHero } from './components/Hero.js';
import { createMetrics } from './components/Metrics.js';
import { createHighlights } from './components/Highlights.js';
import { createResearch } from './components/Research.js';
import { createTeaching } from './components/Teaching.js';
import { createEducation } from './components/Education.js';
import { createProjects } from './components/Projects.js';
import { createExperience } from './components/Experience.js';
import { createAwards } from './components/Awards.js';
import { createSkills } from './components/Skills.js';
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
  createProjects(profile),
  createEducation(profile),
  createExperience(profile),
  createAwards(profile),
  createTeaching(profile),
  createSkills(profile),
  createFooter(profile)
);

app.append(page);
