import { escapeHtml } from "./ui.js";

// Add entries with a title, funder/category, and duration.
export const projects = [
  {
    title: "Dynamics of institutional arrangement and climate-induced migration around the blue economy of Lake Chilika",
    type: "ICSSR Major",
    duration: "2026–2028",
    figure: {
      file: "images/projects/project_1.png",
      caption: "Chilika Lake and ecotourism"
    }
  }
];

export function renderProjects() {
  return `<section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title" class="section-title" tabindex="-1">Projects</h2>
    ${projects.length ? projects.map(({ title, type, duration, figure }, index) => `<div class="publication-columns project-columns">
      <div class="publication-main">
        <article class="entry project-entry">
          <h3 class="entry-title"><span class="entry-label">[${projects.length - index}]</span>${escapeHtml(title)}</h3>
          <p class="project-meta"><span class="project-type">${escapeHtml(type)}</span><span class="project-duration">${escapeHtml(duration)}</span></p>
        </article>
      </div>
      ${figure ? `<aside class="publication-gallery" aria-label="Project figure">
        <figure class="publication-figure project-figure">
          <img src="${escapeHtml(figure.file)}" alt="${escapeHtml(figure.caption)}" loading="lazy" decoding="async">
          <figcaption>${escapeHtml(figure.caption)}</figcaption>
        </figure>
      </aside>` : ""}
    </div>`).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
