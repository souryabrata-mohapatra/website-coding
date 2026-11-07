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
    <h2 id="bio-title" class="page-title" tabindex="-1">${escapeHtml(profile.heading)}</h2>
    <div class="bio-details">
      <div class="bio-copy">${profile.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}</div>
      <aside class="interest-list" aria-labelledby="interests-title">
        <h3 id="interests-title" class="interest-title">Research interests</h3>
        <div class="interest-orbit" role="img" aria-label="Applied Economics connected to agricultural transformation, climate change, green transition, and just migration">
          <strong class="interest-core">Applied Economics</strong>
          <div class="keyword-stack">
            ${profile.interests.filter((interest) => interest !== "Applied Economics").map((interest, index) => `<span class="keyword${index === 0 ? " is-emphasized" : ""}" data-keyword-index="${index}" tabindex="0">${escapeHtml(interest)}</span>`).join("")}
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
    return;
  }
  initializeResearchFeed(data);
  initializeKeywordRotation();
}

function initializeKeywordRotation() {
  const keywords = [...document.querySelectorAll(".keyword-stack .keyword")];
  if (keywords.length < 2) return;
  let activeIndex = 0;
  window.setInterval(() => {
    keywords[activeIndex].classList.remove("is-emphasized");
    activeIndex = (activeIndex + 1) % keywords.length;
    keywords[activeIndex].classList.add("is-emphasized");
  }, 2400);
}
