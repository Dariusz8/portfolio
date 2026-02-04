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
    {
        title:
          "Cancers Compared to Paired Formalin-Fixed Paraffin-Embedded Tissues (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12652624/#sec4-ijms-26-11038",
      },
      {
        title:
          "Establishment of Immune Biobank for Vaccine Immunogenicity Prediction Using In Vitro and In Silico Methods Against Porcine Reproductive and Respiratory Syndrome Virus (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12567839/",
      },
      {
        title:
          "Decentralized Biobanking to Empower Patient Engagement in Biospecimen Research: Operational Feasibility Case Study (2025)",
        url: "https://www.liebertpub.com/doi/10.1177/19475535251384429",
      },
      {
        title:
          "A Framework for Evaluation of New Processing Technologies in Human Milk Banking (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12508634/",
      },
      {
        title:
          "Advancing Ethical Biobanking Through Evolving International Codes: A Call to Action",
        url: "https://www.liebertpub.com/doi/10.1177/19475535251384652",
      },
      {
        title:
          "Development of a Big Data Platform for Collecting and Utilizing Clinical Information from the Korea Biobank Network (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12505599/#Sec12",
      },
      {
        title: "Culling Decision Tools for Biobankers (2025)",
        url: "https://www.liebertpub.com/doi/epub/10.1177/19475535251388770",
      },
      {
        title:
          "A Quantitative Tool for Culling Collections of Human Specimens: Proof of Concept (2025)",
        url: "https://www.liebertpub.com/doi/10.1177/19475535251362092",
      },
      {
        title:
          "Patient-Derived Organoid Biobanks for Translational Research and Precision Medicine: Challenges and Future Perspectives (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12387782/",
      },
      {
        title: "Biobank: What's in a Name? (2019)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7065495/",
      },
      {
        title:
          "Biobank and Data Silos into a Data Commons: Convergence to Support Translational Medicine (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8645144/",
      },
      {
        title:
          "LIMS Table – Biobank and Data Silos into a Data Commons (Figure 1)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8645144/figure/Fig1/",
      },
      {
        title: "An Introduction to Starting a Biobank (2020)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6777713/",
      },
      {
        title:
          "An Introduction to Hardware, Software, and Other Information Technology Needs of Biomedical Biobanks (2020)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6777721/",
      },
      {
        title:
          "An Approach to Evaluate the Costs and Outputs of Academic Biobanks (2024)",
        url: "https://www.liebertpub.com/doi/10.1089/bio.2023.0112",
      },
      {
        title:
          "Transformation of the Taiwan Biobank 3.0: Vertical and Horizontal Integration (2020)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7406956/",
      },
      {
        title:
          "Taiwan Biobank 3.0 Integration Framework – Benchmarking Against UK Biobank (Figure 3)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7406956/figure/Fig3/",
      },
      {
        title:
          "Aspects of Modern Biobank Activity: Comprehensive Review (2018)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6132819/",
      },{
        title:
          "Revolutionizing Cancer Research: The Impact of Artificial Intelligence in Digital Biobanking (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10532470/",
      },
      {
        title:
          "Standardizing Digital Biobanks: Integrating Imaging, Genomic, and Clinical Data for Precision Medicine (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845786/",
      },
      {
        title:
          "Biobanking in the Digital Pathology Era (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10207967/",
      },
      {
        title:
          "A Survey on the Role of Artificial Intelligence in Biobanking Studies: A Systematic Review (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9140088/#sec4-diagnostics-12-01179",
      },
      {
        title:
          "Pediatric Biobanks to Enhance Clinical and Translational Research for Children (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9871420/",
      },
      {
        title:
          "The Estonian Biobank’s Journey from Biobanking to Personalized Medicine (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11972354/",
      },            
  ];

  export default function BiobankingArticles() {
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