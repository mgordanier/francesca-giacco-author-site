import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './contact.module.scss';

const ContactPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section className={styles.contactSection}>
        <div className={styles.contactBlock}>
          <h1 className={styles.contactHeading}>{content.page_heading}</h1>
          {content.contacts.map((contact) => {
            return (
              <MarkdownContent
                tag="div"
                content={contact}
                className={styles.contact}
              />
            );
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
