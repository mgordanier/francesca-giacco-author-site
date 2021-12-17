import * as React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const MarkdownContent = ({ content, tag, className }) => {
  const Tag = tag;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  );
};

export default MarkdownContent;
