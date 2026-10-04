# Souryabrata Mohapatra — academic website

This project is a static academic portfolio site for an economics faculty profile. It includes a profile sidebar, bio section, publications, projects, working papers, and teaching information. The site is designed to be edited without a build step.

## Overview

- Static single-page site
- Desktop sidebar with section navigation
- Responsive layout for smaller screens
- Content is controlled through editable JavaScript files
- Local data files are loaded with a simple HTTP server

## Run locally

From the project directory, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

> Do not open the page directly from the filesystem. The site uses JavaScript modules and fetches local JSON data, so it needs to be served over HTTP.

## Main files and what to edit

| File | Purpose |
| --- | --- |
| `main.js` | Page shell, navigation, section order, shared data loading |
| `content/bio.js` | Profile metadata, biography text, research interests, contact links |
| `app.js` | Research feed carousel inside the bio section |
| `content/working-papers.js` | Working paper entries |
| `content/publications.js` | Publication list and optional curated overrides |
| `content/projects.js` | Project entries |
| `content/teaching.js` | Teaching roles and course information |
| `ui.js` | Shared HTML escaping and safe-link helpers; section markup stays in each content file |
| `style.css` | Layout, typography, colors, and responsive styling |
| `scholar_complete.json` | Publication dataset used by the site

## How to update the bio

Edit the `profile` object in `content/bio.js`.

```js
export const profile = {
  name: "Your Name",
  role: "Assistant Professor",
  department: "Department of Economics",
  institution: "Your University",
  image: "your-photo.jpg",
  heading: "Welcome to my site!",
  paragraphs: [
    "Add your short bio here.",
    "Write 2-4 short paragraphs.",
    "Keep the style simple and professional."
  ],
  interests: [
    "Applied Economics",
    "Climate Policy",
    "Development Economics"
  ],
  links: [
    { label: "Email", icon: "✉", href: "mailto:you@example.edu" },
    { label: "CV", icon: "CV", href: "https://example.com/cv" },
    { label: "Google Scholar", icon: "g", href: "https://scholar.google.com/" }
  ]
};
```

Notes:

- `image` should match an actual file in the project folder or an accessible path.
- `links` can be edited to add email, CV, Google Scholar, LinkedIn, ORCID, etc.
- Each paragraph is rendered separately, so keep them short and readable.

## How to add publications

The site uses `scholar_complete.json` by default. If you want to override the list with a curated set, set `publicationOverrides` in `content/publications.js`.

```js
export const publicationOverrides = [
  {
    title: "Sample Publication Title",
    authors: "A. Author, B. Author",
    year: 2026,
    publication: "Journal of Sample Studies",
    link: "https://example.com/publication"
  }
];
```

If you want to use the full local dataset, leave it as:

```js
export const publicationOverrides = null;
```

The objects support these fields:

```js
{
  title: "Paper title",
  authors: "Author names",
  year: 2026,
  publication: "Journal or outlet",
  description: "Optional short description",
  link: "https://example.com/paper",
  abstract: "Optional expandable abstract"
}
```

## How to add projects

Edit the array in `content/projects.js`:

```js
export const projects = [
  {
    title: "Sample Project",
    authors: "Your Name",
    year: "2026",
    description: "Short summary of the project and its purpose.",
    link: "https://example.com/project",
    abstract: "Optional expanded abstract or methodology summary."
  }
];
```

If the array is empty, the site shows: `Details coming soon.`

## How to add working papers

Use the same structure as projects in `content/working-papers.js`:

```js
export const workingPapers = [
  {
    title: "Working Paper Title",
    authors: "Your Name and Coauthor",
    year: "2026",
    description: "One or two lines describing the contribution.",
    link: "https://example.com/working-paper",
    abstract: "Optional detailed abstract."
  }
];
```

## How to add teaching information

Edit the relevant teaching content in `content/teaching.js` using the existing format in that file. Keep course names, institutions, and roles consistent with the site design.

## Notes

- Navigation anchors use IDs such as `#bio`, `#publications`, `#projects`, and `#teaching`.
- The active sidebar item follows scroll position automatically.
- The research feed and publications gracefully show a fallback message when data is unavailable.
- If the publication data changes, rerun the fetch or update process used for `scholar_complete.json`.

