import { profile, renderProfileLinks, renderBio, mountBio } from "./bio.js";
import { renderWorkingPapers } from "./working-papers.js";
import { renderPublications, mountPublications } from "./publications.js";
import { renderProjects } from "./projects.js";
import { escapeHtml } from "./ui.js";

const SCROLL_STORAGE_KEY = "academic-site-scroll-y";
history.scrollRestoration = "manual";
window.addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
  } catch {
    // Scroll restoration remains optional when session storage is unavailable.
  }
});

// Single registry for section order, sidebar labels, and navigation.
const sections = [
  { id: "bio", label: "Bio", render: renderBio },
  { id: "publications", label: "Publications", render: renderPublications },
  { id: "working-papers", label: "Working Papers", render: renderWorkingPapers },
  { id: "projects", label: "Projects", render: renderProjects }
];
const navigationItems = [
  { id: "bio", section: "bio", label: "Bio", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" },
  { id: "publications", section: "publications", label: "Publications", icon: "M7 3.5h7l4 4V20H7zM14 4v4h4M10 12h5M10 16h5" },
  { id: "working-papers", section: "working-papers", label: "Working Papers", icon: "M5 7h13v14H5zM8 4h11v14M8 11h7M8 15h7" },
  { id: "projects", section: "projects", label: "Projects", icon: "M3.5 7h7l2 2h8v10h-17zM3.5 9h17" }
];
document.getElementById("app").innerHTML = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="site-shell">
    <aside class="sidebar" aria-label="Profile and navigation">
      <div class="sidebar-profile">
        <a class="portrait-link" href="#bio" aria-label="Go to biography"><img class="portrait" src="${escapeHtml(profile.image)}" alt="${escapeHtml(profile.name)}" width="200" height="220"></a>
        <div class="sidebar-identity">
          <strong>${escapeHtml(profile.name)}</strong>
          <span>${escapeHtml(profile.role)}</span>
          <span>${escapeHtml(profile.department)}</span>
          <span>${escapeHtml(profile.institution)}</span>
        </div>
        <div class="profile-links" aria-label="Contact and academic profiles">${renderProfileLinks()}</div>
      </div>
      <nav class="section-nav" aria-label="Main navigation">
        ${navigationItems.map(({ id, section, label, icon }) => `<a href="#${id}" data-section="${section}"><svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${icon}" /></svg><span>${label}</span></a>`).join("")}
      </nav>
      
    </aside>
    <main id="main-content" class="main-content" tabindex="-1">
      ${sections.map(({ render }) => render()).join("")}
      <footer class="site-footer">&copy; ${new Date().getFullYear()} ${escapeHtml(profile.name)}. All rights reserved.</footer>
    </main>
  </div>`;

const navigation = [...document.querySelectorAll(".section-nav a")];
const sectionElements = sections.map(({ id }) => document.getElementById(id));

function setActiveSection(id) {
  navigation.forEach((link) => {
    if (link.dataset.section === id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function navigateToHash(focus = false) {
  const section = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!section) return;
  if (focus) {
    const heading = section.matches("h1, h2") ? section : section.querySelector("h1, h2");
    heading?.focus({ preventScroll: true });
  }
  window.scrollTo({ top: Math.max(0, section.offsetTop - 16), behavior: "instant" });
  const activeItem = navigationItems.find(({ id }) => id === section.id);
  setActiveSection(activeItem?.section || (section.id === "research-feed-title" ? "bio" : section.id));
}

// Handle section links once so native hash scrolling and script scrolling do not both run.
navigation.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (!href) return;
    window.history.pushState(null, "", href);
    navigateToHash(true);
  });
});
window.addEventListener("hashchange", () => navigateToHash(true));
let scrollPending = false;
function updateActiveSection() {
  scrollPending = false;
  let current = sectionElements[0];
  const activationOffset = 24;
  for (const section of sectionElements) {
    if (section.getBoundingClientRect().top <= activationOffset) current = section;
  }
  let activeId = current.id;
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    activeId = sectionElements.at(-1).id;
  }
  setActiveSection(activeId);
}
window.addEventListener("scroll", () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateActiveSection);
  }
}, { passive: true });
setActiveSection("bio");

// Fetch once so the feed and publication list stay in sync. Other sections
// render immediately and remain available if publication loading fails.
let data = null;
let dataError = null;
try {
  const response = await fetch("scholar_complete.json");
  if (!response.ok) throw new Error(`Publication request failed (${response.status})`);
  data = await response.json();
  if (!Array.isArray(data.articles)) throw new Error("Invalid publication data");
} catch (error) {
  dataError = error;
  console.error(error);
}
mountBio(data, dataError);
mountPublications(data, dataError);
// Restore the URL target or the previous reading position after dynamic content
// has settled, while the app is still hidden to avoid a visible jump.
requestAnimationFrame(() => {
  if (location.hash) {
    navigateToHash();
  } else {
    try {
      const savedScrollY = sessionStorage.getItem(SCROLL_STORAGE_KEY);
      if (savedScrollY !== null && Number.isFinite(Number(savedScrollY))) {
        window.scrollTo({ top: Number(savedScrollY), behavior: "instant" });
      }
    } catch {
      // Keep the normal top-of-page behavior if session storage is unavailable.
    }
  }
  try {
    sessionStorage.removeItem(SCROLL_STORAGE_KEY);
  } catch {
    // Ignore unavailable session storage.
  }
  updateActiveSection();
  document.documentElement.classList.add("app-ready");
});
