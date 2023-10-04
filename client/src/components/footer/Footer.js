import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import moraLogo from "../../assets/images/moraImages/mora-consulting-logo.png";

import serviceData from "../../assets/serviceData";

function Footer() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => 
    window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const siteNavigation = [
    {
      link: "/",
      tab: "Home",
    },
    {
      link: "/about",
      tab: "About",
    },
    {
      link: "/contact",
      tab: "Contact",
    }
  ];
  const socialMedia = [
    {
      social: "https://www.linkedin.com/in/shayna-mora-80316726b/",
      tab: "LinkedIn"
    },
    {
      social: "https://calendly.com/shaynamora",
      tab: "Schedule a Call"
    }
  ];

  return (
    <Grid container sx={{
      backgroundColor: "#f1f1ef",
      paddingBottom: "10%",
      paddingTop: "1%",
      paddingLeft: "1%",
      paddingRight: "1%",
      '@media screen and (max-width: 900px)': {
        padding: "3%",
        paddingTop: "1%",
      },
    }}>
        <Grid item sm={12} md={6} sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1%",
          paddingLeft: "1%",
          '@media screen and (max-width: 900px)': {
            display: "flex",
            alignItems: "center",
          },
        }}>
          <img src={moraLogo} alt="Mora Consulting Logo"className={styles.footerLogo}/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10",
        }}>
          <h1 className={styles.footerLinkTitle}>
            Shayna
          </h1>
          {siteNavigation.map((data) => (
          <ul key={data.link} className={styles.footerLinkList}>
            <li>
              <Link 
              to ={data.link} 
              className={styles.footerLink} 
              onClick={() => 
              {
                handleScroll(); 
                scrollToTop();
              }}>
                {data.tab}
              </Link>
            </li>
          </ul>
          ))  
          }
          {socialMedia.map((data) => (
            <ul key={data.social} className={styles.footerLinkList}>
            <li>
              <a href={data.social} target="_blank" rel="noreferrer" className={styles.footerLink}>{data.tab}</a>
            </li>
          </ul>
          ))}
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <h1 className={styles.footerServicesTitle}>
            Services
          </h1>
          {serviceData.map((data) => (
          <ul key={data.serviceLink} className={styles.footerLinkList}>
            <li>
              <Link 
                to ={data.serviceLink} 
                className={styles.footerLink} 
                onClick={() => 
                  {
                    handleScroll(); 
                    scrollToTop();
                  }}
                >{data.serviceLinkTab}</Link>
            </li>
          </ul>
          ))}
      </Grid>
    </Grid>
    );
    }

    export default Footer;
    
    
   
   