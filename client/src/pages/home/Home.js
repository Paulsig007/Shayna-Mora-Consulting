import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import headshot from "../../assets/images/Headshot.png";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import serviceCardData from "../../assets/serviceCardData";

function Home() {
    return (
        <Grid container className={styles.home}>
            <Grid item xs={12} sm={6} className={styles.headshotContainer}>
                <img src={headshot} alt="Headshot" className={styles.headshot} />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.textContainer}>
                <p className={styles.text}>Enhancing organizational capacity through strategic leadership in operations and human resources management</p>
            </Grid>
            <Grid container spacing={2} className={styles.serviceCardContainer}>
                {serviceCardData.map((data) => (
                <Grid item xs={12} sm={6} md={4} key={data.cardTitle}>
                <ServiceCard 
                cardTitle= {data.cardTitle}
                cardText= {data.cardText}
                />
                </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Home;