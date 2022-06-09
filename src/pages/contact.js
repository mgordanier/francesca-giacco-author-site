import * as React from 'react';
import { graphql } from 'gatsby';
import SingleColumnPage from '../components/SingleColumnPage';

const ContactPage = ({ data }) => {
  const { page_heading, contacts, title, meta_description } =
    data.markdownRemark.frontmatter;

  return (
    <SingleColumnPage
      pageHeading={page_heading}
      markdownArray={contacts}
      metaTitle={title}
      metaDescription={meta_description}
    />
  );
};

export const query = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { key: { eq: "contact-page" } }) {
      frontmatter {
        meta_description
        page_heading
        title
        contacts
      }
    }
  }
`;

export default ContactPage;
