import * as React from 'react';
import Metas from './Metas';
import Navbar from './Navbar';
import Footer from './Footer';
import * as styles from './Layout.module.scss';

const Layout = ({ children, title }) => {
  return (
    <div className="application">
      <Metas title={title} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
