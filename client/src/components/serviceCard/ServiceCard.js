import React from "react";
import styles from "./ServiceCard.module.css";

function ServiceCard(props) {
  return (
    <div className={styles.card}>
      {/* <img className={styles.cardImage} src={props.cardImage}/> */}
        <div className={styles.cardTitleContainer}>
          <h2 className={styles.cardTitle}>{props.cardTitle}</h2>
        </div>
        <div className={styles.cardTextContainer}>
          <p className={styles.cardText}>{props.cardText}</p>
        </div>
    </div>
    );
}

export default ServiceCard;

