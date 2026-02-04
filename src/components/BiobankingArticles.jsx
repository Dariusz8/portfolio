import React from "react";
import '../ArticleList.css';


const articles = [
    {
      title:
        "Development of biobanking infrastructure in Armenia: opportunities and challenges (2026)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12835345/",
    },
    {
      title:
        "Development of national biobank for lysosomal storage disorders in India – a step towards advancing research and precision medicine (2026)",
      url: "https://link.springer.com/article/10.1186/s13023-026-04195-8",
    },
    {
      title:
        "PathQC: Determining Molecular and Structural Integrity of Tissues from Histopathological Slides (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12838397/#sec3-bioengineering-13-00005",
    },
    {
      title:
        "The role of biobanks in advancing the national biotechnology strategy in Saudi Arabia (2025)",
      url: "https://applications.emro.who.int/EMHJ/V31/11/1020-3397-2025-3111-649-656-eng.pdf",
    },
    {
      title:
        "Clinical genetic variation across Hispanic populations in the Mexican Biobank (2025)",
      url: "https://www.nature.com/articles/s41591-025-04100-z#Sec7",
    },
    {
      title:
        "Biobanking as a research accelerator: the perspectives of medical students and interns at a Saudi university (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12818786/",
    },
    {
      title: "Guangdong Biobank Cohort (GDBC) study (2025)",
      url: "https://link.springer.com/article/10.1007/s10654-025-01320-y",
    },
    {
      title:
        "Establishment and Operation of a New Style Clinical Biobank: The Tohoku University Clinical Biobank (2025)",
      url: "https://www.jstage.jst.go.jp/article/tjem/advpub/0/advpub_2025.J152/_pdf/-char/en",
    },
    {
      title:
        "Nephrotic syndrome genomic discovery in the Mass General Brigham Biobank identifies monoallelic MEFV variants as a risk factor for focal segmental glomerulosclerosis (2025)",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0085253825010233?via%3Dihub",
    },
    {
      title:
        "From –196°C to –80°C: redefining standards in sperm biobanking technology (2025)",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S1472648325003876?via%3Dihub",
    },
    {
      title:
        "Hormonal Contraceptive Use, Stress Disorders, and Cardiovascular and Thrombotic Risk in Women – via hospital-based biobank (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12761333/#H1-5-ZOI251383",
    },
    {
      title:
        "Longitudinal analysis of electronic health records reveals medical conditions associated with subsequent Alzheimer’s disease development (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12751976/#Sec22",
    },
    {
      title:
        "China precision nutrition biobank: protocol of a prospective cohort study on diet, human phenotype/genotype, and early-onset chronic diseases (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12751878/#Sec25",
    },
    {
      title:
        "Integrating Polygenic Scores and Family History for Type 2 Diabetes Prediction in an East Asian Population: Insights From the Taiwan Biobank (2025)",
      url: "https://diabetesjournals.org/diabetes/article-abstract/doi/10.2337/db25-0357/164189",
    },
    {
      title:
        "Attitudes of blood and plasma donors towards biobanking for longitudinal health research – very positive (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12714250/#sec018",
    },
    {
      title:
        "Biobank participants’ perspectives on receiving genetic risk information from a biobank – the case of haemochromatosis (2025)",
      url: "https://link.springer.com/article/10.1186/s12920-025-02285-3",
    },
    {
      title:
        "Decentralized Biobanking Pathway to Precision Medicine: Futures Study (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12670052/",
    },
    {
      title:
        "Pet owners’ perspectives on veterinary biobanking in Latvia: Awareness, motivations, ethical concerns, and willingness to participate (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12668729/",
    },
    {
      title:
        "Fecal sample biobanking for breast cancer research focused on the gut microbiome (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12636634/",
    },
    {
      title:
        "eConsent vs. Traditional Consent Among Prospective Biobank Participants: A Randomized Trial (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12636662/",
    },
    {
      title:
        "PERSIAN cohort biobank: creating a large-scale national resource for biomedical research in Iran (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12645788/",
    },
    {
      title:
        "Advancing Wildlife Conservation Through Biobanking in South America (2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12649330/",
    },
  ];

  export default function ArticleList() {
    return (
      <div className="article-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </div>
        ))}
      </div>
    );
  }