import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

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
    <main className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <header className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Me</h1>
          <p className={styles.contactText}>
            Reach out for more information on my services and how I can 
            fractionally support your organization!
          </p>
        </header>

        <form 
          ref={form} 
          onSubmit={sendEmail}
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              className={styles.formTextarea}
              required
            />
          </div>

          <button 
            type="submit"
            className={styles.submitButton}
            onClick={scrollToTop}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;