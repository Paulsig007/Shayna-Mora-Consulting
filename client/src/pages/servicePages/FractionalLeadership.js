import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import styles from "./servicePage.module.css";

// Import images
import FractionalLeadershipImg from "../../assets/images/serviceImages/talent-culture.jpg";
import vchiefLogo from "../../assets/images/orgLogos/vchiefLogo.webp";
import coleaguePartnersLogo from "../../assets/images/orgLogos/coleaguePartners.png";

// Service bullet points data
const servicePageBullets = [
  "Part-time, high-impact leadership as a fractional Chief Operating Officer, Chief People Officer, Chief of Staff, or other executive roles as needed.",
  "Strategic planning and operational frameworks to drive sustainable growth and profitability.",
  "Board and executive alignment to enhance organizational resilience and mission cohesion.",
  "Development of scalable systems and processes for optimized resource allocation.",
  "Executive and board governance support to improve accountability and long-term alignment.",
  "Customizable consulting to address unique operational and leadership needs across nonprofits and purpose-driven enterprises.",
];

// Partner data for better organization
const partners = [
  {
    name: "vChief",
    logo: vchiefLogo,
    url: "https://vchiefs.com/",
    className: styles.vChiefLogo
  },
  {
    name: "Coleague Partners",
    logo: coleaguePartnersLogo,
    url: "https://www.coleaguepartners.com/",
    className: styles.coleagueLogo
  }
];

function FractionalLeadership() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container component="main" spacing={3}>
      {/* Title Section */}
      <Grid item xs={12}>
        <h1 className={styles.servicePageTitle}>
          Fractional Executive Leadership and Organizational Strategy
        </h1>
      </Grid>

      {/* Image and Description Section */}
      <Grid 
      item xs={12} 
      md={6} 
      className={styles.imageContainer}
      >
        <img
          src={FractionalLeadershipImg}
          alt="Team collaborating on organizational strategy"
          className={styles.servicePageImage}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <p className={styles.servicePageText}>
          Delivering high-impact, part-time leadership as a fractional Chief Operating Officer 
          or Chief People Officer, Shayna provides strategic guidance to mission-driven 
          organizations and purpose-led enterprises. With experience across a range of executive 
          roles—including Transformational Executive, Chief Integration Officer, Chief Strategy 
          Officer, and Chief of Staff— Shayna supports organizations in optimizing operations, 
          driving profitability, and aligning leadership goals. Her adaptable approach tailors 
          strategies that balance mission and financial health, helping organizations achieve 
          sustainable growth and lasting impact.
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

export default FractionalLeadership;