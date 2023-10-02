import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import serviceData from "../../assets/serviceData";
import ServiceDescription from "../../components/serviceDescription/ServiceDescription";

function Home() {
  return (
  <Box className={styles.home}>
    <Grid container className={styles.home}>
      <Grid container className={styles.homeBanner}>
        <Grid item xs={6} sm={6} className={styles.textContainer}>
          <p className={styles.text}>Enhancing organizational capacity through strategic leadership in operations and human resources management</p>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={styles.serviceCardContainer} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        padding: "0",
        // padding: "2%",
      }}>
        {serviceData.map((data) => (
        <Grid container sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2%",
          marginRight: "2%",
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
            serviceLink= {data.serviceLink}
            cardTitle= {data.cardTitle}
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