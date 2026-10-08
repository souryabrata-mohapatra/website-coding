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

export function renderEntry({ title, authors, publication, year, description, link, abstract, media }) {
  const mediaLinks = Array.isArray(media) ? media.filter((item) => item && item.label) : [];
  const mediaMarkup = mediaLinks.length
    ? `<p class="entry-meta media-links">${mediaLinks.map((item) => {
        const href = item.link;
        return href ? ` <a href="${safeUrl(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)}</a>` : escapeHtml(item.label);
      }).join(" ")}</p>`
    : "";

  return `<article class="entry">
    <h3 class="entry-title">${link ? `<a href="${safeUrl(link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3>
    ${authors ? `<p class="entry-meta">${escapeHtml(authors)}</p>` : ""}
    ${publication || year ? `<p class="entry-meta">${escapeHtml(publication || year)}</p>` : ""}
    ${mediaMarkup}
    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    ${abstract ? `<details class="entry-abstract"><summary>Abstract</summary><p>${escapeHtml(abstract)}</p></details>` : ""}
  </article>`;
}
