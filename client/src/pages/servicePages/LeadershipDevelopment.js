import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css";

// Import images
import financialComplianceImg from "../../assets/images/serviceImages/financial-compliance.jpg";
import TFALogo from "../../assets/images/orgLogos/TFALogo.png";
import SchustermanLogo from "../../assets/images/orgLogos/Schusterman-Logo.png";

// Service bullet points data
const servicePageBullets = [
  "Provide leadership coaching and professional development for executives and board members.",
  "Guide talent acquisition and onboarding strategies that align with mission and financial goals.",
  "Develop inclusive compensation and benefits frameworks to support retention and satisfaction.",
  "Foster a collaborative staff culture through opportunities for reflection, learning, and growth.",
  "Create streamlined systems and policies for effective human assets administration.",
  "Implement values-based strategic planning for inclusive compensation and recruitment.",
  "Offer one-on-one or group coaching for staff, c-suite, and nonprofit executives pursuing advancement or new opportunities.",
];

// Partner data for better organization
const partners = [
  {
    name: "Teach For America Hawaii",
    logo: TFALogo,
    url: "https://www.teachforamerica.org/hawaii",
    className: styles.TFALogo
  },
  {
    name: "Schusterman Foundation",
    logo: SchustermanLogo,
    url: "https://www.schusterman.org/",
    className: styles.SchustermanLogo
  }
];

function LeadershipDevelopment() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container component="main" spacing={3}>
      {/* Title Section */}
      <Grid item xs={12}>
        <h1 className={styles.servicePageTitle}>
          Leadership Development and People Operations
        </h1>
      </Grid>

      {/* Image and Description Section */}
      <Grid item xs={12} md={6}>
        <img
          src={financialComplianceImg}
          alt="Professional development and leadership training session"
          className={styles.servicePageImage}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <p className={styles.servicePageText}>
          In her role as a fractional executive and coach, Shayna elevates leadership 
          across organizations, from c-suite to emerging leaders. With a focus on 
          strategic and inclusive people operations, she provides consulting and 
          fractional support that aligns talent acquisition, onboarding, and DEI 
          initiatives with mission and financial goals. Her leadership development 
          strategies support both nonprofits and for-profit social enterprises, helping 
          leaders foster inclusive, high-performance cultures and enhancing 
          organizational impact through aligned values and operational excellence.
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

export default LeadershipDevelopment;