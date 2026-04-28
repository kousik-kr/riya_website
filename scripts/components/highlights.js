const highlights = [
  {
    icon: 'fa-medal',
    title: 'Lifetime Achievement Award',
    detail: 'Recognized for long-term impact in academic excellence and institutional leadership.',
  },
  {
    icon: 'fa-flask-vial',
    title: 'Research Leadership',
    detail: 'Led multiple funded research initiatives with cross-disciplinary teams.',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Pedagogical Innovation',
    detail: 'Introduced active-learning models adopted across multiple departments.',
  },
  {
    icon: 'fa-people-group',
    title: 'Mentorship Legacy',
    detail: 'Supported PhD scholars and postdocs who now lead global institutions.',
  },
];

export function renderHighlights() {
  return `
    <section class="section" id="highlights">
      <div class="container">
        <div class="section-heading">
          <h2><i class="fa-solid fa-star"></i> Signature Highlights</h2>
          <p>Key accomplishments that define a distinguished academic career.</p>
        </div>

        <div class="card-grid">
          ${highlights
            .map(
              (item) => `
                <article class="card floating">
                  <h3><i class="fa-solid ${item.icon}"></i> ${item.title}</h3>
                  <p>${item.detail}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
