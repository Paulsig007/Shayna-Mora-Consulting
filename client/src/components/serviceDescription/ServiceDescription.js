import React from "react";
import styles from "./ServiceDescription.module.css";


function ServiceDescription(props) {
  return (
    <div className={styles.serviceDescription}>
      <h3 className={styles.serviceTitle}>{props.serviceTitle}</h3>
      <p className={styles.serviceText}>{props.serviceText}</p>
    </div>
  );
}

export default ServiceDescription;