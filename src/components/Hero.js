import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({ fullName, role, university, location, heroStatement, focusAreas }) =>
  createElementFromHTML(`
    <section id="home" class="hero section-grid">
      <div class="hero-content">
        <p class="eyebrow"><i class="fa-solid fa-user-graduate"></i> Senior Faculty Profile</p>
        <h1>${fullName}</h1>
        <h2>${role}</h2>
        <p class="hero-meta"><i class="fa-solid fa-building-columns"></i> ${university} · ${location}</p>
        <p class="hero-statement">${heroStatement}</p>
        <div class="focus-tags" aria-label="Research focus areas">
          ${createList(focusAreas, (area) => `<span class="tag">${area}</span>`)}
        </div>
      </div>
      <aside class="hero-card glass-panel floating" aria-label="At a glance">
        <h3><i class="fa-solid fa-star"></i> At a Glance</h3>
        <p>Dedicated to impactful research, rigorous mentorship, and ethical innovation at global scale.</p>
      </aside>
    </section>
  `);
