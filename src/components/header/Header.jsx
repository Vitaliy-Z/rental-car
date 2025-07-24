import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Header.styles.js";

const HeaderMui = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isCatalogPage = location.pathname === "/catalog";

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <NavLink to="/" style={styles.logo}>
          <svg style={styles.logo.svg}>
            <use href="./img/logo.svg"></use>
          </svg>
        </NavLink>
        <Box sx={styles.linksWrapper}>
          <NavLink to="/" style={isHomePage ? styles.linkActive : styles.link}>
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            style={isCatalogPage ? styles.linkActive : styles.link}
          >
            Catalog
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMui;
