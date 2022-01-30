import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Navbar.module.scss';

const Navbar = () => {
  const linkNames = ['about', 'writing', 'contact'];
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoType}>
        Francesca Giacco
      </Link>
      <ul className={styles.menu}>
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
    </nav>
  );
};

export default Navbar;
