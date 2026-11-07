import { renderEntry, renderImage } from "./ui.js";

// Add entries as { title, authors, year, description, link, abstract }.
export const workingPapers = [
  {
    title: "Does digitalisation pay Indian farmers? Evidence from the nationally representative survey",
    authors: "with Dayakar Peddi, Kirtti Ranjan Paltasingh, and Dukhabandhu Sahoo",
    year: "2024",
    // description: "Revise and resubmit",
    publication: "Journal of Rural Studies",
    link: "https://1drv.ms/b/c/f25dcd48334b323a/IQBb9ow0Wh3hRKfnPksUAvsrAZnrX3Hb-fwbrj262gVKBXU?e=VruuGP"
  },
  {
    title: "Globalisation and women’s empowerment: Uneven pathways across countries, income groups, and regional economic blocs",
    authors: "with Surbhi Mishra and Dukhabandhu Sahoo",
    year: "2024",
    // description: "Draft",
    publication: "Review of Development Economics",
    link: "https://1drv.ms/b/c/f25dcd48334b323a/IQAG5RYN3uRSRIpPvKn5xPMVAWx1eC5EUM2J-uwVaH1qMaM?e=fSixLA"
  },
  {
    title: "How do agricultural development and institutions shape GHG emissions? A STIRPAT–EKC analysis",
    authors: "with Snehaprava Sahoo, Devi Prasad Dash, and Kaliappa Kalirajan",
    year: "2023",
    // description: "Draft",
    publication: "Empirical Economics",
    link: "https://1drv.ms/b/c/f25dcd48334b323a/IQBV91P4p2CDQruld5TzMpykAWkowVAaO-NTXWgwzs14D2s?e=oP28HL"
  }
];

const workingPaperFigures = [
  { file: "WP_1.webp", caption: "Source: Working paper 3" },
  { file: "WP_2.webp", caption: "Source: Working paper 2" }
];

export function renderWorkingPapers() {
  return `<section id="working-papers" class="page-section" aria-labelledby="working-papers-title">
    <h2 id="working-papers-title" class="section-title" tabindex="-1">Working Papers</h2>
    <div class="publication-columns working-paper-columns">
      <div class="publication-main">
        ${workingPapers.length ? workingPapers.map((paper, index) => renderEntry({ ...paper, label: workingPapers.length - index })).join("") : '<p class="empty-state">Details coming soon.</p>'}
      </div>
      <aside class="publication-gallery" aria-label="Working paper figures">
        ${workingPaperFigures.map(({ file, caption }) => `<figure class="publication-figure">
          ${renderImage(`images/working_paper/${file}`, caption)}
          <figcaption>${caption}</figcaption>
        </figure>`).join("")}
      </aside>
    </div>
  </section>`;
}
