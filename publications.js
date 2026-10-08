import { renderEntry } from "./ui.js";

// By default use scholar_complete.json, also used by the Bio feed.

// create similar object (like from line 7 till 14) to add new publications to this list. Also moving it up and down will change the order of publications on the page.
export const publicationOverrides = [
  {
    title: "Dis(em)powering women in a globalised world: Mapping evidence from a PRISMA-based systematic literature review",
    authors: "Surbhi Mishra and Dukhabandhu Sahoo",
    publication: "Global Society: 1-31, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/13600826.2026.2724968" }
    ],
    abstract: "Despite growing global commitments to gender equality, women’s empowerment remains uneven and often constrained under globalisation. While existing literature has explored various aspects of globalisation, it lacks a comprehensive synthesis of how economic, social, and political globalisation affects multiple dimensions of women’s empowerment. To address this gap, we conducted a systematic literature review of 77 peer-reviewed studies published in Scopus, Web of Science, and ScienceDirect, spanning diverse countries and regions. Our review reveals that 90% of the studies link globalisation with women’s employment and wages, 39% highlight impacts on education and skill development, 31% examine health and quality of life, 27% focus on decision-making roles, 16% on women’s rights, and 9% on violence against women. The evidence shows both positive and negative outcomes, with sectoral and geographical heterogeneity and institutional barriers shaping the extent of empowerment. Globalisation is a powerful process whose gender effects are shaped, and can be shaped further, by the institutional, cultural, and political choices made at global, national, and local levels."
  },
  {
    title: "How does the energy transition shape inclusive green growth in the European Union?",
    authors: "Arindam Paul, Dukhabandhu Sahoo, and Manash Kumar Behera",
    publication: "Journal of Economics and Statistics 246 (4): 285-331, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1515/jbnst-2024-0046" },
      { label: "[dataset]", link: "https://doi.org/10.15456/jbnst.2025189.1922157782" },
      { label: "[Hindustan Times]", link: "https://www.hindustantimes.com/opinion/the-long-road-ahead-to-meaningful-energy-transition-101723718567669.html" },
      { label: "[The Statesman]", link: "https://www.thestatesman.com/opinion/the-ev-challenge-that-india-must-overcome-1503353981.html" }
    ],
    abstract: "Millets have become increasingly recognized for their climatic resistance, nutritional value, and adaptability for marginal agricultural systems, making them critical for sustainable agriculture and food security. The millet value chain, which includes production, processing, marketing, and consumption, is essential to realizing its full potential. This study draws together the millet value chain literature through a PRISMA 2020-guided systematic review paired with a bibliometric mapping exercise. The study analyses a sample of 85 peer-reviewed publications, addressing key questions on the themes, trends, and gaps in this research area. Publication activity was negligible before 2018 and has grown steadily since, with 2024 and 2025 together accounting for over a third of the entire corpus - a pattern that tracks closely with the UN’s designation of 2023 as the International Year of Millets and the resulting surge in policy and donor attention. India leads in research publication and citation impact, with significant contributions from institutions such as the University of Hyderabad, NIPGR, Tamil Nadu Agricultural University, ICRISAT, IGKV, and the M.S. Swaminathan Research Foundation. A thematic analysis identified five significant domains: millet cultivation, millet processing and value chain, nutrition and health, policy and institutional support, and gender inclusion. Value chain and processing research dominate, with a focus on breakthroughs in post-harvest technology and enterprise development. However, considerable gaps exist in consumer research, impact assessments, and gender-focused analysis. Challenges such as fragmented supply chains, weak infrastructure, and restricted varietal access remain."
  },
  {
    title: "Determinants of circular economy adoption in wastewater treatment plants",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "Current Opinion in Environmental Sustainability 81: 101652, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.cosust.2026.101652" },
      { label: "[The Financial Express]", link: "https://www.financialexpress.com/opinion/fixing-fault-lines-in-wastewater-market/3857162/" },
      { label: "[DT Next]", link: "https://www.dtnext.in/edit/tapping-indias-hidden-wastewater-wealth-838478" },
      { label: "[Hindustan Times]", link: "https://www.hindustantimes.com/opinion/why-india-must-tap-its-wastewater-prospects-101751382096353.html" }
    ]
  },
  {
    title: "Women’s empowerment and economic progress: A longitudinal study of India and China",
    authors: "Surbhi Mishra and Dukhabandhu Sahoo",
    publication: "Review of Social Economy: 1-34, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/00346764.2026.2683377" },
      { label: "[The Daily Guardian]", link: "https://thedailyguardian.com/empowering-women-the-keystone-of-viksit-bharats-economic-ambitions/" },
      { label: "[Yojana]", link: "https://afeias.com/knowledge-centre/magazines/yojana-inclusive-human-resource-development-and-social-justice/" }
    ]
  },
  {
    title: "Renewable energy transition and inclusive green growth in EMDEs: Evidence from a CS-ARDL approach",
    authors: "Arindam Paul, Dukhabandhu Sahoo, and Amit Mitra",
    publication: "Sustainable Development: 1-19, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1002/sd.71281" },
      { label: "[Business Today]", link: "https://www.businesstoday.in/opinion/columns/story/powering-indias-future-the-energy-revolution-is-driving-the-govts-viksit-bharat-vision-436422-2024-07-09" },
      { label: "[The Hindu Frontline]", link: "https://frontline.thehindu.com/environment/economy-policy-india-climate-strategy-rethink-balancing-growth-sustainability-economic-survey-2024/article68440598.ece" },
      { label: "[The Wire]", link: "https://thewire.in/environment/indias-climate-strategy-needs-a-rethink" }
    ]
  },
  {
    title: "Does commercial farming protect the environment? Evidence from chemical input use in Haryana, India",
    authors: "Saroj Verma and Kirtti Ranjan Paltasingh",
    publication: "Journal of Agribusiness in Developing and Emerging Economies 16 (4): 894-909, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/JADEE-07-2024-0233" },
      { label: "[The Hindu]", link: "https://www.thehindu.com/opinion/op-ed/natural-farming-in-india-sprouting-but-still-to-grow-deep-roots/article68877029.ece" }
    ]
  },
  {
    title: "Determinants of crop diversification and the role of agricultural technology and institutional enablers in millet-based tribal farming systems",
    authors: "Pruthiraj Tandi, Nihar Ranjan Jena, and Dukhabandhu Sahoo",
    publication: "Discover Environment 4: 208, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s44274-026-00720-5" },
      { label: "[The Hindu]", link: "https://www.thehindu.com/opinion/op-ed/the-road-to-2047-for-indian-agriculture/article68559674.ece" }
    ]
  },
  {
    title: "Mapping barriers to agro-waste circularity: SLR-based WINGS analysis",
    authors: "Sarmistha Mishra, Dukhabandhu Sahoo, and Pritisudha Mohanty",
    publication: "Environmental Economics and Policy Studies 28: 703-730, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s10018-025-00461-4" }
    ]
  },
  {
    title: "Knowledge and capacity barriers to circular bioeconomy in crop waste bioenergy production: A comparative MCDM analysis",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "Australian Journal of Agricultural and Resource Economics 70 (2): 334-351, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1111/1467-8489.70091" }
    ]
  },
  {
    title: "Climate and land use dynamics in India’s livestock industry",
    authors: "Dukhabandhu Sahoo and Kirtti Ranjan Paltasingh",
    publication: "China Agricultural Economic Review: 1-20, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/CAER-05-2025-0186" }
    ]
  },
  {
    title: "Do energy risks drive the renewable transition in the Asia-Pacific? Insights from the method of moments quantile regression",
    authors: "Arindam Paul, Manash Kumar Behera, and Dukhabandhu Sahoo",
    publication: "Journal of the Asia Pacific Economy: 1-36, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/13547860.2025.2587665" },
      { label: "[The Hindu Frontline]", link: "https://frontline.thehindu.com/environment/india-budget-2025-climate-policy-clean-energy-fossil-fuels-water-crisis-green-finance/article69343766.ece" }
    ]
  },
  {
    title: "Barriers to circular economy adoption in MSMEs: a WINGS analysis of challenges in developing economies",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "Circular Economy and Sustainability 5: 4919-4944, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s43615-025-00668-3" },
      { label: "[Telangana Today]", link: "https://telanganatoday.com/opinion-india-must-build-a-truly-circular-economy" }
    ]
  },
  {
    title: "Evaluating seasonal weather risks on cereal yield distributions in southern India",
    authors: "Kirtti Ranjan Paltasingh, Dayakar Peddi, Dukhabandhu Sahoo, Auro Kumar Sahoo, and Pritisudha Mohanty",
    publication: "Journal of Quantitative Economics 23: 785-845, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.36253/bae-17008" }
    ]
  },
  {
    title: "Impact of weather variability on crop yields and land use dynamics in Eastern India: Short- and long-term effects",
    authors: "Pratap Kumar Jena, Kirtti Ranjan Paltasingh, and Ashok Mishra",
    publication: "Bio-based and Applied Economics 14 (2): 31-49, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.36253/bae-17008" }
    ]
  },
  {
    title: "Does climate-smart agriculture technology improve farmers’ subjective wellbeing? Micro-level evidence from Odisha, India",
    authors: "Dukhabandhu Sahoo, Pritisudha Mohanty, Surbhi Mishra, and Manash Kumar Behera",
    publication: "Farming System 3 (1): 100124, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.farsys.2024.100124" },
      { label: "[Orissa Post]", link: "https://odishapostepaper.com/m/247715/66c1049ba2213" }
    ]
  },
  {
    title: "Circular economy adoption in MSMEs: unveiling enablers and barriers",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "International Journal of Development Issues 24 (2): 237-263, 2024",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/IJDI-06-2024-0163" }
    ]
  },
  {
    title: "Unveiling the spatial dynamics of climate impact on rice yield in India",
    authors: "Le Wen, Basil Sharp, and Dukhabandhu Sahoo",
    publication: "Economic Analysis and Policy 83: 922-945, 2024",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.eap.2024.07.021" },
      { label: "[Down to Earth]", link: "https://www.downtoearth.org.in/agriculture/rice-farming-in-india-is-deeply-intertwined-with-spatial-climate-effects" }
    ]
  },
  {
    title: "Heterogeneous climate effect on crop yield and associated risks to water security in India",
    authors: "Dukhabandhu Sahoo, Auro Kumar Sahoo, Basil Sharp, and Le Wen",
    publication: "International Journal of Water Resources Development 40 (3): 345-378, 2024",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/07900627.2023.2244086" },
      { label: "[dataset]", link: "https://doi.org/10.17632/ywp3y5j9vv.1" },
      { label: "[Telangana Today]", link: "https://telanganatoday.com/opinion-the-leakages-in-indias-water-security" },
      { label: "[Down to Earth]", link: "https://www.downtoearth.org.in/agriculture/understanding-climate-effect-on-crop-yield-and-associated-risks-to-water-security-in-india-is-crucial-93393" }
    ]
  },
  {
    title: "How climate-included variations in crop yields affect migration in India",
    authors: "Amarendra Das, Dukhabandhu Sahoo, Basil Sharp, and Auro Kumar Sahoo",
    publication: "International Journal of Social Economics 50 (11): 1521-1550, 2023",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/IJSE-10-2022-0710" }
    ]
  },
  {
    title: "How changes in climate affect crop yields in eastern India",
    authors: "Basil Sharp and Dukhabandhu Sahoo",
    publication: "Climate Change Economics 13 (2): 2250001, 2022",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1142/S2010007822500014" },
      { label: "[The Pioneer]", link: "https://dailypioneer.com/news/slug-lite/india-s-bold-climate-leadership-amidst-global-heatwave-concerns?year=2024" }
    ]
  },
  {
    title: "Decomposition of climate-induced productivity growth in Indian agriculture",
    authors: "Basil Sharp, Auro Kumar Sahoo, and Dukhabandhu Sahoo",
    publication: "Environmental Challenges 7: 100494, 2022",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.envc.2022.100494" },
      { label: "[Down to Earth]", link: "https://www.downtoearth.org.in/agriculture/analysing-climate-induced-productivity-growth-in-indian-agriculture-93097" }
    ]
  }
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
