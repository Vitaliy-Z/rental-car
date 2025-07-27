import { useState } from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

import styles from "./Header.module.css";

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
          <picture>
            <source
              srcSet="/logo/logo@2x.webp"
              media="(min-resolution: 192dpi)"
            />
            <img src="/logo/logo@1x.webp" alt="logo" />
          </picture>
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
