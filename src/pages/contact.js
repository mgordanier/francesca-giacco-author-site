import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';

const ContactPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section>
        <div>
          <h1>{content.page_heading}</h1>
          {content.contacts.map((contact) => {
            return <MarkdownContent tag="div" content={contact} />;
          })}
        </div>
      </section>
    </Layout>
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
