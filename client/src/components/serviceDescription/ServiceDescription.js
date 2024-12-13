import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./ServiceDescription.module.css";
import PropTypes from 'prop-types';

function ServiceDescription({ serviceTitle, serviceText }) {
  return (
    <Grid 
      container 
      className={styles.serviceDescription}
    >
      <Grid item xs={12}>
        <h3 className={styles.serviceTitle}>
          {serviceTitle}
        </h3>
      </Grid>
      <Grid item xs={12}>
        <p className={styles.serviceText}>
          {serviceText}
        </p>
      </Grid>
    </Grid>
  );
}

ServiceDescription.propTypes = {
  serviceTitle: PropTypes.string.isRequired,
  serviceText: PropTypes.string.isRequired,
};

export default ServiceDescription;