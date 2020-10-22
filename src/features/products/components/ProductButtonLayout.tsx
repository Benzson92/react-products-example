import React from 'react';

type Props = {
  activeLayout: string;
  ariaLabel: string;
  renderIcon: React.ReactElement;
  onClick: () => void;
}

const ProductButtonLayout: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      aria-label={ props.ariaLabel }
      className={ [
        props.activeLayout === props.ariaLabel ? 'text-white bg-primary border-primary' : 'border-gray-300',
        props.ariaLabel === 'grid' ? 'rounded-l' : 'rounded-r',
        'focus:outline-none p-2 border',
      ].join(' ') }
      onClick={ () => props.onClick() }
    >
      { props.renderIcon }
    </button>
  );
};

export default ProductButtonLayout;
