import React from "react";
import Grid from "@mui/material/Grid";
import headshot from "../../assets/images/moraImages/Headshot.webp";
import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.aboutPage}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          lg={6}
        >
          <div className={styles.profileSection}>
            <img 
              src={headshot} 
              alt="Shayna Mora headshot" 
              className={styles.headshot} 
            />
            <h1 className={styles.aboutTitle}>About Shayna Mora</h1>
          </div>
        </Grid>

        {/* Bio Section */}
        <Grid
          item
          xs={12}
          lg={6}
          className={styles.bioSection}
        >
          <article className={styles.aboutContent}>
            <p className={styles.leadText}>
              <strong>
                I help mission-driven organizations and for-profit social enterprises thrive 
                sustainably through efficient, strategic, and human-centered leadership.
              </strong>
            </p>

            <p className={styles.aboutText}>
              Welcome to Mora Consulting. I'm Shayna Mora, Principal Consultant, and I 
              believe that organizations thrive when operational strength aligns with 
              human-centered values. My work supports nonprofits, organizations, and 
              purpose-driven for-profit enterprises that seek transformative growth, 
              resilience, and positive culture shifts.
            </p>

            <p className={styles.aboutText}>
              As a fractional Chief Operating Officer, Chief of Staff, and Chief People 
              Officer, I work with clients across diverse sectors, guiding them through 
              growth and transformation with a people-first approach that emphasizes 
              sustainable impact. With nearly two decades of experience in nonprofit 
              management, operations, strategy, and change management, I have dedicated 
              my career to helping mission-driven organizations and impact-driven 
              businesses turn their visions into reality.
            </p>

            <h2 className={styles.sectionTitle}>My Approach</h2>

            <p className={styles.aboutText}>
              As a fractional executive and strategist, I collaborate with socially-minded 
              organizations, including purpose-driven enterprises, to build adaptive 
              structures that drive sustainable growth and resilience while staying true 
              to core values. Whether in change management, operational strategy, or 
              leadership coaching, I focus on creating a culture where operational 
              excellence and human-centered impact go hand in hand.
            </p>

            <p className={styles.aboutText}>
              Drawing on nearly two decades of experience across a variety of sectors 
              globally, I empower leaders to develop the skills and vision needed for 
              meaningful results. With access to a broad network of consultants across 
              sectors like philanthropy, impact-driven business, and marketing, I can 
              assemble the ideal team to meet each client's unique needs. Together, 
              we'll navigate transitions, strengthen communication, and ensure your 
              operations align seamlessly with your mission.
            </p>

            <p className={styles.aboutText}>
              Rooted in Hawai'i, I bring a deep respect for diversity, equity, and 
              inclusion to every engagement, fostering spaces where all voices are 
              valued and leaders feel inspired to make a difference. If you're ready 
              to elevate your organization with a partner who understands socially 
              conscious work, let's connect to build a resilient foundation for your 
              mission.
            </p>
          </article>
        </Grid>
      </Grid>
    </main>
  );
}

export default About;