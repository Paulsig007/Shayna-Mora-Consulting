import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import headshot from "../../assets/images/Headshot.png";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import serviceCardData from "../../assets/serviceCardData";
import ServiceDescription from "../../components/serviceDescription/ServiceDescription";

function Home() {
  return (
  <Box className={styles.home}>
    <Grid container className={styles.home}>
      <Grid container className={styles.homeBanner}>
        <Grid item xs={12} sm={6} className={styles.headshotContainer}> 
          <img src={headshot} alt="Headshot" className={styles.headshot} />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.textContainer}>
          <p className={styles.text}>Enhancing organizational capacity through strategic leadership in operations and human resources management</p>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={styles.serviceCardContainer}>
        {serviceCardData.map((data) => (
        <Grid container sx={{
          display: "flex",
          }}
        >
          <Grid item xs={12} sm={6} md={4}  key={data.cardTitle} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2%",
            marginTop: "2%",
            }}
          >
            <ServiceCard 
            cardIcon= {data.cardIcon}
            cardTitle= {data.cardTitle}
            cardText= {data.cardText}
            /> 
          </Grid>
          <Grid item xs={12} sm={6} md={8} key={data.serviceTitle} sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "2%",
            paddingLeft: "10%",
          }}>
            <ServiceDescription
              serviceTitle= {data.serviceTitle}
              serviceText= {data.serviceText}
            />
          </Grid>
        </Grid>
          ))}
      </Grid>
    </Grid>
  </Box>
    );
}

export default Home;