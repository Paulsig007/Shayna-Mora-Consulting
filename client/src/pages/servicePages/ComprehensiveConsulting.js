import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css";

// Import images
import innovationImg from "../../assets/images/serviceImages/innovation.jpg";
import CanopyLogo from "../../assets/images/orgLogos/CanopyLogo.webp";
import catalystEdLogo from "../../assets/images/orgLogos/catalystEdLogo.webp";

// Service bullet points data
const servicePageBullets = [
  "Assemble and lead customized consulting teams with expertise not limited to finance, marketing, operations, and philanthropy.",
  "Develop holistic solutions that align mission-driven goals with financial sustainability.",
  "Deliver project-based consulting tailored to address complex organizational challenges.",
  "Provide industry-specific expertise for comprehensive, cross-functional impact.",
  "Design mission-aligned strategies that integrate profitability across diverse business models.",
];

// Partner data for better organization
const partners = [
  {
    name: "Canopy Advisory",
    logo: CanopyLogo,
    url: "https://canopyadvisory.com/",
    className: styles.CanopyLogo
  },
  {
    name: "Catalyst Ed",
    logo: catalystEdLogo,
    url: "https://catalyst-ed.org/",
    className: styles.catalystEdLogo
  }
];

function ComprehensiveConsulting() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container component="main" spacing={3}>
      {/* Title Section */}
      <Grid item xs={12}>
        <h1 className={styles.servicePageTitle}>
          Comprehensive Consulting and Networked Solutions
        </h1>
      </Grid>

      {/* Image and Description Section */}
      <Grid item xs={12} md={6}>
        <img
          src={innovationImg}
          alt="Team collaborating on comprehensive consulting solutions"
          className={styles.servicePageImage}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <p className={styles.servicePageText}>
          Shayna's extensive network of sector-specific consultants enables her to 
          deliver comprehensive, mission-aligned solutions across finance, marketing, 
          operations, and more. She customizes project teams to tackle unique 
          organizational challenges, ensuring both mission and profitability goals 
          are met through sustainable and holistic strategies. This networked approach 
          allows organizations to leverage specialized expertise in creating solutions 
          that address complex issues and foster long-term growth, organizational 
          sustainability, and impact.
        </p>
      </Grid>

      {/* Services Section */}
      <Grid item xs={12}>
        <h2 className={styles.servicePageBulletsTitle}>
          Services Include:
        </h2>
        <ul aria-label="Services offered">
          {servicePageBullets.map((bullet, index) => (
            <li 
              key={index} 
              className={styles.servicePageBullets}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </Grid>

      {/* Partners Section */}
      <Grid item xs={12}>
        <h2 className={styles.relevantCompaniesTitle}>
          Partnership Spotlight:
        </h2>
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noreferrer"
            className={styles.companyATag}
            aria-label={`Visit ${partner.name} website`}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className={partner.className}
            />
          </a>
        ))}
      </Grid>
    </Grid>
  );
}

export default ComprehensiveConsulting;