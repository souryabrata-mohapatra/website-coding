import { renderEntry } from "./ui.js";

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

export function renderWorkingPapers() {
  return `<section id="working-papers" class="page-section" aria-labelledby="working-papers-title">
    <h2 id="working-papers-title" class="section-title" tabindex="-1">Working Papers</h2>
    ${workingPapers.length ? workingPapers.map(renderEntry).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
