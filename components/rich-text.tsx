import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const RichText: FunctionComponent<{ content: string, className?: string }> = function ({ content, className }) {
  if (content) {
    return (
      <ReactMarkdown className={`${className} space-y-8`} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    );
  }
  return null;
};

RichText.defaultProps = {
  className: '',
};

export default RichText;
