import { initializeResearchFeed } from "./app.js";
import { escapeHtml, renderImage, safeUrl } from "./ui.js";

// Edit profile copy and links here. The portrait is shared with the sidebar.
export const profile = {
  name: "Souryabrata Mohapatra",
  role: "Assistant Professor",
  department: "Department of Economics",
  institution: "IIT Jodhpur",
  image: "sourya.webp",
  heading: "Hello and welcome!",
  paragraphs: [
    "I am an Assistant Professor in the Department of Economics at IIT Jodhpur. I completed my PhD in Economics from the University of Auckland Business School.",
    "My research examines climate risks, agricultural transformation, circular systems, energy transitions, and distress migration, particularly in contexts shaped by structural development challenges.",
    "Teaching is one of the most fulfilling aspects of my work. I especially enjoy teaching microeconomics, environmental economics, and econometrics.",
    "I am always open to new ideas. Please feel free to drop me an email."
  ],
  interests: ["Applied Economics", "Agricultural Transformation", "Climate Change", "Green Transition", "Just Migration"],
  news: ["News 1", "News 2", "News 3", "News 4"],
  links: [
    { label: "Email", icon: "mail.webp", href: "mailto:smohapatra@iitj.ac.in" },
    { label: "CV", icon: "cv.webp", href: "https://drive.google.com/file/d/1U140KvmDrV1PHdIoye6PJWZWILVVoAxL/view?usp=sharing" },
    { label: "Google Scholar", icon: "scholar.webp", href: "https://scholar.google.com/citations?user=TKbYqt0AAAAJ&hl=en" },
    { label: "LinkedIn", icon: "linkedin.webp", href: "https://www.linkedin.com/in/souryabrata" },
    { label: "ORCID", icon: "iD.webp", href: "https://orcid.org/0000-0002-3627-8739" },
    { label: "GitHub", icon: "github.webp", href: "https://github.com/souryabrata-mohapatra" }
  ],

};

export function renderProfileLinks() {
  return profile.links.map(({ label, icon, href }) =>
    `<a href="${safeUrl(href)}" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}" class="social-icon"${href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"'}>${renderImage(`icons/${icon}`, "", { className: "social-icon-image" })}</a>`
  ).join("");
}

export function renderBio() {
  return `<section id="bio" class="page-section bio-section" aria-labelledby="bio-title">
    <div class="bio-details">
      <div class="bio-introduction">
        <h2 id="bio-title" class="page-title" tabindex="-1">${escapeHtml(profile.heading)}</h2>
        <div class="bio-copy">${profile.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}</div>
      </div>
      <aside class="interest-list" aria-labelledby="interests-title">
        <div class="info-ticker" data-ticker="news" role="region" aria-labelledby="news-title">
          <h3 id="news-title" class="info-ticker-title">News</h3>
          <div class="info-ticker-window">
            <div class="info-ticker-track" aria-live="polite">
              ${profile.news.map((item, index) => `<p class="info-ticker-item${index === 0 ? " is-current" : ""}"${index < 2 ? "" : ' aria-hidden="true"'}>${escapeHtml(item)}</p>`).join("")}
            </div>
          </div>
        </div>
        <div class="info-ticker" data-ticker="interests" role="region" aria-labelledby="interests-title">
          <h3 id="interests-title" class="info-ticker-title">Research interests</h3>
          <div class="info-ticker-window">
            <div class="info-ticker-track" aria-live="polite">
              ${profile.interests.map((interest, index) => `<p class="info-ticker-item${index === 0 ? " is-current" : ""}"${index < 2 ? "" : ' aria-hidden="true"'}>${escapeHtml(interest)}</p>`).join("")}
            </div>
          </div>
        </div>
      </aside>
    </div>
    <div class="research-feed" aria-labelledby="research-feed-title">
      <h2 id="research-feed-title" class="section-title">Scholarly Feed</h2>
      <div id="research-feed"><p class="empty-state" role="status">Loading research feed…</p></div>
    </div>
  </section>`;
}

export function mountBio(data, error) {
  if (error) {
    document.getElementById("research-feed").innerHTML = '<p class="empty-state" role="status">The research feed is temporarily unavailable. Please try again later.</p>';
  } else {
    initializeResearchFeed(data);
  }
  initializeTwoRowTicker('[data-ticker="news"]');
  initializeTwoRowTicker('[data-ticker="interests"]');
}

function initializeTwoRowTicker(selector, initialDelay = 0) {
  const ticker = document.querySelector(selector);
  const track = ticker?.querySelector(".info-ticker-track");
  const items = track ? [...track.querySelectorAll(".info-ticker-item")] : [];
  if (items.length < 2) return;

  const itemHeight = items[0].offsetHeight;
  if (!itemHeight) return;
  const updateVisibleItems = () => {
    [...track.children].forEach((item, index) => {
      item.classList.toggle("is-current", index === 0);
      item.setAttribute("aria-hidden", index > 1 ? "true" : "false");
    });
  };

  track.addEventListener("transitionend", (event) => {
    if (event.target !== track || event.propertyName !== "transform") return;

    track.classList.add("is-resetting");
    track.append(track.firstElementChild);
    track.style.transform = "translateY(0)";
    updateVisibleItems();
    void track.offsetHeight;
    track.classList.remove("is-resetting");
  });

  const advance = () => {
    track.style.transform = `translateY(-${itemHeight}px)`;
  };

  window.setTimeout(() => {
    advance();
    window.setInterval(advance, 3000);
  }, initialDelay || 3000);
}
