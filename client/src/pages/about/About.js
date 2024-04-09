import React from "react";
import Grid from "@mui/material/Grid";
import headshot from "../../assets/images/moraImages/Headshot.png";
import styles from "./About.module.css";

function About() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1%",
          paddingLeft: "1%",
        }}
      >
        <img src={headshot} alt="Headshot" className={styles.headshot} />
        <h1 className={styles.aboutTitle}>About Shayna</h1>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2% 2% 2% 0",
        }}
      >
        <p className={styles.aboutText}>
          With over 17 years of distinguished experience in education and
          non-profit administration, Shayna Mora excels as a human capital
          leader, blending sharp project management skills with an innate
          determination to achieve. A strategic visionary, Shayna's extensive
          expertise spans advising non-profits, education sectors, and startups
          alike, encompassing strategic planning, process design, operational
          excellence, and personnel leadership. Renowned for translating visions
          into actionable operations, Shayna, a systems expert, has spearheaded
          the enhancement and deployment of project tools for both internal and
          external stakeholders, offering astute analysis and unparalleled
          insight, making her an invaluable asset to any endeavor.
          <br />
          <br />
          A partnership with Shayna translates to collaborating with a
          professional who not only excels in strategic planning and operational
          execution but also champions diversity, equity, and inclusion. Her
          ability to drive growth, create streamlined processes, and nurture
          collaboration establishes her as an invaluable asset for clients
          seeking transformative outcomes. Shayna's expertise extends beyond the
          technical realm; her track record in cultivating staff culture,
          leading equity initiatives, and fostering leadership development
          further solidifies her position as a strategic consultant capable of
          driving positive change across numerous facets of an organization.
          <br />
          <br />
          Shayna holds multiple advanced degrees from the University of Hawaii
          and her academic journey is complemented by extensive global NGO
          experience. Shayna has engaged in specialized coursework centered
          around leadership and organizational transformation, enriching her
          skills and insights to drive impactful change.
        </p>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <a className={styles.bottomResume} href={resume} download>
            <img
              src={resumeIcon}
              alt="Resume Icon"
              className={styles.bottomResumeIcon}
            />
          </a>
          <p className={styles.bottomResumeText}>Download My CV</p> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
