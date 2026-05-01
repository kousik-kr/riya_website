import { createElementFromHTML } from '../utils/dom.js';

export const createHeader = ({ shortName }) =>
  createElementFromHTML(`
    <header class="site-header glass-panel">
      <a class="brand" href="#home">${shortName}</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#teaching">Teaching</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  `);
