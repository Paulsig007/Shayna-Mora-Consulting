import React from "react";
import {Link} from "react-router-dom";
import styles from "./ServiceCard.module.css";

function ServiceCard(props) {
  return (
    <Link to ={props.serviceLink} className={styles.serviceLink}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <img className={styles.cardIcon} src={props.cardIcon} alt={props.cardTitle} />
        </div>
        <div className={styles.cardTitleContainer}>
          <h2 className={styles.cardTitle}>{props.cardTitle}</h2>
        </div>
        <div className={styles.cardTextContainer}>
          <p className={styles.cardText}>{props.cardText}</p>
        </div>
      </div>
    </Link>
    );
}

export default ServiceCard;

