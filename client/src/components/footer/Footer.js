import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import moraLogo from "../../assets/images/moraImages/mora-consulting-logo.png";
import serviceData from "../../assets/serviceData";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const siteNavigation = [
    { link: "/", tab: "Home" },
    { link: "/about", tab: "About" },
    { link: "/contact", tab: "Contact" }
  ];

  const socialMedia = [
    { social: "https://www.linkedin.com/in/shaynamora/", tab: "LinkedIn" },
    { social: "https://calendly.com/shaynamora", tab: "Schedule a Call" }
  ];

  return (
    <footer className={styles.footer}>
      <Grid container spacing={2}>
        <Grid 
          item 
          xs={12} 
          lg={6} 
          className={styles.logoContainer}
        >
          <img 
            src={moraLogo} 
            alt="Mora Consulting Logo" 
            className={styles.footerLogo}
          />
        </Grid>
        
        <Grid 
          item 
          xs={6} 
          lg={3} 
          className={styles.linkSection}
        >
          <h2 className={styles.footerHeading}>
            Shayna
          </h2>
          <nav>
            <ul className={styles.footerLinkList}>
              {siteNavigation.map((data) => (
                <li key={data.link}>
                  <Link
                    to={data.link}
                    className={styles.footerLink}
                    onClick={scrollToTop}
                  >
                    {data.tab}
                  </Link>
                </li>
              ))}
              {socialMedia.map((data) => (
                <li key={data.social}>
                  <a 
                    href={data.social} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={styles.footerLink}
                  >
                    {data.tab}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>

        <Grid 
          item 
          xs={6} 
          lg={3} 
          className={styles.linkSection}
        >
          <h2 className={styles.footerHeading}>
            Services
          </h2>
          <nav>
            <ul className={styles.footerLinkList}>
              {serviceData.map((data) => (
                <li key={data.serviceLink}>
                  <Link
                    to={data.serviceLink}
                    className={styles.footerLink}
                    onClick={scrollToTop}
                  >
                    {data.serviceLinkTab}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>
      </Grid>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} MORA CONSULTING. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;