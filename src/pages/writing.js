import * as React from 'react';
import { graphql } from 'gatsby';
import SingleColumnPage from '../components/SingleColumnPage';

const WritingPage = ({ data }) => {
  const { page_heading, writing_links, title, meta_description } =
    data.markdownRemark.frontmatter;
  return (
    <SingleColumnPage
      pageHeading={page_heading}
      markdownArray={writing_links}
      metaTitle={title}
      metaDescription={meta_description}
    />
  );
};

export const query = graphql`
  query WritingPage {
    markdownRemark(frontmatter: { key: { eq: "writing-page" } }) {
      frontmatter {
        meta_description
        page_heading
        title
        writing_links
      }
    }
  }
`;

export default WritingPage;
