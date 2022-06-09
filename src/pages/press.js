import * as React from 'react';
import { graphql } from 'gatsby';
import SingleColumnPage from '../components/SingleColumnPage';

const PressPage = ({ data }) => {
  const { page_heading, press_links, title, meta_description } =
    data.markdownRemark.frontmatter;
  return (
    <SingleColumnPage
      pageHeading={page_heading}
      markdownArray={press_links}
      metaTitle={title}
      metaDescription={meta_description}
    />
  );
};

export const query = graphql`
  query PressPage {
    markdownRemark(frontmatter: { key: { eq: "press-page" } }) {
      frontmatter {
        meta_description
        page_heading
        title
        press_links
      }
    }
  }
`;

export default PressPage;
