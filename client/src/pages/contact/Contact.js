import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import Grid from "@mui/material/Grid";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xoptlf6",
        "contact_form",
        form.current,
        "Z9H-fpcVpqK5dqCqm"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Grid 
      container 
      spacing={2} 
      sx={{ 
        display: "flex", 
        flexDirection: "column" 
      }}
    >
      <Grid 
        item 
        sm={12} 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start", 
          justifyContent: "flex-start" 
        }}
      >
        <h1 className={styles.contactTitle}>Contact Me</h1>
      </Grid>
      
      <Grid item sm={12}>
        <p className={styles.contactText}>
          Reach out for more information on my services and how I can 
          fractionally support your organization!
        </p>
      </Grid>

      <form ref={form} onSubmit={sendEmail}>
        <Grid item sm={12}>
          <label className={styles.conLabel}>Name</label>
        </Grid>
        <Grid item sm={12}>
          <input 
            type="text" 
            name="from_name" 
            placeholder="Name"
            className={styles.formInput} 
          />
        </Grid>

        <Grid item sm={12}>
          <label className={styles.conLabel}>Email</label>
        </Grid>
        <Grid item sm={12}>
          <input 
            type="email" 
            name="from_email" 
            placeholder="Email"
            className={styles.formInput}
          />
        </Grid>

        <Grid item sm={12}>
          <label className={styles.conLabel}>Message</label>
        </Grid>
        <Grid item sm={12}>
          <textarea 
            id="contMessage" 
            name="message"
            className={styles.formTextarea}
          />
        </Grid>

        <Grid item sm={12}>
          <input 
            type="submit" 
            value="Send"
            className={styles.submitButton}
            onClick={scrollToTop}
          />
        </Grid>
      </form>
    </Grid>
  );
}

export default Contact;