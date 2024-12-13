import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../../assets/images/moraImages/mora-consulting-logo.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import data from "../../assets/serviceData";

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
    <Box component="header" className={styles.navWrapper}>
      <Grid 
        container 
        component="nav"
        className={styles.nav} 
        sx={{ 
          boxShadow: "1px 1px 8px rgba(81, 79, 79, 0.2)",
        }}
      >
        <Grid item xs={12} sm={6} className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <img 
              src={Logo} 
              alt="Mora Consulting Logo" 
              className={styles.logo} 
            />
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
          
          <Button
            className={styles.servicesButton}
            aria-controls={open ? 'services-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: "inherit",
              textDecoration: "underline",
              color: "rgb(75, 75, 75)",
              padding: "0.5rem 1rem",
              "&:hover": {
                color: "black",
                textDecoration: "underline",
                backgroundColor: "transparent",
              },
            }}
          >
            SERVICES
          </Button>

          <Menu
            id="services-menu"
            className={styles.servicesMenu}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "services-button",
            }}
          >
            {data.map((item) => (
              <MenuItem 
                key={item.serviceLink} 
                onClick={handleClose}
                className={styles.menuItem}
              >
                <Link 
                  to={item.serviceLink} 
                  className={styles.menuLink}
                >
                  {item.serviceLinkTab}
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Link to="/contact" className={styles.navLink}>
            CONTACT
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Nav;