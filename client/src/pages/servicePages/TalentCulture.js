import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css"

import TalentCultureImg from "../../assets/images/serviceImages/talent-culture.jpg";

function TalentCulture() {
  const servicePageBullets = [
    "Develop streamlined systems, processes, and policies for Human Assets administration.",
    "Execute values-based strategic planning, inclusive compensation, and intentional application materials.",
    "Strengthen organizational culture tied to retention, satisfaction, and effective hiring.",
    "Conduct organizational culture audits and implement responsive plans.",
    "Cultivate staff culture through meaningful opportunities for collaboration, reflection, learning, and community building.",
    "One-on-one coaching for c-suite and non-profit executives looking for their next professional opportunity.",
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
          Talent, People Operations, and Culture
        </p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={TalentCultureImg}
          alt="Talent, People Operations, and Culture"
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>
          Shayna's prowess in talent management and team culture shines as an
          embedded fractional Chief People Officer. She architects systems,
          processes, and policies that optimize human asset administration,
          harmonizing transitions with fiscal and operational facets. Her
          guidance in values-driven visioning and strategic planning ensures the
          seamless realization of staffing schedules, compensation frameworks,
          and inclusive benefits strategies. Shayna's emphasis on fostering
          belonging and culture is channeled into retention-centric tactics,
          empowering staff with reflective growth avenues and forging impactful
          collaborations.
        </p>
      </Grid>
      <Grid item sm={12} md={12} lg={12} sx={{
        marginTop: "2%",
        marginBottom: "5%"
      }}>
        <ul>
          {servicePageBullets.map((bullet) => (
            <li className={styles.servicePageBullets}>{bullet}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default TalentCulture;
