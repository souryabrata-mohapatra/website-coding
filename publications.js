import { renderEntry } from "./ui.js";

// By default use scholar_complete.json, also used by the Bio feed.

// create similar object (like from line 7 till 14) to add new publications to this list. Also moving it up and down will change the order of publications on the page.
export const publicationOverrides = [
  {
      "title": "Dis (em) Powering Women in a Globalised World: Mapping Evidence from a PRISMA-Based Systematic Literature Review",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TKbYqt0AAAAJ&sortby=pubdate&citation_for_view=TKbYqt0AAAAJ:a0OBvERweLwC",
      "authors": "S Mishra, D Sahoo, S Mohapatra",
      "publication": "Global Society, 1-31, 2026",
      "year": "2026",
      "abstract": "Despite growing global commitments to gender equality, women’s empowerment remains uneven and often constrained under globalisation. While existing literature has explored various aspects of globalisation, it lacks a comprehensive synthesis of how economic, social, and political globalisation affects multiple dimensions of women’s empowerment. To address this gap, we conducted a systematic literature review of 77 peer-reviewed studies published in Scopus, Web of Science, and ScienceDirect, spanning diverse countries and regions. Our review reveals that 90% of the studies link globalisation with women’s employment and wages, 39% highlight impacts on education and skill development, 31% examine health and quality of life, 27% focus on decision-making roles, 16% on women’s rights, and 9% on violence against women. The evidence shows both positive and negative outcomes, with sectoral and geographical heterogeneity and institutional barriers shaping the extent of empowerment. Globalisation is a powerful process whose gender effects are shaped, and can be shaped further, by the institutional, cultural, and political choices made at global, national, and local levels."
    },
    {
      "title": "Mapping the millet value chain: A systematic and bibliometric review",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TKbYqt0AAAAJ&sortby=pubdate&citation_for_view=TKbYqt0AAAAJ:yD5IFk8b50cC",
      "authors": "P Tandi, NR Jena, D Sahoo, S Mohapatra",
      "publication": "SN Business & Economics 6 (10), 373, 2026",
      "year": "2026",
      "abstract": "Millets have become increasingly recognized for their climatic resistance, nutritional value, and adaptability for marginal agricultural systems, making them critical for sustainable agriculture and food security. The millet value chain, which includes production, processing, marketing, and consumption, is essential to realizing its full potential. This study draws together the millet value chain literature through a PRISMA 2020-guided systematic review paired with a bibliometric mapping exercise. The study analyses a sample of 85 peer-reviewed publications, addressing key questions on the themes, trends, and gaps in this research area. Publication activity was negligible before 2018 and has grown steadily since, with 2024 and 2025 together accounting for over a third of the entire corpus - a pattern that tracks closely with the UN’s designation of 2023 as the International Year of Millets and the resulting surge in policy and donor attention. India leads in research publication and citation impact, with significant contributions from institutions such as the University of Hyderabad, NIPGR, Tamil Nadu Agricultural University, ICRISAT, IGKV, and the M.S. Swaminathan Research Foundation. A thematic analysis identified five significant domains: millet cultivation, millet processing and value chain, nutrition and health, policy and institutional support, and gender inclusion. Value chain and processing research dominate, with a focus on breakthroughs in post-harvest technology and enterprise development. However, considerable gaps exist in consumer research, impact assessments, and gender-focused analysis. Challenges such as fragmented supply chains, weak infrastructure, and restricted varietal access remain."
    },
    {
      "title": "How does the energy transition shape inclusive green growth in the European Union?",
      "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TKbYqt0AAAAJ&sortby=pubdate&citation_for_view=TKbYqt0AAAAJ:k_IJM867U9cC",
      "authors": "A Paul, D Sahoo, S Mohapatra, MK Behera",
      "publication": "Jahrbücher für Nationalökonomie und Statistik 246 (4), 285-331, 2026",
      "year": "2026",
      "abstract": "Amidst the growing issues of global warming and non-inclusiveness, inclusive green growth (IGG) has become an aspiration for all countries. Countries worldwide, including those in the European Union (EU), are transitioning from non-renewable to renewable energy to preserve the environment. However, there is currently a lack of comprehensive research investigating the nexus between energy transition and IGG. This paper aims to explore the impact of energy transition on IGG in 25 EU countries from 1995 to 2021. We develop composite indices for both IGG and renewable energy transition targeted to EU economies and employ advanced econometric approaches such as the pooled mean group-autoregressive distributed lag (PMG-ARDL) model, Driscoll-Kraay standard errors (DKSE) method, feasible generalised least square (FGLS) method, panel corrected standard errors (PCSE) method, to uncover relevant associations. The PMG-ARDL deals with potential endogeneity and simultaneously provides short-run and long-run estimates, while the DKSE, FGLS and PCSE methods provide consistent outcomes in the presence of cross-sectional dependence, autocorrelation and heteroscedasticity among the error terms. Results indicate that the renewable energy transition hampers IGG in the short run but fosters it in the long run in the EU economies. Additionally, financial development and internet access enhance IGG, whereas government expenditure, inflation and economic globalisation have negative impacts. The findings suggest that EU countries should stimulate investment by public-private partnerships in renewable energy technologies and promote the use of renewable energy to make their economic growth green and inclusive."
    },
];

export function renderPublications() {
  return `<section id="publications" class="page-section" aria-labelledby="publications-title">
    <h2 id="publications-title" class="section-title" tabindex="-1">Publications</h2>
    <div id="publication-list"><p class="empty-state" role="status">Loading publications…</p></div>
  </section>`;
}

export function mountPublications(data, error) {
  const entries = publicationOverrides ?? data?.articles ?? [];
  document.getElementById("publication-list").innerHTML = entries.length
    ? entries.map(renderEntry).join("")
    : `<p class="empty-state" role="status">${error ? "Publications are temporarily unavailable. Please try again later." : "Details coming soon."}</p>`;
}
