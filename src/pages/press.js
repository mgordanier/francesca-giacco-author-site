import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/Layout';
import Metas from '../components/Metas';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './press.module.scss';

const PressPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Metas title={content.title} description={content.meta_description} />
      <section className={styles.pressSection}>
        <div className={styles.pressBlock}>
          <h1 className={styles.pressHeading}>{content.page_heading}</h1>
          {content.press_links.map((pressLink) => {
            return (
              <MarkdownContent
                key={uuidv4()}
                tag="div"
                content={pressLink}
                className={styles.pressLink}
              />
            );
          })}
        </div>
      </section>
    </Layout>
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
