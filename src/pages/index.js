import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './index.module.scss';

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  const bookCoverImage = getImage(content.book_cover_image);
  const authorPhoto = getImage(content.author_photo);

  return (
    <Layout>
      <section className={styles.bookIntroSection}>
        <div className={styles.bookIntroBlock}>
          <h1 className={styles.bookCoverImage}>
            <GatsbyImage
              image={bookCoverImage}
              alt={content.book_cover_alt_text}
            />
          </h1>
          <div className={styles.pitchTextBlock}>
            <MarkdownContent
              tag="div"
              className={styles.pitch}
              content={content.book_pitch}
            />
            <MarkdownContent tag="div" content={content.book_description} />
          </div>
        </div>
      </section>
      <section className={styles.buySection}>
        <div className={styles.buyBlock}>
          <h2 className={styles.buyHeading}>{content.buy_heading}</h2>
          <div className={styles.buttonBlock}>
            {content.buy_button.map((button) => {
              return (
                <a
                  key={uuidv4()}
                  href={button.vendor_link}
                  className={styles.button}
                >
                  {button.vendor_name}
                </a>
              );
            })}
          </div>
          <div className={styles.praiseBlock}>
            {content.praise.map((praise) => {
              return (
                <figure key={uuidv4()}>
                  <MarkdownContent tag="blockquote" content={praise.quote} />
                  <MarkdownContent
                    tag="figcaption"
                    content={praise.attribution}
                    className={styles.attribution}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.miniAboutSection}>
        <div className={styles.miniAboutBlock}>
          <div className={styles.aboutImage}>
            <GatsbyImage
              image={authorPhoto}
              alt={content.author_photo_alt_text}
            />
            <MarkdownContent tag="div" content={content.author_photo_credit} />
          </div>
          <MarkdownContent
            tag="div"
            content={content.mini_about}
            className={styles.aboutTextBlock}
          />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { key: { eq: "index-page" } }) {
      frontmatter {
        author_photo {
          childImageSharp {
            gatsbyImageData
          }
        }
        author_photo_alt_text
        author_photo_credit
        book_cover_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        book_cover_alt_text
        book_description
        book_pitch
        buy_button {
          vendor_link
          vendor_name
        }
        buy_heading
        meta_description
        mini_about
        praise {
          attribution
          quote
        }
        title
      }
    }
  }
`;

export default IndexPage;
