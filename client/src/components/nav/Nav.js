import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../../assets/images/mora-consulting-logo1.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function Nav() {
    return (
        <Box className={styles.Box}>
        <Grid container className={styles.nav}>
        <Grid item xs={12} sm={5}  >
            <img src={Logo} alt="Mora Consulting Logo" className={styles.logo} />
        </Grid>
        <Grid item xs={12} sm={7}  className={styles.links}>
            <Link to="/" className={styles.link}>HOME</Link>
            <Link to="/about" className={styles.link}>ABOUT</Link>
            <Link to="/services" className={styles.link}>SERVICES</Link>
            <Link to="/contact" className={styles.link}>CONTACT</Link>
        </Grid>
    </Grid>
    </Box>
    );
};

export default Nav;