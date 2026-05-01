import { createElementFromHTML, createList } from '../utils/dom.js';

export const createMetrics = ({ metrics }) =>
  createElementFromHTML(`
    <section class="metrics" aria-label="Academic highlights">
      ${createList(
        metrics,
        (metric) => `
          <article class="metric-card glass-panel floating-soft">
            <h3>${metric.value}</h3>
            <p>${metric.label}</p>
          </article>
        `
      )}
    </section>
  `);
