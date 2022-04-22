import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './events.module.scss';

const EventsPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section className={styles.eventsSection}>
        <div className={styles.eventsBlock}>
          <h1 className={styles.eventsHeading}>{content.page_heading}</h1>
          {content.event_listings.map((eventListing) => {
            return (
              <MarkdownContent
                tag="div"
                content={eventListing}
                className={styles.eventListing}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query EventsPage {
    markdownRemark(frontmatter: { key: { eq: "events-page" } }) {
      frontmatter {
        meta_description
        page_heading
        title
        event_listings
      }
    }
  }
`;

export default EventsPage;
