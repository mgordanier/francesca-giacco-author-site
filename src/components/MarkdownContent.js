import * as React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const MarkdownContent = ({ content, className }) => {
  return (
    <div
      className={className || ''}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  );
};

export default MarkdownContent;
