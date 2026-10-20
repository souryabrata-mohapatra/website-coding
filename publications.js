import { renderEntry } from "./ui.js";

// By default use scholar_complete.json, also used by the Bio feed.

const publicationFigures = [
  { number: 20, file: "paper 20.jpg" },
  { number: 18, file: "paper 18.jpg" },
  { number: 17, file: "paper 17.png" },
  { number: 13, file: "paper 13.png" },
  { number: 12, file: "paper 12.png" },
  { number: 11, file: "paper 11.jpg" },
  { number: 9, file: "paper 9.png" },
  { number: 7, file: "paper 7.jpg" },
  { number: 5, file: "paper 5.jpg" },
  { number: 4, file: "paper 4.jpg" },
  { number: 3, file: "paper 3.png" },
  { number: 2, file: "paper 2.png" },
  { number: 1, file: "paper 1.jpg" }
];

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
    ],
    abstract: "Despite increasing policy attention to circular economy strategies, resource recovery in wastewater treatment plants (WWTPs) remains limited, raising concerns about the effectiveness of circular transitions in water systems. Using a systematic literature review of 34 peer-reviewed studies from 2015 to 2026, this study examines the key enablers and barriers to circular economy–based resource recovery in WWTPs. The analysis identifies 20 barriers and 17 enablers, grouped into four clusters. The findings reveal that the topmost barriers faced by WWTPs are a lack of appropriate skill and training related to the use of advanced technology for resource recovery from wastewater. When it comes to enablers, factors such as innovative technological advancements in recent times and a strong motivation towards environmental protection drive WWTPs to implement circular resource recovery practices. The study further incorporated a case study analysis in order to identify several context-specific strategies for successful circular water recovery practices by the WWTPs."
  },
  {
    title: "Women’s empowerment and economic progress: A longitudinal study of India and China",
    authors: "Surbhi Mishra and Dukhabandhu Sahoo",
    publication: "Review of Social Economy: 1-34, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/00346764.2026.2683377" },
      { label: "[The Daily Guardian]", link: "https://thedailyguardian.com/empowering-women-the-keystone-of-viksit-bharats-economic-ambitions/" },
      { label: "[Yojana]", link: "https://afeias.com/knowledge-centre/magazines/yojana-inclusive-human-resource-development-and-social-justice/" }
    ],
    abstract: "Recent progress towards gender equality highlights the growing global commitment to empowering women. However, there is no unified longitudinal index of women’s empowerment (WEI) in the Global South. This paper constructs the WEI for India and China from 1991 to 2024 and assesses its impact on economic growth. Some missing data points are interpolated and extrapolated, which may affect index reliability; however, the included variable represents the core dimensions widely adopted in research. The results yield two key insights: First, WEI reveals four distinct phases: a lower initial level, divergence with China advancing faster, India’s steady catch-up, and eventual convergence. Second, women’s empowerment enhances economic growth in both countries, with a higher effect in India. This paper presents the results and examines the impact of other macroeconomic factors on economic growth. The findings suggest that women’s empowerment is a powerful driver of long-term growth, underscoring the need for women-targeted policies."
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
    ],
    abstract: "The dual challenges of climate change and social exclusion present serious barriers to sustainable development in emerging markets and developing economies (EMDEs). Inclusive green growth (IGG) is critical for these nations as it helps sustain economic growth while managing environmental and social costs. Although the literature highlights the role of renewable energy in reducing environmental harm, it offers limited analysis of its impact on IGG. Using data from 78 EMDEs from 1992 to 2021, we construct indices for IGG (via data envelopment analysis) and renewable energy transition (via principal component analysis) to examine their relationship. Applying the CS-ARDL model, we find that a 1% rise in renewable energy transition increases IGG by 1.495% in the long run and 2.078% in the short run. This effect operates through improvements in energy efficiency, environmental quality and broader access to clean energy. It is also observed that financial development, government spending and internet access enhance IGG, while urbanisation and economic globalisation have adverse effects. The results suggest that policies supporting renewable energy transition can foster more inclusive and low-carbon growth pathways across EMDEs."
  },
  {
    title: "Does commercial farming protect the environment? Evidence from chemical input use in Haryana, India",
    authors: "Saroj Verma and Kirtti Ranjan Paltasingh",
    publication: "Journal of Agribusiness in Developing and Emerging Economies 16 (4): 894-909, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/JADEE-07-2024-0233" },
      { label: "[The Hindu]", link: "https://www.thehindu.com/opinion/op-ed/natural-farming-in-india-sprouting-but-still-to-grow-deep-roots/article68877029.ece" }
    ],
    abstract: "This study aims to investigate the impact of contract farming (CF) on chemical input usage (fertilisers, pesticides and herbicides) in wheat farming in Haryana, India, weighing on environmental risks from unsustainable chemical input usage under CF. The research employs an endogenous switching regression (ESR) model using data from 754 farm households, enabling a comparative analysis between contract and non-contract farmers. The results show that farmers who adopted CF would have reduced chemical input usage by 26.8% if they did not adopt it. Conversely, non-adopters would have increased chemical input usage by 54% if they adopted CF. While CF enhances farm productivity and income, it also increases chemical input usage, posing risks such as soil fertility loss and water contamination."
  },
  {
    title: "Determinants of crop diversification and the role of agricultural technology and institutional enablers in millet-based tribal farming systems",
    authors: "Pruthiraj Tandi, Nihar Ranjan Jena, and Dukhabandhu Sahoo",
    publication: "Discover Environment 4: 208, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s44274-026-00720-5" },
      { label: "[The Hindu]", link: "https://www.thehindu.com/opinion/op-ed/the-road-to-2047-for-indian-agriculture/article68559674.ece" }
    ],
    abstract: "In tribal and climate-vulnerable regions, limited access to agricultural technologies and resource constraints often hinder crop diversification, despite its recognised role in enhancing sustainability, resilience, and food security. While technology adoption is known to influence farm diversification, evidence specific to millet-based systems in India’s tribal areas remains scarce. This study examines the determinants of crop diversification and the role of agricultural technology adoption among millet farmers in Koraput district, Odisha, a climate-sensitive and predominantly rainfed tribal region. Using primary data from 500 farm households, two composite indices were constructed: the crop diversification index (CDI), derived from Simpson’s index, and the agricultural technology intensity index (ATII), capturing physical, chemical, and strategic mechanisation dimensions. A fractional heteroscedastic probit model was applied, controlling for socio-economic and institutional factors. Results indicate that ATII has a statistically significant and positive association with CDI. Operational landholding size and age are also positively related to diversification, although their effects are comparatively modest. The heteroscedastic specification further shows that technology adoption, family size, and institutional barriers influence the variability of diversification outcomes, highlighting the role of unobserved heterogeneity. Moreover, the instrumental variable diagnostics demonstrate that correcting for endogeneity strengthens the estimated causal impact of ATII on CDI. Findings emphasise the need for promoting location-specific technologies, strengthening extension services, and enhancing targeted institutional support to scale up diversification and enhance climate resilience in millet-based farming systems."
  },
  {
    title: "Mapping barriers to agro-waste circularity: SLR-based WINGS analysis",
    authors: "Sarmistha Mishra, Dukhabandhu Sahoo, and Pritisudha Mohanty",
    publication: "Environmental Economics and Policy Studies 28: 703-730, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s10018-025-00461-4" }
    ],
    abstract: "As agriculture confronts mounting pressure to enhance sustainability and resource efficiency, circular bioeconomy (CBE) practices—particularly the reuse of agro-waste—offer a promising solution. However, widespread implementation remains hindered by numerous barriers that are not yet fully understood in their interconnections and influence. This study investigates these challenges through a systematic literature review (SLR) and an expert-based Weighted Influence Non-linear Gauge System (WINGS) analysis. The SLR identifies and categorises critical supply- and demand-side barriers, while the WINGS approach evaluates their relative strength and influence. Key barriers include the lack of government regulations and incentives, limited knowledge and skills for effective agro-waste reuse, and an underdeveloped market for bio-based products. These barriers exhibit strong causal relationships, indicating their central role in delaying CBE adoption. By revealing the interdependencies among barriers, the study provides a structured roadmap for policymakers and stakeholders to prioritise interventions. The findings underscore the need for coordinated policy support, capacity-building initiatives, and market development strategies to accelerate sustainable agro-waste reuse in agriculture."
  },
  {
    title: "Knowledge and capacity barriers to circular bioeconomy in crop waste bioenergy production: A comparative MCDM analysis",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "Australian Journal of Agricultural and Resource Economics 70 (2): 334-351, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1111/1467-8489.70091" }
    ],
    abstract: "In the context of growing energy demand, prioritising the advancement of the circular bioeconomy (CBE) over the ongoing extraction of fossil fuels is essential for a sustainable future. The utilisation of crop residues for bioenergy can significantly contribute to the CBE framework, providing a sustainable as well as an economical solution. However, it may be hindered by several knowledge and capacity-related barriers. This study examines those critical knowledge and capacity barriers to the effective implementation of a CBE for crop residue–based bioenergy production via a systematic literature review and experts' suggestions. This paper further aims to compare the findings of the DEMATEL and WINGS methods in identifying potential relationships among selected knowledge and capacity barriers from an academic-expert-driven perspective, and to ascertain key strategies for successful crop residue–based bioenergy production through a qualitative case study analysis of Indian farmers. The results indicate significant discrepancies in the number of interrelationships among the barriers. Although DEMATEL reveals a comparatively greater number of interrelationships, WINGS tends to highlight only the most dominant and statistically robust causal links, identifying technical skill gaps and awareness deficits as particularly influential. Therefore, resolving these difficulties is crucial for sustainable bioenergy production through a circular bioeconomy framework."
  },
  {
    title: "Climate and land use dynamics in India’s livestock industry",
    authors: "Dukhabandhu Sahoo and Kirtti Ranjan Paltasingh",
    publication: "China Agricultural Economic Review: 1-20, 2026",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/CAER-05-2025-0186" }
    ],
    abstract: "India’s high-value livestock sector is integral to rural livelihoods and food security, yet it faces mounting pressures from climate change and resource constraints. This study empirically investigates how climate variability and land use influence livestock production and population dynamics, with a focus on India’s vulnerable rainfed-mixed systems. Using district-level data from 301 districts across 15 major Indian states, we examine the effects of climatic factors (temperature, rainfall and evapotranspiration) and land use changes (forest cover, fodder and pasture lands) on two dimensions of the livestock industry – production (milk, meat and eggs) and population (poultry and non-poultry). We apply the system-generalised method of moments (GMM) estimator to address cross-sectional dependence and endogeneity, complemented by robustness checks using panel-corrected standard errors and Driscoll–Kraay methods. Forest cover significantly boosts milk production (elasticities: 0.48 short run; 2.32 long run) and non-poultry population (0.038; 3.91), while pastureland strengthens milk yield (0.58; 2.80). Fodder area enhances meat and poultry output, reinforcing feed security. Per-capita income and population density drive demand-led growth. Temperature exhibits an inverse-U effect, with optimal productivity at 33.2–35 °C. Rainfall deviations reduce meat and egg output (−1.5 and −0.66 in the short run; −7.24 and −3.19 in the long run) and shrink both livestock populations, whereas evapotranspiration enhances meat production up to an optimal level of about 87.6 mm."
  },
  {
    title: "Do energy risks drive the renewable transition in the Asia-Pacific? Insights from the method of moments quantile regression",
    authors: "Arindam Paul, Manash Kumar Behera, and Dukhabandhu Sahoo",
    publication: "Journal of the Asia Pacific Economy: 1-36, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1080/13547860.2025.2587665" },
      { label: "[The Hindu Frontline]", link: "https://frontline.thehindu.com/environment/india-budget-2025-climate-policy-clean-energy-fossil-fuels-water-crisis-green-finance/article69343766.ece" }
    ],
    abstract: "Energy risks in the post-COVID-19 era pose significant challenges for human civilisation, particularly in the Asia-Pacific region, which remains highly vulnerable to energy crises. Although renewable energy is widely regarded as a strategic response, empirical research examining the nexus between energy risks and the renewable energy transition in this region remains limited. This study addresses the gap by investigating the impacts of energy uncertainty and insecurity on renewable energy transition across nine Asia-Pacific economies from 1991–2021. Employing the method of moments quantile regression, the findings reveal that both energy risks accelerate the transition, with stronger effects observed at more advanced stages. Furthermore, GDP per capita and foreign direct investment facilitate the transition, while green innovation unexpectedly hinders progress, reflecting potential underinvestment in environmental technologies. Causality tests confirm a unidirectional relationship from energy transition to uncertainty. The results underscore the urgency of enhancing renewable infrastructure, storage capacity, and foreign investment."
  },
  {
    title: "Barriers to circular economy adoption in MSMEs: a WINGS analysis of challenges in developing economies",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "Circular Economy and Sustainability 5: 4919-4944, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1007/s43615-025-00668-3" },
      { label: "[Telangana Today]", link: "https://telanganatoday.com/opinion-india-must-build-a-truly-circular-economy" }
    ],
    abstract: "The transition to a circular economy (CE) is a crucial global goal aimed at promoting sustainable production and consumption. However, its adoption among Micro, Small, and Medium Enterprises (MSMEs) in developing economies remains constrained by multiple barriers. This study builds upon prior research that identified sixteen key barriers to CE adoption through a systematic literature review. Employing the Weighted Influence Non-linear Gauge System (WINGS) method, the study ranks the barriers in terms of their internal strength as well as their intensity to influence other barriers in the specific context of MSMEs. Expert evaluations indicate that lack of investment support, financial constraints, lack of resource efficiency, inadequate infrastructure, and limited potential knowledge are the most influential barriers. The WINGS analysis also reveals that lack of investment support and lack of information are the two primary barriers affecting the greatest number of other barriers. Hence, the findings of our study suggest the urgent need for targeted policy interventions to enhance financial capacity, knowledge dissemination, and infrastructural support, collectively facilitating MSMEs’ transition to CE practices. This study contributes to the literature by identifying and prioritising the key barriers, as well as identifying the interconnectedness among them, which serves as a guide in order to design effective strategies supporting MSMEs in overcoming CE adoption barriers, thereby fostering sustainable economic growth in developing economies."
  },
  {
    title: "Evaluating seasonal weather risks on cereal yield distributions in southern India",
    authors: "Kirtti Ranjan Paltasingh, Dayakar Peddi, Dukhabandhu Sahoo, Auro Kumar Sahoo, and Pritisudha Mohanty",
    publication: "Journal of Quantitative Economics 23: 785-845, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.36253/bae-17008" }
    ],
    abstract: "Seasonal weather variability significantly impacts cereal production in southern India, where smallholder farmers are particularly vulnerable to climate-induced shocks. This study assesses the risk of weather variability on cereal yield distributions using a comprehensive dataset spanning multiple years. The findings reveal that extreme weather events, such as droughts and floods, have a disproportionate effect on yield stability, with some regions experiencing more severe impacts than others. The results highlight the need for adaptive strategies and improved risk management practices to enhance resilience in the face of increasing climate uncertainty."
  },
  {
    title: "Impact of weather variability on crop yields and land use dynamics in Eastern India: Short- and long-term effects",
    authors: "Pratap Kumar Jena, Kirtti Ranjan Paltasingh, and Ashok Mishra",
    publication: "Bio-based and Applied Economics 14 (2): 31-49, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.36253/bae-17008" }
    ],
    abstract: "Weather variability disrupts food grain production and agricultural sustainability. While existing literature highlights the stationary relationship between weather variables and agricultural outcomes, it often overlooks their bearing on land use changes. This study investigates the dynamic effects of weather variations on crop yields, land use and intensity in Odisha, Eastern India, using district-level data from 2001-18. By employing a ‘panel auto-regressive distributive lag (P-ARDL) model, we assess long- and short-term relationships between weather parameters and agricultural yields. Results reveal a negative marginal impact of rainfall deviation on yield, ranging from -0.16 for wheat to -0.48 for green gram in the long term. In the short term, however, the marginal impact is positive for some pulses (green gram, black gram) and oilseeds (groundnuts). Weather variability has adversely affected the intensity of land use but has induced crop diversification in both the short and long term."
  },
  {
    title: "Does climate-smart agriculture technology improve farmers’ subjective wellbeing? Micro-level evidence from Odisha, India",
    authors: "Dukhabandhu Sahoo, Pritisudha Mohanty, Surbhi Mishra, and Manash Kumar Behera",
    publication: "Farming System 3 (1): 100124, 2025",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.farsys.2024.100124" },
      { label: "[Orissa Post]", link: "https://odishapostepaper.com/m/247715/66c1049ba2213" }
    ],
    abstract: "Since the global population is expected to reach 9.7 billion by 2050, food production must increase by 70% in the next 30 years to provide food security in the face of climate change. Implementing climate-smart agriculture technology (CSAT) is essential for ensuring food security and promoting economic growth in the context of sustainable agriculture. Climate change and weather patterns significantly affect agricultural yield, necessitating the implementation of more efficient, productive, and climate-resilient techniques. However, the use of CSAT is a behavioural decision that affects the subjective well-being of the users. Using smart agricultural practices reduces climate change's impact on agricultural productivity and promotes sustainable agriculture, improving adopters' welfare. This study examines how the use of CSAT affects rural households' subjective well-being in Odisha, India. The result of the study shows that the use of CSAT significantly affects the subjective well-being of the farmers. The measured impact is 0.149, 0.181, and 0.144 for farmers whose intensity is 0.251–0.500, 0.501–0.750, and 0.751 and above, respectively, as compared to farmers whose intensity is 0.0–0.250. This implies greater satisfaction for farmers who engage in the moderate use of CSAT practices. Low utilization of technology may not yield benefits for farmers, while the adoption of advanced technology may not be economically viable. Additionally, CSAT is not easily available to households residing in low-lying areas, preventing them from improving their well-being. Only a small number of landowners in impoverished areas utilize CSAT. Therefore, it is necessary to evaluate government regulations regarding land and tenancy as well as develop measures for farmers to adapt to new technologies."
  },
  {
    title: "Circular economy adoption in MSMEs: unveiling enablers and barriers",
    authors: "Sarmistha Mishra and Dukhabandhu Sahoo",
    publication: "International Journal of Development Issues 24 (2): 237-263, 2024",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/IJDI-06-2024-0163" }
    ],
    abstract: "The study aims to explore the enablers and barriers to the adoption of circular economy (CE) practices in micro, small and medium enterprises (MSMEs) and examine how these factors differ between developed and developing countries. The research uses a systematic literature review (SLR) methodology to identify key enablers and barriers to CE adoption in MSMEs. The SLR process involved a detailed search and analysis of relevant academic articles from the Scopus and Web of Science databases, following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) guidelines to ensure transparency. The study identifies 19 enablers and 16 barriers to CE adoption in MSMEs. Technological upgrades are the key factor helping MSMEs successfully implement CE practices, while financial constraints are the main challenge they face, according to studies from both developed and developing countries. This research contributes to the existing body of literature by not only identifying the primary factors that either support or impede the implementation of CE by MSMEs but also by classifying them according to developed and developing countries to provide policymakers and MSME stakeholders with valuable insights on enhancing the implementation of CE in both countries by taking into account the particular barriers and enablers faced by each group individually."
  },
  {
    title: "Unveiling the spatial dynamics of climate impact on rice yield in India",
    authors: "Le Wen, Basil Sharp, and Dukhabandhu Sahoo",
    publication: "Economic Analysis and Policy 83: 922-945, 2024",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.eap.2024.07.021" },
      { label: "[Down to Earth]", link: "https://www.downtoearth.org.in/agriculture/rice-farming-in-india-is-deeply-intertwined-with-spatial-climate-effects" }
    ],
    abstract: "Climate change has added new dimensions of uncertainty associated with India's rice production. Previous research has explored the impact of climate variation on production and noted the interdependence among neighbouring regions. Using district-level data, we investigate two categories of spatial dynamics associated with the climate sensitivity of rice yield. First, we find evidence that supports previous research that yield is significantly influenced by the direct effects of monsoon maximum temperature and rainfall. The second category, capturing indirect effects, is novel because it provides additional insights into formal and informal networks that underpin the information flow on climate adaptation. Empirical evidence of spatial interdependence arising from information spillovers provides insights into the development of spatially targeted policies that offer the potential for knowledge transfer that contributes to sustaining and increasing rice yields. Policy objectives should therefore focus on advancing technology and promoting social networks that enhance information flow across regions."
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
    ],
    abstract: "This study uses the Just–Pope approach to investigate the effects of seasonal weather variables and extremes on the mean yield and yield variability of rice, bajra, chickpea, groundnut and sugarcane in India during the period 1990–2015. Results reveal that changes in rainfall and evapotranspiration across seasons largely affect mean yields for most crops, including bajra, chickpea and groundnut. However, high summer rainfall and low monsoon evapotranspiration extremes reduce groundnut and chickpea yield variability. Considering the importance of water availability to crop yields, this study suggests improving irrigation and water reallocation and management to reduce the severity of seasonal climate effects."
  },
  {
    title: "How climate-included variations in crop yields affect migration in India",
    authors: "Amarendra Das, Dukhabandhu Sahoo, Basil Sharp, and Auro Kumar Sahoo",
    publication: "International Journal of Social Economics 50 (11): 1521-1550, 2023",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1108/IJSE-10-2022-0710" }
    ],
    abstract: "The study unravels the effects of climate-induced variations in staple crop yields on various migratory inflows in India while adjusting for seasonal weather and sociodemographic factors. The instrumental variable approach is used to assess the potential effects of climate and nonclimate parameters on various migration types, exploiting panel data at the district level from the 2001 and 2011 Census years, with agriculture acting as the mediator. As weather-driven variations in rice and wheat yield increase by 10%, the share of migration within and between districts to population decreases by 0.017 and 0.002, respectively. However, rice and wheat yields increase by 494.60 and 524.40%, respectively, with a marginal increase in the share of migration within states to population. Also, the elasticities of disadvantaged groups, literate locals and agricultural workers vary for different relocations. The current study affirms climate migration through the agricultural channel at a finer spatial scale, asserting the sensitivity aspect of disparate movements to periodic weather and heterogeneous clusters. This is critical for effectively implementing targeted public policies in the face of increasing climate risks."
  },
  {
    title: "How changes in climate affect crop yields in eastern India",
    authors: "Basil Sharp and Dukhabandhu Sahoo",
    publication: "Climate Change Economics 13 (2): 2250001, 2022",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1142/S2010007822500014" },
      { label: "[The Pioneer]", link: "https://dailypioneer.com/news/slug-lite/india-s-bold-climate-leadership-amidst-global-heatwave-concerns?year=2024" }
    ],
    abstract: "Climate change wreaks havoc on the planet’s ecosystem, affects weather patterns and undermines food security. This paper investigates the effect of changing climate on Indian agriculture, and the climate sensitivity of food grain yield in the eastern region. Using a panel set of physical crop yields and analyzing district-level data from 1990 to 2017, the study estimates agricultural production functions for specific food grains with extrinsic seasonal weather variables. These include average temperature, rainfall, evapotranspiration and wind speed. Spatially disaggregated district-level data provides information from low administrative units, creating a broader picture to be examined. The research indicates that climate change significantly affects east Indian agriculture, and its outcomes are consistent with other state and district-level studies conducted in India. Changing weather patterns over the year considerably influence crop production and disrupt food availability and quality. Hence, the study further expands the implications of results for inter-region inequality and recommends corrective measures."
  },
  {
    title: "Decomposition of climate-induced productivity growth in Indian agriculture",
    authors: "Basil Sharp, Auro Kumar Sahoo, and Dukhabandhu Sahoo",
    publication: "Environmental Challenges 7: 100494, 2022",
    media: [
      { label: "[paper]", link: "https://doi.org/10.1016/j.envc.2022.100494" },
      { label: "[Down to Earth]", link: "https://www.downtoearth.org.in/agriculture/analysing-climate-induced-productivity-growth-in-indian-agriculture-93097" }
    ],
    abstract: "This paper adopts a stochastic frontier approach to investigate the trend and determinants of total factor productivity (TFP) growth in the agriculture sector of India, using extensive district-level data. The assessment of the production frontier highlights the efficiency aspect of Indian agriculture and contributes to an analysis of those factors that might be directly engaged in the production process. After controlling for the district-specific climatic effect in the production of eighteen major crops, TFP growth is deconstructed into technical progress, technical efficiency change and scale effects. Four weather parameters, average temperature, rainfall, evapotranspiration and windspeed, are defined as exogenous determinants of the technical inefficiency term to analyze the influence of changing climate. Based on the true fixed effect model and maximum likelihood method, the estimated TFP growth averaged 0.688% per year between 1990 and 2015. The relative performance of Indian states apparently differs according to estimated productivity scores. The findings show that changes in technical efficiency account for most TFP growth, whereas differences in scale components account for annual and cross-state productivity growth disparities. The study suggests that region-specific policies are required to enhance agricultural productivity and add to the understanding of the arguments over TFP growth in Indian agriculture."
  }
];



export function renderPublications() {
  return `<section id="publications" class="page-section" aria-labelledby="publications-title">
    <h2 id="publications-title" class="section-title" tabindex="-1">Publications</h2>
    <div class="publication-columns">
      <div class="publication-main">
        <div id="publication-list"><p class="empty-state" role="status">Loading publications…</p></div>
      </div>
      <aside class="publication-gallery" aria-label="Publication figures">
         ${publicationFigures.map(({ number, file }) => `<figure class="publication-figure">
          <img src="images/${file}" alt="Figure for paper ${number}" loading="lazy" decoding="async">
          <figcaption>Paper ${number}</figcaption>
        </figure>`).join("")}
      </aside>
    </div>
  </section>`;
}

export function mountPublications(data, error) {
  const entries = publicationOverrides ?? data?.articles ?? [];
  document.getElementById("publication-list").innerHTML = entries.length
    ? entries.map((entry, index) => renderEntry({ ...entry, label: entries.length - index })).join("")
    : `<p class="empty-state" role="status">${error ? "Publications are temporarily unavailable. Please try again later." : "Details coming soon."}</p>`;
}
