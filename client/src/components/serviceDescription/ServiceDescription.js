import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./ServiceDescription.module.css";


function ServiceDescription(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}>
        <h3 className={styles.serviceTitle}>{props.serviceTitle}</h3>
        <p className={styles.serviceText}>{props.serviceText}</p>
      </Grid>
    </Grid>
  );
}

export default ServiceDescription;