import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import innovationImg from "../../assets/images/serviceImages/innovation.jpg";
import ElEdLogo from "../../assets/images/orgLogos/ElEdLogo.jpeg";

function ProjectInnovation() {
  const servicePageBullets = [
    "Drive the development of new programs from conceptualization to completion.",
    "Design and lead cross-functional projects, setting objectives, timelines, and ensuring team buy-in.",
    "Create collaboration and information-sharing systems within teams and across the organization.",
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
          Special Projects & Innovation
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={innovationImg}
          alt="Financial & Compliance Management"
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          {/* Text */}
          Shayna has a dynamic approach to special project management . Her involvement in new program development and cross-functional projects has equipped her with the skills to design projects, set objectives, and execute them seamlessly. Shayna's talent lies in creating collaboration and information-sharing systems, whether within teams or across the organization, fostering efficient project management and innovative problem-solving.
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
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p className={styles.relevantCompaniesTitle}>
        Partnership Spotlight:
        </p>
        <a href="https://eleducation.org/" target="_blank" rel="noreferrer" className={styles.companyATag}>
        <img src={ElEdLogo} alt="ColeaguePartners Logo" className={styles.ElEdLogo} />
        </a>
      </Grid>
    </Grid>
  );
}

export default ProjectInnovation;