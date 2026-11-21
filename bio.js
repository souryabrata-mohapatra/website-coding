import { initializeResearchFeed } from "./app.js";
import { escapeHtml, renderImage, safeUrl } from "./ui.js";

// Edit profile copy and links here. The portrait is shared with the sidebar.
export const profile = {
  name: "Souryabrata Mohapatra",
  role: "Assistant Professor",
  department: "Department of Economics",
  institution: "IIT Jodhpur",
  image: "sourya.webp",
  heading: "Souryabrata Mohapatra — Economist and Assistant Professor at IIT Jodhpur",
  paragraphs: [
    "I am an Assistant Professor in the Department of Economics at the Indian Institute of Technology Jodhpur (IIT Jodhpur). I hold a PhD in Economics from the University of Auckland Business School.",
    "My research examines climate risks, agricultural transformation, circular systems, energy transitions, and distress migration, particularly in contexts shaped by structural development challenges.",
    "Teaching is one of the most fulfilling aspects of my work. I especially enjoy teaching microeconomics, environmental economics, and econometrics.",
    "For academic enquiries and collaboration, please contact me at smohapatra@iitj.ac.in."
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
    <section class="academic-highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title" class="section-title">Academic highlights</h2>
      <div class="highlights-grid">
        <article>
          <h3>Research focus</h3>
          <p>Applied economics of climate risk, sustainable agriculture, circular systems, renewable-energy transitions, and migration in emerging and developing economies.</p>
        </article>
        <article>
          <h3>Current project</h3>
          <p>ICSSR Major Project (2026–2028): <em>Dynamics of institutional arrangement and climate-induced migration around the blue economy of Lake Chilika.</em></p>
        </article>
        <article>
          <h3>Selected research</h3>
          <p>Recent work addresses energy transition and inclusive green growth, weather risks and crop yields in Southern India, circular-economy adoption, and climate resilience in agriculture.</p>
        </article>
        <article>
          <h3>Academic profiles</h3>
          <p><a href="https://iitj.ac.in/People/Profile/4fb56892-ba9f-4c24-b406-b68b8928934b" target="_blank" rel="noopener noreferrer">IIT Jodhpur faculty profile</a> · <a href="https://scholar.google.com/citations?user=TKbYqt0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> · <a href="https://orcid.org/0000-0002-3627-8739" target="_blank" rel="noopener noreferrer">ORCID: 0000-0002-3627-8739</a></p>
        </article>
      </div>
    </section>
    <section class="selected-publications" aria-labelledby="selected-publications-title">
      <h2 id="selected-publications-title" class="section-title">Selected publications</h2>
      <ol>
        <li>Mohapatra, S., Paltasingh, K. R., Peddi, D., Sahoo, D., Sahoo, A. K., & Mohanty, P. (2025). <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TKbYqt0AAAAJ&citation_for_view=TKbYqt0AAAAJ:35N4QoGY0k4C" target="_blank" rel="noopener noreferrer">Evaluating seasonal weather risks on cereal yield distributions in Southern India</a>. <em>Journal of Quantitative Economics</em>, 23(3), 785–845.</li>
        <li>Mohapatra, S., Mitra, A., Mondal, S., Chaudhury, S. B., & Pohit, S. (2026). <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TKbYqt0AAAAJ&citation_for_view=TKbYqt0AAAAJ:rO6llkc54NcC" target="_blank" rel="noopener noreferrer">Climate Change and Indian Crop Yields: Impacts and Projections</a>. <em>Margin: The Journal of Applied Economic Research</em>, 20(1), 7–63.</li>
        <li>Paul, A., Sahoo, D., Mohapatra, S., & Behera, M. K. (2026). <a href="https://doi.org/10.1515/jbnst-2024-0046" target="_blank" rel="noopener noreferrer">How does the energy transition shape inclusive green growth in the European Union?</a> <em>Journal of Economics and Statistics</em>, 246(4), 285–331.</li>
      </ol>
    </section>
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
