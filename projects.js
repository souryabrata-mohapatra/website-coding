import { escapeHtml } from "./ui.js";

// Add entries with a title, project type, and duration.
export const projects = [
  {
    title: "Dynamics of institutional arrangement and climate-induced migration around the blue economy of Lake Chilika",
    type: "ICSSR Project",
    duration: "2026–2028"
  }
];

export function renderProjects() {
  return `<section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title" class="section-title" tabindex="-1">Projects</h2>
    ${projects.length ? projects.map(({ title, type, duration }) => `<article class="entry project-entry">
      <h3 class="entry-title">${escapeHtml(title)}</h3>
      <dl class="project-meta">
        <div><dt>Project type</dt><dd>${escapeHtml(type)}</dd></div>
        <div><dt>Duration</dt><dd>${escapeHtml(duration)}</dd></div>
      </dl>
    </article>`).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
