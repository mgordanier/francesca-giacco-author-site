import * as React from 'react';
import { Helmet } from 'react-helmet';
import bookCover from '../content/images/giacco_sixdaysinrome_9781538706428_hc.jpg';

const Metas = ({
  title = 'Francesca Giacco',
  description = 'Francesca Giacco is a graduate of Barnard College and the MFA program at Columbia University. She lives in New York. Six Days in Rome is her first novel.',
  image = bookCover,
  imageAlt = 'Book cover for the novel Six Days in Rome by Francesca Giacco.',
}) => {
  // defaults for meta options

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:image:alt" content={imageAlt} />
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
