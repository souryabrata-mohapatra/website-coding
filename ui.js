// Shared markup helpers. Section files own content; CSS owns appearance.
export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

export function safeUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? escapeHtml(url.href) : "#";
  } catch {
    return "#";
  }
}

export function renderPublication(publication, year) {
  if (publication && year && !/\b\d{4}\b/.test(publication)) {
    return `<em>${escapeHtml(publication)}</em>, ${escapeHtml(year)}`;
  }
  const value = publication || year || "";
  const journalMatch = value.match(/^(.+?)(?=(?:\s+\d+(?:\s*\([^)]*\))?\s*:)|[:,]\s*\d)/);
  if (!journalMatch) return escapeHtml(value);
  return `<em>${escapeHtml(journalMatch[1].trim())}</em>${escapeHtml(value.slice(journalMatch[1].length))}`;
}

export function renderEntry({ title, authors, publication, year, description, link, abstract, media, label }) {
  const mediaItems = Array.isArray(media) ? media.filter((item) => item && item.label) : [];
  const paperLink = mediaItems
    .find((item) => item.link && /^\[paper\]$/i.test(item.label.trim()))?.link;
  const pdfLink = mediaItems.find((item) => item.link && /^\[pdf\]$/i.test(item.label.trim()))?.link || link;
  const datasetLink = mediaItems.find((item) => item.link && /^\[dataset\]$/i.test(item.label.trim()))?.link;
  const mediaLinks = mediaItems.filter((item) => !/^\[(paper|pdf|dataset)\]$/i.test(item.label.trim()));
  const actionMarkup = paperLink || pdfLink || datasetLink
    ? `<span class="entry-actions">${paperLink ? `<a class="entry-button" href="${safeUrl(paperLink)}" target="_blank" rel="noopener noreferrer">DOI</a>` : ""}${datasetLink ? `<a class="entry-button" href="${safeUrl(datasetLink)}" target="_blank" rel="noopener noreferrer">Dataset</a>` : ""}${pdfLink ? `<a class="entry-button" href="${safeUrl(pdfLink)}" target="_blank" rel="noopener noreferrer">PDF</a>` : ""}</span>`
    : "";
  const mediaMarkup = mediaLinks.length
    ? `<p class="entry-meta media-links">${mediaLinks.map((item) => {
        const href = item.link;
        const labelText = item.label.replace(/^\[|\]$/g, "");
        return href ? `<a href="${safeUrl(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(labelText)}</a>` : escapeHtml(labelText);
      }).join(" | ")}</p>`
    : "";

  return `<article class="entry">
    <h3 class="entry-title">${label ? `<span class="entry-label">[${escapeHtml(label)}]</span>` : ""}${escapeHtml(title)} ${actionMarkup}</h3>
    ${authors ? `<p class="entry-meta">${escapeHtml(authors)}</p>` : ""}
    ${publication || year ? `<p class="entry-meta publication-name">${renderPublication(publication, year)}</p>` : ""}
    ${mediaMarkup}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}
