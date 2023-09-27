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
        "template_dvg0ptr",
        form.current,
        "Z9H-fpcVpqK5dqCqm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        sm={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <h1 className={styles.contactTitle}>Contact Me</h1>
      </Grid>
      <Grid item sm={12}>
        <p className={styles.contactText}>
          If you have any questions, or just want to talk shop, please fill out
          the form below and I will get back to you as soon as possible.
        </p>
      </Grid>
      <form ref={form} onSubmit={sendEmail}>
        <Grid item sm={12}>
          <label className={styles.conLabel}>Name</label>
        </Grid>
        <Grid item sm={12}>
          <input type="text" name="user_name" placeholder="Name" />
        </Grid>
        <Grid item sm={12}>
          <label className={styles.conLabel}>Email</label>
        </Grid>
        <Grid item sm={12}>
          <input type="email" name="user_email" placeholder="Email" />
        </Grid>
        <Grid item sm={12}>
          <label className={styles.conLabel}>Message</label>
        </Grid>
        <Grid item sm={12}>
          <textarea
            id="contMessage"
            name="message"
            placeholder="How can I assist you?"
          />
        </Grid>
        <Grid item sm={12}>
          <input type="submit" value="Send" />
        </Grid>
      </form>
    </Grid>
  );
}

export default Contact;
