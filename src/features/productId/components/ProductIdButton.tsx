import React from 'react';

type Props = {
  label: string;
}

const ProductIdButton: React.FC<Props> = (props) => {
  return (
    <button
      className="text-white bg-primary py-1 px-4 text-center rounded"
    >
      { props.label }
    </button>
  );
};

export default React.memo(ProductIdButton);
