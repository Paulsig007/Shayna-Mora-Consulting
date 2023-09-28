import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import peopleManagementImg from "../../assets/images/serviceImages/people-management.jpg";
import coleagueLogo from "../../assets/images/orgLogos/coleaguePartners.png";

function MgmtDevelopment() {
  const servicePageBullets = [
    "Offer personalized one-on-one coaching for staff at all levels.",
    "Conduct staff performance reviews and establish 360-degree feedback processes.",
    "Organize all-staff or senior leadership retreats and ongoing learning sessions on DEI, leadership, and management.",
    "Provide facilitation training and coaching, both one-on-one and cohort-based.",
    "Lead equity audits and develop toolsets to advance racial equity and inclusion.",
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
          People Management & Development
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={peopleManagementImg}
          alt=""
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          {/* Text */}
          Drawing on her team management and adult learning background, Shayna adeptly provides tailored coaching across all staff levels. She excels in conducting holistic staff performance reviews, establishing 360 feedback mechanisms, and crafting performance plans. Shayna fosters inclusivity through internal retreats and learning sessions, while her dedication to equity is evident, propelling equity audits and toolset creation for advancing racial equity and inclusion.
        </p>
      </Grid>
      <Grid item sm={12} md={12} lg={12} sx={{
        marginTop: "2%",
      }}>
        <ul>
          {servicePageBullets.map((bullet) => (
            <li className={styles.servicePageBullets}>{bullet}</li>
          ))}
        </ul>
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <p className={styles.relevantCompaniesTitle}>
        Partnership Spotlight:
        </p>
        <a href="https://www.coleaguepartners.com/" target="_blank" rel="noreferrer" className={styles.companyATag}>
        <img src={coleagueLogo} alt="ColeaguePartners Logo" className={styles.coleagueLogo} />
        </a>
      </Grid>
    </Grid>
  );
}

export default MgmtDevelopment;