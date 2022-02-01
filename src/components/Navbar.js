import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './Navbar.module.scss';

//if the vw is wide, show the menu items with a className for horizontal display
// if the vw is narrow, show the menu icon
// if the vw is narrow and menu icon is clicked, show the menu items with a different className for vertical display

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const linkNames = ['about', 'writing', 'contact'];
  let showMenuIcon = false;
  let showMenuItems = true;

  if (screenWidth < 700) {
    showMenuIcon = true;
    showMenuItems = navbarOpen ? true : false;
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoType}>
        Francesca Giacco
      </Link>
      <div className={styles.menuBlock}>
        {showMenuIcon && (
          <button
            type="button"
            onClick={handleMenuToggle}
            className={styles.menuIcon}
          >
            {navbarOpen ? 'Close' : 'Open'}
          </button>
        )}
        <div className={styles.menuItemsBlock}>
          {showMenuItems && (
            <ul className={styles.menuItems}>
              {linkNames.map((name) => {
                return (
                  <li>
                    <Link
                      to={'/' + name + '/'}
                      className={styles.link}
                      activeClassName={styles.activeLink}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
