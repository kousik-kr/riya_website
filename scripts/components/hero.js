export function renderHero() {
  return `
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><i class="fa-solid fa-award"></i> Distinguished Senior Professor</p>
          <h1>Advancing knowledge, shaping future scholars, and serving society through education.</h1>
          <p class="lede">
            With over 30 years of teaching and research excellence, Professor Eleanor Whitmore mentors
            researchers, leads interdisciplinary initiatives, and contributes globally recognized scholarship.
          </p>
          <div class="hero-actions">
            <a class="btn" href="#highlights"><i class="fa-solid fa-star"></i> View Highlights</a>
            <a class="btn btn--ghost" href="#research"><i class="fa-solid fa-book-open-reader"></i> Research Work</a>
          </div>
        </div>

        <aside class="hero-card floating" aria-label="Professor profile summary">
          <h2>At a Glance</h2>
          <ul>
            <li><i class="fa-solid fa-user-graduate"></i> 10,000+ students mentored</li>
            <li><i class="fa-solid fa-microscope"></i> 180+ peer-reviewed publications</li>
            <li><i class="fa-solid fa-globe"></i> International keynote speaker</li>
            <li><i class="fa-solid fa-handshake-angle"></i> Active academic collaborator</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}
