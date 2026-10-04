import { escapeHtml, safeUrl } from "../ui.js";

// Add entries as { title, authors, year, description, link, abstract }.
export const workingPapers = [];

function renderWorkingPaper({ title, authors, year, description, link, abstract }) {
  return `<article class="entry">
    <h3 class="entry-title">${link ? `<a href="${safeUrl(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3>
    ${authors ? `<p class="entry-meta">${escapeHtml(authors)}</p>` : ""}
    ${year ? `<p class="entry-meta">${escapeHtml(year)}</p>` : ""}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}

export function renderWorkingPapers() {
  return `<section id="working-papers" class="page-section" aria-labelledby="working-papers-title">
    <h2 id="working-papers-title" class="section-title" tabindex="-1">Working Papers</h2>
    ${workingPapers.length ? workingPapers.map(renderWorkingPaper).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
