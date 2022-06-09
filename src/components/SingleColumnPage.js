import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Layout from './Layout';
import Metas from './Metas';
import MarkdownContent from './MarkdownContent';
import * as styles from './SingleColumnPage.module.scss';

const SingleColumnPage = ({
  pageHeading,
  markdownArray,
  metaTitle,
  metaDescription,
}) => {
  return (
    <Layout>
      <Metas title={metaTitle} description={metaDescription} />
      <section className={styles.section}>
        <div className={styles.block}>
          <h1 className={styles.heading}>{pageHeading}</h1>
          {markdownArray.map((content) => {
            return (
              <MarkdownContent
                key={uuidv4()}
                tag="div"
                content={content}
                className={styles.contentItem}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default SingleColumnPage;
