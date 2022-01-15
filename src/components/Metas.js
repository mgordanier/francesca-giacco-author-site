import * as React from 'react';
import { Helmet } from 'react-helmet';

const Metas = ({ title }) => {
  // defaults for meta options
  const pageTitle = title || 'Francesca Giacco';

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      {/*
       * @license
       * MyFonts Webfont Build ID 666603
       *
       * The fonts listed in this notice are subject to the End User License
       * Agreement(s) entered into by the website owner. All other parties are
       * explicitly restricted from using the Licensed Webfonts(s).
       *
       * You may obtain a valid license from one of MyFonts official sites.
       * http://www.fonts.com
       * http://www.myfonts.com
       * http://www.linotype.com
       */}
    </Helmet>
  );
};

export default Metas;
