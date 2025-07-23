import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "/logo.svg";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isCatalogPage = location.pathname === "/catalog";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          <svg>
            <use href={logo}></use>
          </svg>
        </NavLink>

        {!isMobileMenuOpen && (
          <button className={styles.burgerButton} onClick={toggleMobileMenu}>
            <Icon icon="mdi:menu" width={24} height={24} />
          </button>
        )}

        <div
          className={clsx(styles.linksWrapper, isMobileMenuOpen && styles.open)}
        >
          <button className={styles.closeButton} onClick={toggleMobileMenu}>
            <Icon icon="mdi:close" width={24} height={24} />
          </button>

          <NavLink
            to="/"
            className={clsx(styles.link, isHomePage && styles.active)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={clsx(styles.link, isCatalogPage && styles.active)}
          >
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
