import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    show: false
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, show: false });

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
          // Clear all form fields
          form.current.reset();
          // Clear individual input values to ensure they're reset
          const inputs = form.current.getElementsByTagName('input');
          const textarea = form.current.getElementsByTagName('textarea');
          
          // Reset all input fields
          for (let input of inputs) {
            if (input.type !== 'submit') {
              input.value = '';
            }
          }
          
          // Reset textarea
          if (textarea.length > 0) {
            textarea[0].value = '';
          }

          setStatus({
            message: "Message sent successfully! I'll get back to you soon.",
            isError: false,
            show: true
          });
          scrollToTop();
        },
        (error) => {
          console.log(error.text);
          setStatus({
            message: "Failed to send message. Please try again.",
            isError: true,
            show: true
          });
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
          {status.show && (
            <div className={`${styles.statusMessage} ${status.isError ? styles.error : styles.success}`}>
              {status.message}
            </div>
          )}
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
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;