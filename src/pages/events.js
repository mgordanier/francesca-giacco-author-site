import * as React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/Layout';
import Metas from '../components/Metas';
import MarkdownContent from '../components/MarkdownContent';
import * as styles from './events.module.scss';

const EventsPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Metas title={content.title} description={content.meta_description} />
      <section className={styles.eventsSection}>
        <div className={styles.eventsBlock}>
          <h1 className={styles.eventsHeading}>{content.page_heading}</h1>
          {content.event_listings.map((eventListing) => {
            return (
              <MarkdownContent
                key={uuidv4()}
                tag="div"
                gst
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
