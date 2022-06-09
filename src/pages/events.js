import * as React from 'react';
import { graphql } from 'gatsby';
import SingleColumnPage from '../components/SingleColumnPage';

const EventsPage = ({ data }) => {
  const { page_heading, event_listings, title, meta_description } =
    data.markdownRemark.frontmatter;

  return (
    <SingleColumnPage
      pageHeading={page_heading}
      markdownArray={event_listings}
      metaTitle={title}
      metaDescription={meta_description}
    />
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
