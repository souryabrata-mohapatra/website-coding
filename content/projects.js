import { escapeHtml, safeUrl } from "../ui.js";

// Add entries as { title, description, authors, year, link }.
// Example:
// export const projects = [
// { 
// title: "Sample Project", 
// authors: "Your Name",
// year: "2026", 
// description: "Project description", 
// link: "https://example.com" 
// }
// ];

 export const projects = [];

function renderProject({ title, authors, year, description, link, abstract }) {
  return `<article class="entry">
    <h3 class="entry-title">${link ? `<a href="${safeUrl(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3>
    ${authors ? `<p class="entry-meta">${escapeHtml(authors) }</p>` : ""}
    ${year ? `<p class="entry-meta">${escapeHtml(year)}</p>` : ""}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}

export function renderProjects() {
  return `<section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title" class="section-title" tabindex="-1">Projects</h2>
    ${projects.length ? projects.map(renderProject).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
