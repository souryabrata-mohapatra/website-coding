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

export function renderEntry({ title, authors, publication, year, description, link, abstract, media, label }) {
  const mediaItems = Array.isArray(media) ? media.filter((item) => item && item.label) : [];
  const paperLink = mediaItems
    .find((item) => item.link && /^\[paper\]$/i.test(item.label.trim()))?.link;
  const pdfLink = mediaItems.find((item) => item.link && /^\[pdf\]$/i.test(item.label.trim()))?.link || link;
  const mediaLinks = mediaItems.filter((item) => !/^\[(paper|pdf)\]$/i.test(item.label.trim()));
  const actionMarkup = paperLink || pdfLink
    ? `<span class="entry-actions">${paperLink ? `<a class="entry-button" href="${safeUrl(paperLink)}" target="_blank" rel="noopener noreferrer">DOI</a>` : ""}${pdfLink ? `<a class="entry-button" href="${safeUrl(pdfLink)}" target="_blank" rel="noopener noreferrer">PDF</a>` : ""}</span>`
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
    ${publication || year ? `<p class="entry-meta publication-name">${escapeHtml(publication || year)}</p>` : ""}
    ${mediaMarkup}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}
