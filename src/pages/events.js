import * as React from 'react';
import { graphql } from 'gatsby';
import SingleColumnPage from '../components/SingleColumnPage';

const EventsPage = ({ data }) => {
  const { page_heading, title, meta_description } =
    data.markdownRemark.frontmatter;

  return (
    <SingleColumnPage
      pageHeading={page_heading}
      markdownArray={[
        'No upcoming events. Please check back later for updates.',
      ]}
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
      }
    }
  }
`;

export default EventsPage;
