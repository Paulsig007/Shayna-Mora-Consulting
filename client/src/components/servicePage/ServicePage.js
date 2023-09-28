import React from "react";
import Grid from "@mui/material/Grid";
// import styles from "./ServicePage.module.css";

function ServicePage(props) {
  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={12}>
        <p className={styles.servicePageTitle}>{props.servicePageTitle}</p>
      </Grid>
      <Grid item sm={12} md={6}>
        <img
          src={props.servicePageImage}
          alt={props.servicePageImgAlt}
          className={styles.servicePageImage}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <p className={styles.servicePageText}>{props.servicePageText}</p>
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <ul>
          {props.servicePageBullets.map[props.i]((bullet) => (
            <li className={styles.servicePageBullets}>{bullet}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default ServicePage;
