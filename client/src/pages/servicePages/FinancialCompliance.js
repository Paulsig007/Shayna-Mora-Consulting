import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import financialComplianceImg from "../../assets/images/serviceImages/financial-compliance.jpg";
import TFALogo from "../../assets/images/orgLogos/TFALogo.png";

function FinancialCompliance() {
  const servicePageBullets = [
    "Establish efficient systems, processes, and policies aligned with fiscal management and compliance.",
    "Manage regional financial policies, processes, and controls while forecasting and tracking expenses.",
    "Guide the annual budget planning process and offer solutions for fiscal concerns.",
    "Facilitate compliance training and ensure ongoing risk management and strong policies.",
    "Maintain overall regional compliance and systems to ensure adherence to policies.",
  ];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item sm={12} md={12} lg={12}>
        <p className={styles.servicePageTitle}>
          {/* Title */}
          Financial & Compliance Management
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={financialComplianceImg}
          alt="Financial & Compliance Management"
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          {/* Text */}
          Shayna's financial acumen is evident through her role as an embedded Chief Financial Officer, where she can develop and manage systems, processes, and policies aligned with fiscal management and compliance. She skillfully sets and manages financial policies, processes, and controls, ensuring accurate forecasting and tracking of expenses. Her experience in facilitating budget planning processes and providing solutions for fiscal concerns reflects her dedication to robust and sustainable financial management.
        </p>
      </Grid>
      <Grid item sm={12} md={12} lg={12} sx={{
        marginTop: "2%",
      }}>
        <p className={styles.servicePageBulletsTitle}>
          Services Include:
        </p>
        <ul>
          {servicePageBullets.map((bullet) => (
            <li className={styles.servicePageBullets}>{bullet}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p className={styles.relevantCompaniesTitle}>
          Partnership Spotlight:
        </p>
        <a href="https://www.teachforamerica.org/hawaii#local-leadership" target="_blank" rel="noreferrer" className={styles.companyATag}>
        <img src={TFALogo} alt="ColeaguePartners Logo" className={styles.TFALogo} />
        </a>
      </Grid>
    </Grid>
  );
}

export default FinancialCompliance;