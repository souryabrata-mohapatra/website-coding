import { escapeHtml } from "./ui.js";

// Add entries with a title, funder/category, and duration.
export const projects = [
  {
    title: "Dynamics of institutional arrangement and climate-induced migration around the blue economy of Lake Chilika",
    type: "ICSSR Major",
    duration: "2026–2028"
  }
];

export function renderProjects() {
  return `<section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title" class="section-title" tabindex="-1">Projects</h2>
    ${projects.length ? projects.map(({ title, type, duration }, index) => `<article class="entry project-entry">
      <h3 class="entry-title"><span class="entry-label">[${projects.length - index}]</span>${escapeHtml(title)}</h3>
      <p class="project-meta"><em>${escapeHtml(type)}, ${escapeHtml(duration)}</em></p>
    </article>`).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
