import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({ fullName, role, university, location, heroStatement, focusAreas, advisor }) =>
  createElementFromHTML(`
    <section id="home" class="hero section-grid">
      <div class="hero-content">
        <p class="eyebrow"><i class="fa-solid fa-user-graduate"></i> PhD Candidate</p>
        <h1>${fullName}</h1>
        <h2>${role}</h2>
        <p class="hero-meta"><i class="fa-solid fa-building-columns"></i> ${university} · ${location}</p>
        <p class="hero-meta-advisor"><i class="fa-solid fa-user-tie"></i> Advisor: ${advisor}</p>
        <p class="hero-statement">${heroStatement}</p>
        <div class="focus-tags" aria-label="Research focus areas">
          ${createList(focusAreas, (area) => `<span class="tag accent-tag"><i class="fa-solid fa-star"></i> ${area}</span>`)}
        </div>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Let's Collaborate</a>
          <a href="#research" class="btn btn-secondary">View Research</a>
        </div>
      </div>
      <aside class="hero-card glass-panel floating" aria-label="Quick stats">
        <h3><i class="fa-solid fa-fire"></i> Quick Facts</h3>
        <ul class="quick-stats">
          <li><strong>7</strong> Publications</li>
          <li><strong>Top Tier</strong> Venues (NeurIPS, CHI)</li>
          <li><strong>FAANG</strong> Internships</li>
          <li><strong>2k+</strong> GitHub Stars</li>
        </ul>
      </aside>
    </section>
  `);
