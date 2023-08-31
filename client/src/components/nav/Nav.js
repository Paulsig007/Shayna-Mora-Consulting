import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import Logo from "../../assets/images/mora-consulting-logo.jpg";

function Nav() {
    return (
        <Grid container spacing={2} className={styles.navGridContainer}>
            <Grid xs={12} sm={6} md={3} className={styles.navGridItem}>
                
            </Grid>
        </Grid>
    );
};

export default Nav;