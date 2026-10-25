import { renderEntry } from "./ui.js";

// Add entries as { title, description, authors, year, link }.
export const projects = [
  {
    title: "Consultant: Millets and Rural Transition",
    description: "Central University of Odisha",
    year: "Aug-Sep 2025"
  },
  {
    title: "Climate Researcher: Retrofit Carbon Credit",
    description: "Carbonbase, Hong Kong",
    year: "Oct-Dec 2023"
  },
  {
    title: "Think Pacific Intern: Social Action for Climate Change",
    description: "Fiji Government",
    year: "Jan-Mar 2022"
  },
  {
    title: "Micro-intern: Digital Behaviour in Graduate Hiring",
    description: "NxtStep, Auckland",
    year: "Nov-Dec 2021"
  },
  {
    title: "Research Assistant: Brain Waste in NZ Migration",
    description: "University of Auckland",
    year: "Mar-Oct 2020"
  },
  {
    title: "Research Assistant: Innovation in Indian Manufacturing",
    description: "IIT Hyderabad",
    year: "Jul 2018-Jun 2019"
  },
  {
    title: "Summer Intern: Global Macroeconomic Instability",
    description: "IIT Bhubaneswar",
    year: "May-Jul 2016"
  }
];

export function renderProjects() {
  return `<section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title" class="section-title" tabindex="-1">Projects</h2>
    ${projects.length ? projects.map(renderEntry).join("") : '<p class="empty-state">Details coming soon.</p>'}
  </section>`;
}
