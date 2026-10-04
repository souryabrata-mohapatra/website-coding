// Copy/paste examples for easy updates.
// Use these as a starting point when editing bio.js, publications.js, and projects.js.

export const sampleProfile = {
  name: "Your Name",
  role: "Assistant Professor",
  department: "Department of Economics",
  institution: "Your University",
  image: "your-photo.jpg",
  heading: "Welcome to my site!",
  paragraphs: [
    "Add your short bio here.",
    "Write 2–4 paragraphs in the same style as the rest of the site.",
    "This section supports plain text and will render automatically."
  ],
  interests: [
    "Applied Economics",
    "Development Economics",
    "Climate Policy",
    "Labor Markets"
  ],
  links: [
    { label: "Email", icon: "✉", href: "mailto:you@example.edu" },
    { label: "CV", icon: "CV", href: "https://example.com/cv" },
    { label: "Google Scholar", icon: "g", href: "https://scholar.google.com/" },
    { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/" }
  ]
};

export const samplePublications = [
  {
    title: "Sample Publication Title",
    authors: "Author A, Author B, and Author C",
    year: 2026,
    publication: "Journal of Sample Studies",
    link: "https://example.com/publication-1"
  },
  {
    title: "Another Sample Paper",
    authors: "Author D and Author E",
    year: 2025,
    publication: "Working Paper",
    description: "Short descriptive text if needed.",
    link: "https://example.com/publication-2"
  }
];

export const sampleProjects = [
  {
    title: "Sample Project",
    authors: "Your Name",
    year: "2026",
    description: "A short project overview describing the research problem, methods, and outputs.",
    link: "https://example.com/project",
    abstract: "Optional longer abstract or summary for an expandable details block."
  }
];

export const sampleWorkingPapers = [
  {
    title: "Sample Working Paper",
    authors: "Your Name and Coauthor",
    year: "2026",
    description: "Explain the contribution of this paper in one or two sentences.",
    link: "https://example.com/working-paper",
    abstract: "Optional abstract text for the expandable panel."
  }
];

export const sampleTeachingEntries = [
  {
    title: "Microeconomics",
    authors: "Undergraduate course",
    year: "2026",
    description: "Short description of the course or your role."
  }
];

// How to use:
// 1. Copy one of these objects into the relevant JS content file.
// 2. Preserve the same keys used by the site: title, authors, publication, year, description, link, abstract.
// 3. For the bio profile, replace the values in the profile object in bio.js.
