import { createElementFromHTML, createList } from '../utils/dom.js';

export const createTeaching = ({ teaching }) =>
  createElementFromHTML(`
    <section id="teaching" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Teaching & Mentorship</p>
        <h2>Current Academic Portfolio</h2>
      </div>
      <ul class="teaching-list glass-panel">
        ${createList(
          teaching,
          (course) => `
            <li>
              <i class="fa-solid fa-book-open-reader"></i>
              <span>${course}</span>
            </li>
          `
        )}
      </ul>
    </section>
  `);
