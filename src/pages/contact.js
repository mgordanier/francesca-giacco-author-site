import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/Layout';
import Metas from '../components/Metas';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './contact.module.scss';

const ContactPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Metas title={content.title} description={content.meta_description} />
      <section className={styles.contactSection}>
        <div className={styles.contactBlock}>
          <h1 className={styles.contactHeading}>{content.page_heading}</h1>
          {content.contacts.map((contact) => {
            return (
              <MarkdownContent
                key={uuidv4()}
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
