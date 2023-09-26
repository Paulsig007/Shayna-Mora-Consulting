import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_3z6xw3o",
            "template_3z6xw3o",
            form.current,
            "user_3z6xw3o"
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className={styles.componentContainer}>
        <div className={styles.contactBackground}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <p className={styles.contactText}>
          If you have any questions, or just want to talk shop, please fill out
          the form below and I will get back to you as soon as possible.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <label className={styles.conLabel}>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label className={styles.conLabel}>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label className={styles.conLabel}>Message</label>
          <textarea
            id="contMessage"
            name="message"
            placeholder="How can I assist you?"
          />
          <input className="sendBtn" type="submit" value="Send" />
        </form>
      </div>
      </div>
    );
}

export default Contact;