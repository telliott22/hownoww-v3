import { FunctionComponent } from 'react';

const Container: FunctionComponent = function ({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
      { children }
    </div>
  );
};

export default Container;
