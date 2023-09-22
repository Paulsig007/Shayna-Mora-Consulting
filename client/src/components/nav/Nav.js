import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../../assets/images/mora-consulting-logo1.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import data from "../../assets/serviceData"



function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.preventDefault();
        setAnchorEl(null);
    };

    return (
        <Box className={styles.Box}>
          <Grid container className={styles.nav}>
            <Grid item xs={12} sm={6}  >
              <img src={Logo} alt="Mora Consulting Logo" className={styles.logo} />
            </Grid>
            <Grid item xs={12} sm={6}  className={styles.links}>
              <Link to="/" className={styles.link}>HOME</Link>
              <Link to="/about" className={styles.link}>ABOUT</Link>
              <div className={styles.dropdown}>
              <Button 
                className={styles.serviceButton}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >SERVICES</Button>
              <Menu 
              className={styles.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-serviceButton',
              }}
              >
                {data.map((data) => (
                  <MenuItem className={styles.menuItem} key={data.serviceLink}>
                    <Link to={data.serviceLink} className={styles.menuLink}>{data.serviceLinkTab}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          <Link to="/contact" className={styles.link}>CONTACT</Link>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Nav;