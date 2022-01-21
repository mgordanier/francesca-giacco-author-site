import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './index.module.scss';

const IndexPage = ({ data }) => {
  const content = data.allMarkdownRemark.nodes[0].frontmatter;
  const bookCoverImage = getImage(content.book_cover_image);
  const authorPhoto = getImage(content.author_photo);

  return (
    <Layout>
      <section className={styles.bookIntroSection}>
        <div className={styles.bookIntroBlock}>
          <h1>
            <GatsbyImage
              image={bookCoverImage}
              alt={content.book_cover_alt_text}
              className={styles.image}
            />
          </h1>
          <div className={styles.textBlock}>
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
          <h2>{content.buy_heading}</h2>
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
                <figure key={uuidv4()} className={styles.praise}>
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
          <GatsbyImage
            image={authorPhoto}
            alt={content.author_photo_alt_text}
            className={styles.image}
          />
          <MarkdownContent
            tag="div"
            content={content.mini_about}
            className={styles.textBlock}
          />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query LandingPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          praise {
            attribution
            quote
          }
          buy_button {
            vendor_link
            vendor_name
          }
          author_photo {
            childImageSharp {
              gatsbyImageData
            }
          }
          author_photo_alt_text
          book_cover_alt_text
          book_cover_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          book_description
          book_pitch
          buy_heading
          mini_about
          title
        }
      }
    }
  }
`;

export default IndexPage;
