export function renderHeader() {
  return `
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Professor Eleanor Whitmore home">
        <span class="brand-mark"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
        <span class="brand-text">Prof. Eleanor Whitmore</span>
      </a>

      <nav class="nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#highlights">Highlights</a>
        <a href="#teaching">Teaching</a>
        <a href="#contact" class="btn btn--small">Contact</a>
      </nav>
    </div>
  `;
}
