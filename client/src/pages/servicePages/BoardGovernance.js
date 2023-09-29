import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import boardGovernanceImg from "../../assets/images/serviceImages/board-mgmt.jpg";
import vChiefLogo from "../../assets/images/orgLogos/vchiefLogo.webp";

function StrategySupport() {
  const servicePageBullets = [
    "Provide comprehensive board reporting, delivering insights on fiscal progress, impact, and initiatives.",
    "Develop and manage cross-cutting initiatives aligned with organizational goals and vision.",
    "Monitor, report, and follow up on audit support while ensuring compliance in all areas.",
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
          Board Management & Governance
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={boardGovernanceImg}
          alt=""
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          {/* Text */}
          Shayna seamlessly handles board reporting, offering valuable insights into fiscal progress, impact, and initiatives. Her adeptness at managing cross-cutting initiatives aligned with organizational goals is apparent in her strategic approach to board and fiscal sustainability. Demonstrating her commitment to compliance, progress tracking, and audit support, Shayna embodies a holistic approach to board management.
        </p>
      </Grid>
      <Grid item sm={12} md={12} lg={12} sx={{
        marginTop: "2%",
      }}>
        <ul>
          {servicePageBullets.map((bullet) => (
            <li className={styles.servicePageBullets} key={bullet.indexOf}>{bullet}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p className={styles.relevantCompaniesTitle}>
          Partnership Spotlight:
        </p>
        <a href="https://vchiefs.com/" target="_blank" rel="noreferrer" className={styles.companyATag}>
        <img src={vChiefLogo} alt="ColeaguePartners Logo" className={styles.vChiefLogo} />
        </a>
      </Grid>
    </Grid>
  );
}

export default StrategySupport;