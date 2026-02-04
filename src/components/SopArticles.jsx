import React from "react";
import '../ArticleList.css';


const articles = [
    {
        title:
          "Extracellular Vesicular Proteins in Plasma from Patients with Cutaneous Lupus Correlate with Disease Activity (2025)",
        url: "https://www.mdpi.com/1467-3045/48/1/13",
      },
      {
        title:
          "Proteome-Wide Serological Profiling Reveals Broad Elevation of EBV Immunity in Idiopathic Pulmonary Fibrosis (2026)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12841087/#sec5-ijms-27-00783",
      },
      {
        title:
          "Plasma but Not Salivary p-Tau181 Reflects Alzheimer’s Disease in a Latin American Cohort (2025)",
        url: "https://www.jns-journal.com/article/S0022-510X(26)00043-2/fulltext",
      },
      {
        title:
          "Systematic Evaluation of Pre-Analytical Variables on Synovial Fluid Metabolomic Profiles Using GC-ToF-MS and UHPLC-MS (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12822660/",
      },
      {
        title:
          "Comparative Analysis of Extracellular Vesicle Isolation From Equine Serum and Plasma Using Two Isolation Methods With Structural and Proteomic Validation (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12813514/",
      },
      {
        title:
          "Plasma Proteomic Profiling Identifies a Six-Protein Panel for Grading and Predicting Intervertebral Disc Degeneration (2025)",
        url: "https://pubs.acs.org/doi/10.1021/acs.jproteome.5c00754",
      },
      {
        title:
          "Establishing the Plasma Proteomic Baseline of Crotalus durissus terrificus for Health Monitoring (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S0003269726000072",
      },
      {
        title:
          "Automated Mag-Net Enrichment Unlocks Deep and Cost-Effective LC–MS Plasma Proteomics (2025)",
        url: "https://pubs.acs.org/doi/10.1021/acs.jproteome.5c00420",
      },
      {
        title:
          "Blood Biomarkers of Seizures in Epilepsy: Machine Learning Reveals Altered Plasma Proteome (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12716561/#abstract1",
      },
      {
        title:
          "Phosphopeptidome Profiling of Human Plasma for Hepatocellular Carcinoma Biomarker Discovery (2025)",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/ajh.70182",
      },
      {
        title:
          "Impact of Pneumatic Tube System Transport and Blood Collection Tubes on Cell-Free DNA Analysis of Plasma Samples (2025)",
        url: "https://www.degruyterbrill.com/document/doi/10.1515/cclm-2025-0367/html",
      },
      {
        title:
          "Improved Preanalytical Workflow for Pancreatic Tissue Lipidomics: Insights into Lipid Stability and Polar Lipid Recovery (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S0022227525002317",
      },
      {
        title:
          "Plasma Protein Profiling Predicts Cancer in Patients with Non-Specific Symptoms (2025)",
        url: "https://www.nature.com/articles/s41467-025-67688-3#Sec7",
      },
      {
        title:
          "Integrating Extracellular Vesicles Proteomics and Clinical Parameters to Develop a High-Precision Predictive Model for Severe Asthma (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12743466/#s0004",
      },
      {
        title:
          "Plasma Proteome-Driven Liquid Biopsy for Individualized Monitoring and Risk Stratification of Immune-Related Adverse Events in Checkpoint Immunotherapy (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S1535947625005870",
      },{
        title:
          "Plasma Proteomics Identifies Potential Pancreatic Cancer Risk Indicators in Type 2 Diabetes (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12713688/#sec1",
      },
      {
        title:
          "Unexpected Abnormal Flotation of Gel Separator in Tube of Post Dialysis Samples: A Case Report Highlighting the Critical Role of Sampling Site Selection (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12701653/",
      },
      {
        title:
          "Blood Matrices and Sample Preparation Influence Blood Marker Discovery (2025)",
        url: "https://pubs.acs.org/doi/10.1021/acs.jproteome.5c00836",
      },
      {
        title:
          "Effect of Blood Acidification on Hemolysis-Induced Insulin Degradation (2025)",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0009898125006527?via%3Dihub",
      },
      {
        title:
          "Deep Data-Independent Acquisition-Based Plasma Proteomic Profiling Unveils Distinct Molecular Features in Dengue Fever with Neutropenia (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S1995820X25001725?via%3Dihub#sec5",
      },
      {
        title:
          "Isolation and Characterization of Extracellular Vesicles Derived from Mango Fruits (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12691788/#sec4-ijms-26-11375",
      },
      {
        title:
          "Proteomic Exploration of L1CAM+-Extracellular Vesicles from Plasma of Manifest and Prodromal Parkinson’s Disease (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12692637/#sec4-ijms-26-11564",
      },
      {
        title:
          "Evaluation of Nanoparticle-Based Plasma Enrichment on Individuals with Primary and Metastatic Pancreatic Cancer (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12691180/",
      },
      {
        title:
          "Plasma Proteomic Characterization of Adolescent Idiopathic Scoliosis (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S1535947625005857?via%3Dihub#sec2",
      },
      {
        title:
          "Pharmacokinetics of Mycophenolic Acid in Plasma and Peripheral Blood Mononuclear Cells and Its Relationship with Activity of Inosine Monophosphate Dehydrogenase in Chinese Adult Kidney Allograft Recipients (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12673270/#s2",
      },
      {
        title:
          "Systematic Evaluation of Blood Contamination in Nanoparticle-Based Plasma Proteomics (2025)",
        url: "https://link.springer.com/article/10.1038/s44321-025-00346-9#Sec18",
      },{
        title:
          "Frequencies and Causes of Pre-Analytical Errors in a Tertiary Care Hospital Laboratory in Saudi Arabia (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12640526/#sec18",
      },
      {
        title:
          "Decoding the Human PBMC Isonome: Isoform-Level Resolution with Single-Cell Long-Read Transcriptomics (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12632934/#S9",
      },
      {
        title:
          "Plasma vs. Serum: Which is Better for Proteomic Blood Biomarker Analysis? Evaluation of the Novel NULISA Platform (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12637731/",
      },
      {
        title:
          "Low-Abundance Proteomics Reveal Pleiotrophin and Fibroblast Growth Factor-21 as Biomarkers of Metabolic Dysfunction-Associated Steatohepatitis (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12652421/#sec4-ijms-26-10943",
      },
      {
        title:
          "Plasma Profiles of Neurology-Related Proteins in At-Risk Mental State and First-Episode Psychosis: Associations with Psychotic Symptoms and Cognitive Performance (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12648619/#sec2",
      },
      {
        title:
          "Several Proteins Derived from Serum Exosomes Are Potential Biomarkers for Diagnosis and Progression of Sudden Sensorineural Hearing Loss (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12647029/",
      },
      {
        title:
          "Plasma Extracellular Vesicles Contain Protein Biomarkers for Capturing Stages of Metabolic Dysfunction-Associated Steatotic Liver Disease: A Preliminary Exploratory Study (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12650337/#abstract1",
      },
      {
        title:
          "Exosome-Based Proteomic Profiling for Biomarker Discovery in Pediatric Fabry Disease: Insights into Early Diagnosis Monitoring (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12650516/",
      },
      {
        title:
          "Unveiling Proteomic and Peptide-Level Modifications in Cerebrospinal Fluid and Plasma in Normal Cognitive Aging (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12627660/#Sec2",
      },
      {
        title:
          "EDTA-K Tube Containing 9 mL of Full Blood Was Centrifuged Immediately at 4 °C and 4400 rpm/3000 g for 5 min (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625303/#Sec18",
      },
      {
        title:
          "Extracellular Vesicle Proteomics Identifies Novel Blood Biomarkers for the Early Diagnosis of Status Epilepticus (2025)",
        url: "https://onlinelibrary.wiley.com/doi/10.1111/epi.70008",
      },
      {
        title:
          "Effect of Blood Collection Tube Containing Protease Inhibitors on the Pre-Analytical Stability of Alzheimer’s Disease Plasma Biomarkers (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11449657/#S2",
      },{
        title:
          "Plasma Fractionation and Mixture Improves Coverage in Proteomic Analysis (2025)",
        url: "https://pubs.acs.org/doi/10.1021/acs.jproteome.5c00814",
      },
      {
        title:
          "Single-Cell Atlas of Peripheral Blood Mononuclear Cells in Pregnant Women with Hyperemesis Gravidarum (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12602167/",
      },
      {
        title:
          "Mapping the Stage-Specific Plasma p53 Interactome Reveals Colorectal Cancer Progression Signatures and Therapeutic Vulnerabilities (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12606009/",
      },
      {
        title:
          "Sex- and Strain-Differential Plasma Proteomic Signatures in C57BL/6 and BALB/c Mice (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12618639/",
      },
      {
        title:
          "Plasma Proteomics Uncovers Divergent Molecular Signatures in Ischemic Stroke and Intracerebral Hemorrhage (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12570678/#Sec2",
      },
      {
        title:
          "Biobanco (Brazil) SOP: Plasma Centrifugation at 800g for 10 Minutes at Room Temperature (2025)",
        url: "https://biobanco.pt/pdf/SOP_biobanco_en_v1.pdf",
      },
      {
        title:
          "Proteomic Polygenic Risk Scores of Age-Related Plasma Protein Levels Reveal a Role for Metalloproteinase Inhibitor 2 (TIMP2) in Cognitive Performance (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S0197458025001848#sec0010",
      },
      {
        title:
          "Accessing the Proteome of Extracellular Vesicles via Rapid Acoustic Isolation of a Minute Human Blood Plasma Sample (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S0003267025010554#sec4",
      },
      {
        title:
          "Investigating Apoptosis in Peripheral Blood Mononuclear Cells Among the Elderly in the Post-COVID-19 Era (2025)",
        url: "https://bmcimmunol.biomedcentral.com/articles/10.1186/s12865-025-00769-6#Sec2",
      },
      {
        title:
          "Identification of Plasma Extracellular Vesicle Protein Biomarkers in Diabetic Retinopathy Progression (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12511336/#Sec21",
      },
      {
        title:
          "Proteomic Insights into Platelet Dysregulation and Pathogenic Mechanisms of Chronic Thromboembolic Pulmonary Hypertension (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12512361/",
      },
      {
        title:
          "Identification of Plasma Free Fatty Acid Carrier Proteins in Mice (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12175214/",
      },{
        title:
          "Association Between Pro-Inflammatory Proteins and Neurofilament in Plasma from Persons with Epilepsy (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12519617/#Sec2",
      },
      {
        title:
          "Plasma Circulating Extracellular Vesicles Reveal Dysregulation of Synaptic Signaling in SHIV-Infected Rhesus Macaque (2025)",
        url: "https://biosignaling.biomedcentral.com/articles/10.1186/s12964-025-02464-w#Sec22",
      },
      {
        title:
          "Proteomic and Histopathologic Profiling Reveal Molecular Features and Clinical Biomarkers of Coronary Atherosclerosis (2025)",
        url: "N/A",
      },
      {
        title:
          "Comparative Evaluation of Centrifugation Speed and Its Impact on Diagnostic Accuracy (2025)",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/jcla.70120",
      },
      {
        title:
          "The Preanalytical Process Matters: Impact of Blood Collection Tubes on the Measurement of Vitamin D Using LC-MS/MS (2025)",
        url: "https://academic.oup.com/jalm/advance-article/doi/10.1093/jalm/jfaf141/8276847?login=false#535169873",
      },
      {
        title:
          "Plasma Proteome Adaptations During Feminizing Gender-Affirming Hormone Therapy (2025)",
        url: "https://www.nature.com/articles/s41591-025-04023-9#Sec9",
      },
      {
        title:
          "Current Landscape of Plasma Proteomics from Technical Innovations to Biological Insights and Biomarker Discovery (2025)",
        url: "file:///C:/Users/czda6000/Downloads/s42004-025-01665-1.pdf",
      },
      {
        title:
          "A Standardized Framework for Circulating Blood Proteomics (2025)",
        url: "https://www.nature.com/articles/s41588-025-02319-7",
      },
      {
        title:
          "A Simplified Perchloric Acid Workflow with Neutralization (PCA-N) for Democratizing Deep Plasma Proteomics at Population Scale (2025)",
        url: "file:///C:/Users/czda6000/Downloads/2025.03.24.645089v1.full.pdf",
      },
      {
        title:
          "Mining the Plasma Proteome: Evaluation of Enrichment Methods for Depth and Reproducibility (2025)",
        url: "https://www.sciencedirect.com/science/article/pii/S1874391925001460?ref=pdf_download&fr=RR-2&rr=9812331ddfd3a272",
      },
      {
        title:
          "Enrichment of Extracellular Vesicles Using Mag-Net for the Analysis of the Plasma Proteome (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12219689/",
      },{
        title:
          "Pre-Analytical Drivers of Bias in Bead-Enriched Plasma Proteomics (2025)",
        url: "https://www.biorxiv.org/content/10.1101/2025.05.07.652495v1.full.pdf",
      },
      {
        title:
          "Recommendations for Sample Selection, Collection and Preparation for NMR-Based Metabolomics Studies of Blood (2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12065766/",
      },
      {
        title:
          "Pre-Analytical Sample Handling Standardization for Reliable Measurement of Metabolites and Lipids in LC-MS-Based Clinical Research (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9975683/",
      }, {
        title: "Effects of time-of-day on the noradrenaline, adrenaline, cortisol and blood lipidome response to an ice bath – 2025",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11711488/"
      },
      {
        title: "Plasma Proteome Profiling to detect and avoid sample‐related biases in biomarker studies – 2019",
        url: "https://www.embopress.org/doi/full/10.15252/emmm.201910427#sec-4"
      },
      {
        title: "From bedside to bench—practical considerations to avoid pre-analytical pitfalls and assess sample quality for high-resolution metabolomics and lipidomics analyses of body fluids – 2021",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8410705/#Sec3"
      }, {
        title: "Plasma metabolite profile of legume consumption and future risk of type 2 diabetes and cardiovascular disease – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10800064/"
      },
      {
        title: "Plasma metabolite profiles associated with the World Cancer Research Fund/American Institute for Cancer Research lifestyle score and future risk of cardiovascular disease and type 2 diabetes – 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10505328/"
      },
      {
        title: "Olive oil consumption, plasma metabolites, and risk of type 2 diabetes and cardiovascular disease – 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10720204/"
      },
      {
        title: "Mitochondrial respiratory analysis of cryopreserved PBMCs isolated from human blood – 2025",
        url: "https://www.sciencedirect.com/science/article/pii/S0011224025000185?via%3Dihub"
      },
      {
        title: "Cell-Free DNA Blood Collection Tubes Crosslinking Cellular DNA Impeding Nanopore Long-Read Sequencing – 2025",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12051449/"
      },
      {
        title: "CryoSCAPE: Scalable immune profiling using cryopreserved whole blood for multi-omic single cell and functional assays – 2025",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11697465/"
      },
      {
        title: "Effect of delayed isolation of peripheral blood mononuclear cells on cell viability and functionality – 2025",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11909936/"
      },
      {
        title: "Cryopreserved PBMCs can be used for the analysis of mitochondrial respiration and serve as a diagnostic tool for mitochondrial diseases – 2025",
        url: "https://www.sciencedirect.com/science/article/pii/S0003269724002896?via%3Dihub"
      },
      {
        title: "Impact on in-depth immunophenotyping of delay to peripheral blood processing – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11239563/"
      },
      {
        title: "Improving Reliability of Immunological Assays by Defining Minimal Criteria for Cell Fitness – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11447670/"
      },
      {
        title: "Impact of delayed PBMC processing on functional and genomic assays – 2023",
        url: "https://www.sciencedirect.com/science/article/pii/S0022175923000960?via%3Dihub"
      },
      {
        title: "A protocol for acquiring high-quality single-cell multi-omics data from human peripheral blood – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11567067/"
      },
      {
        title: "Fresh versus frozen PMBC using the SARS CoV-2 T-SPOT.COVID test. Which works best? – 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35533746/"
      },
      {
        title: "Isolation and freezing of human peripheral blood mononuclear cells from pregnant patients – 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8888982/"
      },
      {
        title: "Effect of wash media type during PBMC isolation on downstream characterization of SARS-CoV-2-specific T cells – 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10306416/"
      },
      {
        title: "Endogenous plasma resuspension of peripheral blood mononuclear cells prevents preparative-associated stress that modifies polyA-enriched RNA responses to subsequent acute stressors – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11613960/#sec12"
      },
      {
        title: "Mass Spectrometric Detection of Formaldehyde-Crosslinked PBMC Proteins in Cell-Free DNA Blood Collection Tubes – 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10708122/"
      },
      {
        title: "Evaluation of Methods to Obtain Peripheral Blood Mononuclear Cells From Deceased Donors for Tolerance-Induction Protocols – 2024",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11143843/"
      },
      {
        title: "Cellular Stress Assay in Peripheral Blood Mononuclear Cells: Factors Influencing Its Results – 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9658277/#sec3-ijms-23-13118"
      },
      {
        title: "Biobank for Translational Medicine: Standard Operating Procedures for Optimal Sample Management – 2022",
        url: "https://app.jove.com/t/63950/biobank-for-translational-medicine-standard-operating-procedures-for"
      },
      {
        title: "Standard operating procedures for biobank in oncology – 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9459387/"
      },
      {
        title: "Standard operating procedures for biobank in oncology – 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11467654/"
      },
      {
        title: "Differences in metabolite profiles caused by pre-analytical blood processing procedures – 2018",
        url: "https://pubmed.ncbi.nlm.nih.gov/29258730/"
      }                                    
  ];

  export default function SopArticles() {
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