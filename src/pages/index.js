import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';

const IndexPage = ({ data }) => {
  const content = data.allMarkdownRemark.nodes[0].frontmatter;
  const authorPhoto = getImage(content.author_photo);
  return (
    <Layout>
      <section>
        <h1>Six Days in Rome by Francesca</h1>
        <p>{content.book_pitch}</p>
        <MarkdownContent content={content.book_description} />
      </section>
      <section>
        <h2>{content.buy_heading}</h2>
        <div>
          {content.buy_button.map((button) => {
            return (
              <a key={uuidv4()} href={button.vendor_link}>
                {button.vendor_name}
              </a>
            );
          })}
        </div>
        {content.praise.map((praise) => {
          return (
            <figure key={uuidv4()}>
              <blockquote>{praise.quote}</blockquote>
              <figcaption>{praise.attribution}</figcaption>
            </figure>
          );
        })}
      </section>
      <section>
        <GatsbyImage image={authorPhoto} alt={content.author_photo_alt_text} />
        <p>{content.mini_about}</p>
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
