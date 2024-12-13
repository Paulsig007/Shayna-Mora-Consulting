import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css";

// Import images
import peopleManagementImg from "../../assets/images/serviceImages/people-management.jpg";
import obranLogo from "../../assets/images/orgLogos/obranLogo.png";
import aerdfLogo from "../../assets/images/orgLogos/aerdfLogo.webp";

// Service bullet points data
const servicePageBullets = [
  "Lead tailored change management strategies for nonprofit and social enterprise environments.",
  "Implement culture transformation initiatives that align with mission and financial goals.",
  "Facilitate custom workshops and retreats to foster buy-in and support smooth transitions.",
  "Conduct culture audits and develop responsive plans to enhance adaptability and resilience.",
  "Guide leadership through restructuring, growth, and change with a focus on retention and satisfaction.",
  "Strengthen organizational culture to improve retention, satisfaction, and effective hiring.",
  "Integrate DEI initiatives into people operations to promote inclusive, mission-aligned practices.",
];

// Partner data for better organization
const partners = [
  {
    name: "Obran Cooperative",
    logo: obranLogo,
    url: "https://www.obran.coop/",
    className: styles.obranLogo
  },
  {
    name: "AERDF",
    logo: aerdfLogo,
    url: "https://aerdf.org/",
    className: styles.aerdfLogo
  }
];

function ChangeManagement() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container component="main" spacing={3}>
      {/* Title Section */}
      <Grid item xs={12}>
        <h1 className={styles.servicePageTitle}>
          Change Management and Culture Transformation
        </h1>
      </Grid>

      {/* Image and Description Section */}
      <Grid item xs={12} md={6}>
        <img
          src={peopleManagementImg}
          alt="Team collaborating on culture transformation"
          className={styles.servicePageImage}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <p className={styles.servicePageText}>
          Shayna's approach to change management transforms organizations by embedding 
          values-driven culture with operational excellence. Whether navigating structural 
          shifts, expanding services, or aligning leadership, she guides nonprofits and 
          social enterprises in creating a culture resilient to change while maintaining 
          alignment with mission and financial sustainability. Shayna's transformation 
          strategies foster inclusive environments where mission-driven and profitability 
          goals are integrated, driving engagement, adaptability, and growth across teams 
          and leadership.
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

export default ChangeManagement;