import { escapeHtml, safeUrl } from "../ui.js";

// By default use scholar_complete.json, also used by the Bio feed.
// Set an array of { title, authors, publication, year, link } to curate the list.
// Example:
// export const publicationOverrides = [{ title: "Sample Paper", authors: "A. Author", year: 2026, publication: "Journal Name", link: "https://example.com" }];
export const publicationOverrides = null;

function renderPublication({ title, authors, publication, year, description, link, abstract }) {
  return `<article class="entry">
    <h3 class="entry-title">${link ? `<a href="${safeUrl(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3>
    ${authors ? `<p class="entry-meta">${escapeHtml(authors)}</p>` : ""}
    ${publication || year ? `<p class="entry-meta">${escapeHtml(publication || year)}</p>` : ""}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}

export function renderPublications() {
  return `<section id="publications" class="page-section" aria-labelledby="publications-title">
    <h2 id="publications-title" class="section-title" tabindex="-1">Publications</h2>
    <div id="publication-list"><p class="empty-state" role="status">Loading publications…</p></div>
  </section>`;
}

export function mountPublications(data, error) {
  const entries = publicationOverrides ?? data?.articles ?? [];
  document.getElementById("publication-list").innerHTML = entries.length
    ? [...entries].sort((a, b) => Number(b.year || 0) - Number(a.year || 0)).map(renderPublication).join("")
    : `<p class="empty-state" role="status">${error ? "Publications are temporarily unavailable. Please try again later." : "Details coming soon."}</p>`;
}
