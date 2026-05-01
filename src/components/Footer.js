import { createElementFromHTML, createList } from '../utils/dom.js';

export const createFooter = ({ fullName, email, office, socialLinks }) =>
  createElementFromHTML(`
    <footer id="contact" class="site-footer glass-panel">
      <div>
        <h2>${fullName}</h2>
        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a></p>
        <p><i class="fa-solid fa-location-dot"></i> ${office}</p>
      </div>
      <div>
        <h3>Professional Profiles</h3>
        <div class="social-links">
          ${createList(
            socialLinks,
            (link) => `
              <a href="${link.url}" aria-label="${link.label}">
                <i class="fa-brands ${link.icon}"></i>
              </a>
            `
          )}
        </div>
      </div>
    </footer>
  `);
