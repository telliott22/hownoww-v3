import { FunctionComponent } from 'react';
import PortableText from 'react-portable-text';

const serializers = {
};

const RichText: FunctionComponent<{ content: [Object], className?: string }> = function ({ content, className }) {
  if (content) {
    return <PortableText className={`${className} space-y-8`} content={content} serializers={serializers} />;
  }
  return null;
};

RichText.defaultProps = {
  className: '',
};

export default RichText;
