import * as React from 'react';
import Metas from './Metas';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <div className="application">
      <Metas title={title} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
