import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";
import PropTypes from 'prop-types';

function ServiceCard({ serviceLink, cardTitle }) {
  return (
    <Link to={serviceLink} className={styles.serviceLink}>
      <article className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            {cardTitle}
          </h2>
        </div>
      </article>
    </Link>
  );
}

ServiceCard.propTypes = {
  serviceLink: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default ServiceCard;