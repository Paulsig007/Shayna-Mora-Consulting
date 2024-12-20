import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import ServiceDescription from "../../components/serviceDescription/ServiceDescription";
import serviceData from "../../assets/serviceData";

function Home() {
  return (
    <Box component="main" className={styles.home}>
      <Grid container>
        {/* Hero Banner */}
        <Grid container component="section" className={styles.homeBanner}>
          <Grid 
            item 
            xs={12} 
            sm={6} 
            className={styles.textContainer}
          >
            <p className={styles.heroText}>
            Empowering mission-driven organizations to achieve strategic impact at the intersection of efficient operations and people-first leadership
            </p>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Grid 
          container 
          component="section" 
          spacing={3} 
          className={styles.servicesSection}
        >
          {serviceData.map((service) => (
            <Grid 
              container 
              key={service.cardTitle} 
              className={styles.serviceRow}
            >
              {/* Service Card */}
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                className={styles.serviceCardWrapper}
              >
                <ServiceCard 
                  serviceLink={service.serviceLink}
                  cardTitle={service.cardTitle}
                /> 
              </Grid>

              {/* Service Description */}
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={8} 
                className={styles.serviceDescriptionWrapper}
              >
                <ServiceDescription
                  serviceTitle={service.serviceTitle}
                  serviceText={service.serviceText}
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