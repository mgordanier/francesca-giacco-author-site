import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './about.module.scss';

const AboutPage = ({ data, pageContext }) => {
  const content = data.markdownRemark.frontmatter;
  const authorPhoto = getImage(content.author_photo);
  return (
    <Layout>
      <section className={styles.aboutSection}>
        <div className={styles.aboutBlock}>
          <GatsbyImage
            image={authorPhoto}
            alt={content.author_photo_alt_text}
            className={styles.image}
          />
          <div>
            <h1>{content.page_heading}</h1>
            <MarkdownContent tag="div" content={content.about} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { key: { eq: "about-page" } }) {
      frontmatter {
        about
        author_photo {
          childImageSharp {
            gatsbyImageData
          }
        }
        author_photo_alt_text
        meta_description
        page_heading
        title
      }
    }
  }
`;

export default AboutPage;