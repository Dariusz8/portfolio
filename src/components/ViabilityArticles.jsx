import React from "react";
import '../ArticleList.css';


const articles = [
    {
        title:
          "Photoprotective and Cryoprotective Effect of the Carotenoid Bacterioruberin on Peripheral Blood Mononuclear Cells (2026)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12847124/#Sec15",
      },
      {
        title:
          "Sample Stability of Forty-Two Analytes in Plasma or Serum Pools After One to Four Repeated −80 °C Freeze–Thaw Cycles (2025)",
        url: "https://www.tandfonline.com/doi/10.1080/00365513.2025.2605637",
      },
      {
        title:
          "Optimal Cell Concentration for Cryopreservation of Banked Human Adipose Tissue-Derived Stem Cells (2025)",
        url: "https://link.springer.com/article/10.1007/s10616-025-00877-6#Sec26",
      },
      {
        title:
          "Comparing the Activity of Peripheral Blood Mononuclear Cells Frozen Under Electromagnetic Field Freezing and Standard Slow-Freezing (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12631015/",
      },
      {
        title:
          "The Effects of Cryopreservation on PBMCs Transcriptome Profile (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12575299/",
      },
      {
        title:
          "Indicator Tubes: A Novel Solution for Monitoring Temperature Excursions in Biobank Storage (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566185/",
      },
      {
        title:
          "Short- and Medium-Term Pre-Analytical Stability of Human Serum Insulin-Like Growth Factor-1 (2025)",
        url: "https://www.degruyterbrill.com/document/doi/10.1515/cclm-2025-0868/html",
      },
      {
        title:
          "Quality Assessment from Biobank Plasma and Serum Specimens: A Systematic Review (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12514999/",
      },
      {
        title:
          "Stability of 17 Endocrine Analytes in Serum or Plasma After Four Cycles of Repeated Freezing and Thawing (2025)",
        url: "https://pubmed.ncbi.nlm.nih.gov/40243258/",
      },
      {
        title:
          "Reduce Energy Consumption in Your Laboratory: Switching Ultra-Low Temperature Freezers from −80 °C to −70 °C — A Pilot Study on Short-Term Storage of Plasma Samples for Coagulation Testing (2024)",
        url: "https://www.tandfonline.com/doi/full/10.1080/00365513.2024.2394981",
      },
      {
        title:
          "Preservation of Functionality, Immunophenotype, and Recovery of HIV RNA from PBMCs Cryopreserved for More Than 20 Years (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11361978/",
      },
      {
        title:
          "Cryopreservation of Tissues and Organs: Present, Bottlenecks, and Future (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10248239/",
      }, {
        title:
          "Chemical Approaches to Cryopreservation (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9294745/",
      },
      {
        title:
          "The Effect of Hydroxyethyl Starch as a Cryopreservation Agent During Freezing of Mouse Pancreatic Islets (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10867579/",
      },
      {
        title:
          "Optimization of Blood Handling and Peripheral Blood Mononuclear Cell Cryopreservation of Low Cell Number Samples (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8431655/",
      },
      {
        title:
          "Comparison of Whole Blood Cryopreservation Methods for Extensive Flow Cytometry Immunophenotyping (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9103885/",
      },
      {
        title:
          "Cryopreservation: An Overview of Principles and Cell-Specific Considerations (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7995302/",
      },{
        title:
          "Effects of Storage Time and Temperature on Highly Multiparametric Flow Analysis of Peripheral Blood Samples; Implications for Clinical Trial Samples (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7921292/",
      },
      {
        title:
          "Impacts of Cryopreservation on Phenotype and Functionality of Mononuclear Cells in Peripheral Blood and Ascites (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10956725/#j_jtim-2023-0136_s_008",
      },
      {
        title:
          "The Effect of Long-Term Cryopreservation on the Properties and Functionality of Platelet-Rich Plasma (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11766244/",
      },
      {
        title:
          "The Effect of Short-Term Cryopreservation on the Properties and Functionality of Platelet-Rich Plasma (2023)",
        url: "https://www.tandfonline.com/doi/10.1080/09537104.2023.2210243",
      },
      {
        title:
          "The Holding Temperature of Blood During a Delay to Processing Can Affect Serum and Plasma Protein Measurements (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7985364/",
      },
      {
        title:
          "The Effect of Four Different Freezing Conditions and Time in Frozen Storage on the Concentration of Commonly Measured Growth Factors and Enzymes in Equine Platelet-Rich Plasma Over Six Months (2019)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6694589/#Sec8",
      },
      {
        title:
          "Optimization of Human Peripheral Blood Mononuclear Cells (PBMCs) Cryopreservation (2012)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3920500/",
      },
      {
        title:
          "Isolation and Preservation of Peripheral Blood Mononuclear Cells for Analysis of Islet Antigen-Reactive T Cell Responses: Position Statement of the T-Cell Workshop Committee of the Immunology of Diabetes Society (2011)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3010910/#sec2",
      },{
        title:
          "Impact of Shipping Temperature on Cell Viability and T Cell Responses to Bacterial Antigens (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11187529/",
      },
      {
        title:
          "Shipping Blood to a Central Laboratory in Multicenter Clinical Trials: Effect of Ambient Temperature on Specimen Temperature, and Effects of Temperature on Mononuclear Cell Yield, Viability and Immunologic Function (2011)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3063218/#sec6",
      },
      {
        title:
          "Impact of Different Red Blood Cell Storage Solutions and Conditions on Cell Function and Viability: A Systematic Review (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11274915/",
      },
      {
        title:
          "Long-Term Stability of Biochemical Markers in Pediatric Serum Specimens Stored at −80 °C: A CALIPER Substudy (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/23118329/",
      },
      {
        title:
          "Cryopreservation of Human Cerebral Microvascular Endothelial Cells and Astrocytes in Suspension and Monolayers (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8046249/#sec024",
      },
      {
        title:
          "Optimization of Storage and Shipment of Cryopreserved Peripheral Blood Mononuclear Cells from HIV-Infected and Uninfected Individuals for ELISPOT Assays (2021)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3068047/",
      },
      {
        title:
          "Recent Advances in Antifreeze Peptide Preparation: A Review (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11510398/",
      },
      {
        title:
          "Antifreeze Proteins: Novel Applications and Navigation Towards Their Clinical Application in Cryobanking (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8910022/",
      },
      {
        title:
          "Natural Cryoprotective and Cytoprotective Agents in Cryopreservation: A Focus on Melatonin (2022)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9145333/",
      },
      {
        title:
          "Technical Pitfalls When Collecting, Cryopreserving, Thawing, and Stimulating Human T Cells (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11133553/#s3",
      },
      {
        title:
          "Save It—Don’t Waste It! Maximizing Utilization of Erythrocytes from Previously Stored Whole Blood (2020)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7541437/",
      },
      {
        title:
          "Cryopreservation of Equine Spermatozoa Reduces Plasma Membrane Integrity and Phospholipase C Zeta 1 Content as Associated with Oocyte Activation (2024)",
        url: "https://onlinelibrary.wiley.com/doi/10.1111/andr.13517",
      },
      {
        title:
          "Short-Term Cryoprotectant-Free Cryopreservation at −20 °C Does Not Affect the Viability and Regenerative Capacity of Nanofat (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11246958/",
      },
      {
        title:
          "Cryopreserved Platelets in a Non-Toxic DMSO-Free Solution Maintain Hemostatic Function In Vitro (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10488190/",
      },
      {
        title:
          "Comparative Proteome Analysis of Cryopreserved Flagella and Head Plasma Membrane Proteins from Sea Bream Spermatozoa: Effect of Antifreeze Protein (2014)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24941006/",
      },                       
  ];

  export default function ViabilityArticles() {
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