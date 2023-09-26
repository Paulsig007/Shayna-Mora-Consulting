
import React from "react";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import moraLogo from "../../assets/images/moraImages/mora-consulting-logo.png";

import serviceData from "../../assets/serviceData";

function Footer() {
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
        <Grid sm={12} md={6} sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1%",
          paddingLeft: "1%",
          '@media screen and (max-width: 900px)': {
            display: "flex",
            alignItems: "center",
          },
        }}>
          <img src={moraLogo} className={styles.footerLogo}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10",
          // justifyContent: "center",
          // alignItems: "center",
        }}>
          <h1 className={styles.footerLinkTitle}>
            Shayna
          </h1>
          <ul className={styles.footerLinkList}>
            <li>
              <Link to ="/" className={styles.footerLink}>Home</Link>
            </li>
            <li>
              <Link to ="/about" className={styles.footerLink}>About</Link>
            </li>
            <li>
              <Link to ="/contact" className={styles.footerLink}>Contact</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h1 className={styles.footerServicesTitle}>
            Services
          </h1>
          {serviceData.map((data) => (
          <ul key={data.serviceLink} className={styles.footerLinkList}>
            <li>
              <Link to ={data.serviceLink} className={styles.footerLink}>{data.serviceLinkTab}</Link>
            </li>
          </ul>
          ))}
      </Grid>
    </Grid>
    );
    }

    export default Footer;
    
    
    {/* <a target="_blank" href="https://icons8.com/icon/ZB8sgOZTAd0T/inspection"></a>;
    <p> Icons by</p>; 
    <a target="_blank" href="https://icons8.com">Icons8</a> */}