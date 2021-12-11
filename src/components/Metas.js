import * as React from 'react';
import { Helmet } from 'react-helmet';

const Metas = ({ title }) => {
  // defaults for meta options
  const pageTitle = title || 'Francesca Giacco';

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default Metas;
