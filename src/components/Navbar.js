import React, { useState } from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { IoChevronDownSharp } from '@react-icons/all-files/io5/IoChevronDownSharp';
import { IoCloseSharp } from '@react-icons/all-files/io5/IoCloseSharp';
import useWindowWidth from '../hooks/useWindowWidth';
import * as styles from './Navbar.module.scss';

//if the vw is wide, show the menu items with a className for horizontal display
// if the vw is narrow, show the menu icon
// if the vw is narrow and menu icon is clicked, show the menu items with a different className for vertical display

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const screenWidth = useWindowWidth();

  const handleMenuToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const linkNames = ['about', 'writing', 'events', 'press', 'contact'];
  let showMenuIcon = false;
  let showMenuItems = true;

  if (screenWidth <= 900) {
    showMenuIcon = true;
    showMenuItems = navbarOpen ? true : false;
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoType}>
        Francesca Giacco
      </Link>
      {showMenuIcon && (
        <button onClick={handleMenuToggle} className={styles.menuIcon}>
          {navbarOpen ? <IoCloseSharp /> : <IoChevronDownSharp />}
        </button>
      )}
      {showMenuItems && (
        <div className={styles.menuBlock}>
          <ul className={styles.menuItems}>
            {linkNames.map((name) => {
              return (
                <li key={uuidv4()}>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
