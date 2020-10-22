import React from 'react';

type Props = {
  ariaLabel: string;
  renderIcon: React.ReactElement;
  onClick: () => void;
}

const CounterButton: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      aria-label={ props.ariaLabel }
      className={ [
        props.ariaLabel === 'minus' ? 'rounded-l' : 'rounded-r',
        'focus:outline-none p-2 border border-gray-300',
      ].join(' ') }
      onClick={ () => props.onClick() }
    >
      { props.renderIcon }
    </button>
  );
};

export default CounterButton;
