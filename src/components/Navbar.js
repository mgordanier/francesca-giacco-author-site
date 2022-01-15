import * as React from 'react';
import * as styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.logoType}>Francesca Giacco</p>
      <ul className={styles.menu}>
        <li>About</li>
        <li>Writing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
