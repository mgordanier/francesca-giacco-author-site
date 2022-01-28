import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './writing.module.scss';

const WritingPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section className={styles.writingSection}>
        <div className={styles.writingBlock}>
          <h1>{content.page_heading}</h1>
          {content.writing_links.map((writingLink) => {
            return (
              <MarkdownContent
                tag="div"
                content={writingLink}
                className={styles.writingLink}
              />
            );
          })}
        </div>
      </section>
    </Layout>
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
