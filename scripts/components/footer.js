export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <div class="container footer-inner">
      <div>
        <h2>Let's Collaborate</h2>
        <p>Email: <a href="mailto:prof.whitmore@university.edu">prof.whitmore@university.edu</a></p>
      </div>
      <div class="socials" aria-label="Social media links">
        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#" aria-label="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>
        <a href="#" aria-label="ORCID"><i class="fa-solid fa-id-card"></i></a>
      </div>
      <p class="copyright">© ${year} Professor Eleanor Whitmore. All rights reserved.</p>
    </div>
  `;
}
