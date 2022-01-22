import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';

const WritingPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <section>
        <div>
          <h1>{content.page_heading}</h1>
          {content.writing_links.map((writingLink) => {
            return <MarkdownContent tag="div" content={writingLink} />;
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
