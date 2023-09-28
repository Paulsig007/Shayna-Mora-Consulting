import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import strategicPlanningImg from "../../assets/images/serviceImages/strategic-planning.jpg";
import IACLogo from "../../assets/images/orgLogos/IACLogo.webp";

function StrategySupport() {
  const servicePageBullets = [
    "Facilitate goal-setting and strategic planning sessions for both organizational and team-level objectives.",
    "Conduct strategic time audits for executive leaders, defining priorities, strategies, and success metrics.",
    "Design scope and sequence for leadership team meetings, manage planning, communications, and operations.",
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
          Strategic Planning and Enterprise Support
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={strategicPlanningImg}
          alt=""
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          {/* Text */}
          Shayna's strategic acumen shines in expertly guiding goal-setting and planning sessions for organizational and team-level objectives. Her record of strategic time audits, priority definition, informed strategy formulation, and success metric design demonstrates her skill in steering senior leadership towards enterprise decisions. Shayna's involvement in shaping leadership agendas underscores her commitment to meaningful leadership discourse.
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
        <a href="https://www.indianag.org/" target="_blank" rel="noreferrer" className={styles.companyATag}>
        <img src={IACLogo} alt="ColeaguePartners Logo" className={styles.IACLogo} />
        </a>
      </Grid>
    </Grid>
  );
}

export default StrategySupport;