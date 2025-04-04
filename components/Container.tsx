import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="max-w-6xl mx-auto">{children}</div>;
}

export default Container;
