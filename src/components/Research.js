import { createElementFromHTML, createList } from '../utils/dom.js';

export const createResearch = ({ publications }) =>
  createElementFromHTML(`
    <section id="research" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Research</p>
        <h2>Selected Publications</h2>
      </div>
      <div class="timeline glass-panel">
        ${createList(
          publications,
          (publication) => `
            <article class="timeline-item">
              <span class="year">${publication.year}</span>
              <div>
                <h3>${publication.title}</h3>
                <p>${publication.venue}</p>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `);
