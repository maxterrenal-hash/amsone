// adult_monographs.js
// Full adult antimicrobial monographs for Ospital ng Makati AMS app.
// IMPORTANT: Verify all data against Sanford Guide / PSMID / local OsMak AMS before clinical use.

const ADULT_MONOGRAPHS = {

  // ======================================
  //            RESTRICTED ADULT
  // ======================================

"Acyclovir IV": {
  restricted: true,
  spectrum: "Active vs HSV-1, HSV-2, and VZV; no activity vs CMV.",
  dosing: "5–12.5 mg/kg IV q8h (normal renal function). Serious HSV/VZV CNS infections typically 10–12.5 mg/kg q8h. Dose uses actual body weight unless obese—then see obesity dosing adjustments.",
  renal: "CrCl >50: no change. CrCl 10–50: 5–12.5 mg/kg IV q12–24h. CrCl <10: 2.5–6.25 mg/kg IV q24h. Hemodialysis/CAPD/CRRT: 2.5–6.25 mg/kg IV q24h (dose after dialysis for HD). Rapid infusion increases risk of nephrotoxicity due to crystalluria.",
  hepatic: "No required dose adjustment in mild to severe hepatic impairment (Child-Pugh A–C); data limited.",
  duration: "Varies by syndrome: serious HSV/VZV/CNS disease usually 10–14 days; encephalitis may require extended courses per clinical guidance.",
  monitoring: "Renal function (SCr trends), hydration status, neurotoxicity (confusion, hallucinations, delirium, seizures), urine output. Watch for phlebitis and renal crystallization.",
  warnings: "Risk of obstructive uropathy from crystal precipitation—avoid rapid infusion and dehydration. Neurotoxicity more common with renal impairment. IV infiltration causes local tissue injury.",
  ams: "Restricted. Use for severe HSV/VZV disease (e.g., encephalitis, disseminated disease, immunocompromised hosts). Transition to oral therapy or de-escalate when diagnosis is excluded or patient improves.",
  weightBased: true
},

  "Amikacin": {
    restricted: true,
    spectrum: "Aminoglycoside: strong Gram-negative activity including Pseudomonas; synergistic for some Gram-positive.",
    dosing: "15–20 mg/kg IV once daily (extended interval) OR 7.5 mg/kg q12h depending on institution.",
    renal: "Adjust based on CrCl and drug levels; nephro-/ototoxic.",
    hepatic: "No major adjustment.",
    duration: "Usually 5–7 days; avoid prolonged monotherapy.",
    monitoring: "Drug levels (peak/trough or AUC), renal function, audiology for prolonged therapy.",
    warnings: "Nephrotoxicity and ototoxicity; avoid with other nephrotoxins.",
    ams: "Restricted; use for serious Gram-negative infections; de-escalate promptly.",
    weightBased: true
  },

"Amikacin": {
  restricted: true,
  spectrum: "Aminoglycoside with potent Gram-negative activity; covers Enterobacterales and some non-fermenters but no longer recommended for non-urinary Pseudomonas. Active against susceptible mycobacteria (NTM).",
  dosing: "Extended-interval: 15–20 mg/kg IV q24h for typical Gram-negative infections. Conventional: 7.5 mg/kg IV q12h. For NTM: 10–15 mg/kg IV/IM q24h (or 15–25 mg/kg 3× weekly depending on regimen).",
  renal: "CrCl >50: usual dosing. CrCl 10–50: 7.5 mg/kg IV q24h (conventional). CrCl <10: 7.5 mg/kg IV q48h. ESRD: q48h with supplemental dose on dialysis days. For CRRT: extended-interval 25 mg/kg q48h. Requires TDM for peaks/troughs or AUC guidance.",
  hepatic: "No dosage adjustment required across Child-Pugh A–C; hepatically safe.",
  duration: "Typically 5–7 days for Gram-negative infections; avoid prolonged monotherapy. Duration for NTM depends on regimen and species.",
  monitoring: "Serum drug levels (peak/trough or AUC), renal function, urine output, vestibular/cochlear function. Closely monitor for nephrotoxicity and ototoxicity. Watch for neuromuscular blockade in susceptible patients.",
  warnings: "High risk of nephrotoxicity and ototoxicity. Avoid with other nephrotoxic/ototoxic agents (e.g., amphotericin B, cisplatin, vancomycin, colistin). Possible neuromuscular blockade. Liposome inhalation form carries pulmonary toxicity risks but not relevant to IV form.",
  ams: "Restricted; reserve for serious Gram-negative infections or as part of NTM regimens. De-escalate as soon as cultures allow.",
  weightBased: true
},

"Aztreonam": {
  restricted: true,
  spectrum: "Active vs Enterobacterales, Pseudomonas aeruginosa, and other Gram-negative aerobes; no activity vs Gram-positive organisms or anaerobes.",
  dosing: "Usual adult: 2 g IV q6–8h (infused over 30 min). For resistant G-negatives per AMR guidance: 3-hour infusions may be preferred. Max 8 g/day.",
  renal: "CrCl ≥30: no adjustment. CrCl 10–<30: reduce dose by 50%. CrCl <10: 1–2 g IV q24h. Hemodialysis: 1–2 g q24h (give dose after dialysis). CRRT: 1–2 g q12h depending on modality.",
  hepatic: "No dosage adjustment required across Child-Pugh A–C.",
  duration: "Varies by infection but typically 7–14 days for Gram-negative disease.",
  monitoring: "Renal function, hypersensitivity reactions, CBC (risk of neutropenia, eosinophilia, thrombocytopenia), LFTs, and CNS effects in high doses or renal impairment.",
  warnings: "Cross-reactivity is rare but possible with ceftazidime or cefiderocol due to identical R-1 side chain. Beware of seizures in renal impairment. GI toxicity and C. difficile possible.",
  ams: "Restricted; preferred for Gram-negative coverage in patients with severe β-lactam allergy, except when ceftazidime side-chain allergy is present.",
  weightBased: false
},

"Cefepime": {
  restricted: true,
  spectrum: "Fourth-generation cephalosporin active vs MSSA, H. influenzae, Neisseria spp., and broad Gram-negative bacilli including Pseudomonas aeruginosa.",
  dosing: "Usual: 1–2 g IV q8–12h. Severe infections/PSA: 2 g IV q8h. High-dose regimens needed for ESBL-producing GNB, but carbapenems remain preferred.",
  renal: "Adjust when CrCl ≤60 mL/min. 30–60: 2 g q12h; 11–29: 2 g q24h; <10: 1 g q24h. Neurotoxicity risk increases with renal impairment.",
  hepatic: "No dosage adjustment required across Child-Pugh A–C.",
  duration: "Typically 7–14 days depending on infection.",
  monitoring: "Renal function; mental status for neurotoxicity (confusion, myoclonus, seizures, NCSE).",
  warnings: "Neurotoxicity risk—especially if renally impaired or underdosed adjustments. Can cause C. difficile, positive Coombs, cytopenias.",
  ams: "Restricted for Pseudomonas, severe GNB infections, or when broad Gram-negative coverage is needed.",
  weightBased: false
},

"Ceftazidime–Avibactam (NF)": {
  restricted: true,
  spectrum: "Active vs ESBL, AmpC, and KPC-producing Enterobacterales; active vs many MDR GNB including Pseudomonas. Not active vs metallo-β-lactamases or organisms with efflux/porin resistance.",
  dosing: "2.5 g IV q8h infused over 2 hours. Consider 3-hour infusions for AMR targets.",
  renal: "Adjust if CrCl ≤50 mL/min: 31–50: 1.25 g q8h; 16–30: 0.94 g q12h; 6–15: 0.94 g q24h; ≤5: 0.94 g q48h. For CVVH: 1.25 g q8h; CVVHDF: 2.5 g q8h.",
  hepatic: "No dosage adjustment across Child-Pugh A–C.",
  duration: "Typical 7–14 days for cUTI, cIAI (with metronidazole), and HAP/VAP; may extend for MDR/CRE infections.",
  monitoring: "Renal function; monitor for neurotoxicity (ceftazidime component).",
  warnings: "Cross-reactivity possible with ceftazidime, aztreonam, and cefiderocol (shared R1 side chain). Reserve use for KPC/ESBL/MDR GNB; not effective vs MBL producers.",
  ams: "Restricted; use only for documented or strongly suspected CRE (KPC+), ESBL, AmpC, or MDR Pseudomonas.",
  weightBased: false
},

  "Ceftolozane–Tazobactam (NF)": {
    restricted: true,
    spectrum: "Highly active vs MDR Pseudomonas; good Gram-negative including ESBL; limited Gram-positive.",
    dosing: "1.5 g IV q8h; 3 g q8h for pneumonia.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function.",
    warnings: "High cost; use for documented/suspected MDR PSA.",
    ams: "Restricted for MDR PSA.",
    weightBased: false
  },

  "Colistin": {
    restricted: true,
    spectrum: "MDR Gram-negatives: Acinetobacter, PSA, CRE (variable).",
    dosing: "Refer to institutional colistin-base-activity protocol.",
    renal: "High nephrotoxicity; adjust dosing.",
    hepatic: "Minimal adjustment.",
    duration: "Use shortest possible; 7–14+ days.",
    monitoring: "Renal function, neurotoxicity.",
    warnings: "Nephrotoxic, neurotoxic; combination therapy often preferred.",
    ams: "Restricted to MDR GNB only.",
    weightBased: false
  },

  "Doripenem": {
    restricted: true,
    spectrum: "Broad carbapenem including PSA, GNB, GP, anaerobes.",
    dosing: "500 mg IV q8h (1–4 hr infusion).",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "No major adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function; seizure risk.",
    warnings: "Avoid in pneumonia due to worse outcomes vs comparators.",
    ams: "Restricted carbapenem; use only when needed.",
    weightBased: false
  },

  "Ertapenem": {
    restricted: true,
    spectrum: "ESBL GNB, anaerobes; NO Pseudomonas or Acinetobacter.",
    dosing: "1 g IV/IM q24h.",
    renal: "Adjust if CrCl <30 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function.",
    warnings: "Do NOT use for PSA infections.",
    ams: "Restricted for ESBL infections without PSA risk.",
    weightBased: false
  },

  "Ganciclovir": {
    restricted: true,
    spectrum: "CMV, HSV, VZV.",
    dosing: "5 mg/kg IV q12h induction; then 5 mg/kg/day maintenance.",
    renal: "Strong renal adjustment needed.",
    hepatic: "Monitor LFTs.",
    duration: "Weeks to months.",
    monitoring: "CBC (neutropenia), renal, LFTs.",
    warnings: "Major bone marrow suppression.",
    ams: "Restricted to CMV treatment/prophylaxis.",
    weightBased: true
  },

  "Gentamicin": {
    restricted: true,
    spectrum: "Gram-negatives; synergy for GP.",
    dosing: "5–7 mg/kg/day IV once daily (preferred).",
    renal: "Adjust interval/dose; monitor levels.",
    hepatic: "Minimal adjustment.",
    duration: "5–7 days typically.",
    monitoring: "Drug levels, renal, auditory.",
    warnings: "Ototoxicity and nephrotoxicity.",
    ams: "Restricted; use only for specific GNB or synergy.",
    weightBased: true
  },

  "Imipenem": {
    restricted: true,
    spectrum: "Very broad: GNB, GP, anaerobes; PSA; ESBL.",
    dosing: "500 mg IV q6h OR 1 g IV q8h depending on severity.",
    renal: "Adjust if CrCl <70 mL/min; seizure risk increases.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal, mental status.",
    warnings: "Highest seizure risk among carbapenems.",
    ams: "Restricted.",
    weightBased: false
  },

  "Linezolid": {
    restricted: true,
    spectrum: "MRSA, VRE, resistant GP.",
    dosing: "600 mg IV/PO q12h.",
    renal: "No adjustment.",
    hepatic: "No adjustment; caution in severe liver disease.",
    duration: "Typically ≤14 days to avoid toxicity.",
    monitoring: "CBC weekly (thrombocytopenia), optic neuropathy with long use.",
    warnings: "SSRI interaction (serotonin syndrome).",
    ams: "Restricted for MRSA/VRE only.",
    weightBased: false
  },

  "Meropenem": {
    restricted: true,
    spectrum: "Very broad: ESBL, PSA, anaerobes.",
    dosing: "1 g IV q8h or 2 g q8h for CNS infections (extended infusion preferred).",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal, mental status.",
    warnings: "Seizures possible.",
    ams: "Restricted carbapenem.",
    weightBased: false
  },

  "Micafungin": {
    restricted: true,
    spectrum: "Candida spp., some Aspergillus activity.",
    dosing: "100 mg IV daily (up to 150 mg for esophageal candidiasis).",
    renal: "No adjustment.",
    hepatic: "Monitor LFTs.",
    duration: "≥14 days for candidemia after clearance.",
    monitoring: "LFTs.",
    warnings: "Hepatotoxicity.",
    ams: "Reserved for invasive candidiasis or mold infections.",
    weightBased: false
  },

  "Polymyxin B": {
    restricted: true,
    spectrum: "MDR GNB including PSA, A. baumannii.",
    dosing: "1.25–1.5 mg/kg/day divided (follow institutional protocol).",
    renal: "Less renally cleared than colistin; still monitor Cr.",
    hepatic: "Minimal adjustment.",
    duration: "7–14+ days.",
    monitoring: "Renal, neurotoxicity.",
    warnings: "Neurotoxicity; avoid unnecessary use.",
    ams: "Restricted.",
    weightBased: true
  },

  "Remdesivir": {
    restricted: true,
    spectrum: "SARS-CoV-2.",
    dosing: "200 mg IV once, then 100 mg IV daily x 4+ days.",
    renal: "Avoid if eGFR <30 mL/min due to SBECD carrier.",
    hepatic: "Avoid if ALT very high.",
    duration: "3–10 days.",
    monitoring: "LFTs.",
    warnings: "Transaminitis.",
    ams: "Restricted to COVID-19 protocols.",
    weightBased: false
  },

  "Tigecycline": {
    restricted: true,
    spectrum: "Broad: MRSA, VRE, anaerobes, ESBL; NOT PSA.",
    dosing: "100 mg IV loading, then 50 mg IV q12h.",
    renal: "No adjustment.",
    hepatic: "Reduce maintenance dose in Child-Pugh C.",
    duration: "7–14 days.",
    monitoring: "LFTs, nausea/vomiting.",
    warnings: "Higher mortality in some trials.",
    ams: "Restricted salvage therapy.",
    weightBased: false
  },

  "Valganciclovir oral": {
    restricted: true,
    spectrum: "CMV.",
    dosing: "900 mg PO q12h induction; 900 mg daily maintenance (adjust by CrCl).",
    renal: "Strong renal adjustment required.",
    hepatic: "Monitor LFTs.",
    duration: "Weeks to months.",
    monitoring: "CBC, renal.",
    warnings: "Severe neutropenia.",
    ams: "Restricted for CMV.",
    weightBased: false
  },

  "Vancomycin": {
    restricted: true,
    spectrum: "MRSA, resistant GP.",
    dosing: "15–20 mg/kg IV q8–12h; AUC-guided dosing preferred.",
    renal: "Adjust by CrCl and AUC levels.",
    hepatic: "No major adjustment.",
    duration: "Varies.",
    monitoring: "AUC/troughs, renal function.",
    warnings: "Red-man syndrome; nephrotoxicity.",
    ams: "Restricted for MRSA/resistant GP only.",
    weightBased: true
  },

  "Voriconazole": {
    restricted: true,
    spectrum: "Aspergillus and other molds.",
    dosing: "6 mg/kg IV q12h x 2 doses, then 4 mg/kg q12h (or 200–300 mg PO q12h).",
    renal: "Avoid IV if CrCl <50 mL/min (SBECD carrier).",
    hepatic: "Reduce maintenance dose in Child-Pugh A/B.",
    duration: "Weeks to months.",
    monitoring: "Drug levels, LFTs, vision changes.",
    warnings: "Photosensitivity, hepatotoxicity.",
    ams: "Restricted mold-active azole.",
    weightBased: true
  },

  // ======================================
  //            MONITORED ADULT
  // ======================================

  "Ceftriaxone": {
    restricted: false,
    spectrum: "Broad Gram-negative, some Gram-positive; no PSA.",
    dosing: "1–2 g IV q24h (up to 4 g/day for severe disease).",
    renal: "No major adjustment unless combined hepatic + renal failure.",
    hepatic: "Caution: biliary sludging.",
    duration: "5–10 days typical.",
    monitoring: "LFTs.",
    warnings: "Avoid in neonates.",
    ams: "Monitored due to high overuse.",
    weightBased: false
  },

  "Ceftazidime": {
    restricted: false,
    spectrum: "Gram-negative including PSA; weaker GP.",
    dosing: "2 g IV q8h.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal.",
    duration: "7–14 days.",
    monitoring: "Renal, CNS toxicity.",
    warnings: "Resistance emergence common.",
    ams: "Monitored PSA agent.",
    weightBased: false
  },

  "Ciprofloxacin": {
    restricted: false,
    spectrum: "Strong Gram-negative including PSA; atypicals.",
    dosing: "400 mg IV q12h OR 500–750 mg PO q12h.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal.",
    duration: "7–14 days.",
    monitoring: "QT interval, tendons.",
    warnings: "Tendon rupture, QT prolongation.",
    ams: "Monitored due to collateral damage risk.",
    weightBased: false
  },

  "Fluconazole": {
    restricted: false,
    spectrum: "Candida spp. (variable), Cryptococcus.",
    dosing: "400–800 mg IV/PO daily.",
    renal: "Adjust when CrCl <50 mL/min.",
    hepatic: "Monitor LFTs.",
    duration: "Varies by indication.",
    monitoring: "LFTs, QT interval.",
    warnings: "Drug interactions.",
    ams: "Monitored antifungal.",
    weightBased: false
  },

  "Levofloxacin": {
    restricted: false,
    spectrum: "Respiratory FQ; Gram-negatives, GP, atypicals.",
    dosing: "500–750 mg IV/PO daily.",
    renal: "Adjust by CrCl.",
    hepatic: "Minimal.",
    duration: "5–14 days.",
    monitoring: "QT interval, tendons.",
    warnings: "High QT risk.",
    ams: "Monitored agent.",
    weightBased: false
  },

  "Moxifloxacin": {
    restricted: false,
    spectrum: "Enhanced GP, anaerobes; no PSA.",
    dosing: "400 mg IV/PO daily.",
    renal: "No major adjustment.",
    hepatic: "Avoid in severe hepatic disease.",
    duration: "5–10 days typical.",
    monitoring: "QT interval.",
    warnings: "QT prolongation.",
    ams: "Monitored; avoid when PSA risk.",
    weightBased: false
  },

  "Piperacillin–Tazobactam": {
    restricted: false,
    spectrum: "Broad: GP, GN including PSA, anaerobes.",
    dosing: "4.5 g IV q6–8h; extended infusion preferred.",
    renal: "Adjust when CrCl <40 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "5–14 days typical.",
    monitoring: "Renal, electrolytes.",
    warnings: "High sodium load.",
    ams: "Monitored broad-spectrum agent.",
    weightBased: false
  }
};
