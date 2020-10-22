import React, { useState } from 'react';
import CounterButton from './components/CounterButton';

import CounterIconMinus from './icons/CounterIconMinus';
import CounterIconPlus from './icons/CounterIconPlus';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <div className="flex flex-row items-center">
        <CounterButton
          ariaLabel={ 'minus' }
          renderIcon={ (
            <CounterIconMinus />
          ) }
          onClick={ () => setIncrementAmount(incrementAmount - 1) }
        />
        <span className="py-2 px-3 border-t border-b border-gray-300 leading-4">
          { incrementAmount }
        </span>
        <CounterButton
          ariaLabel={ 'plus' }
          renderIcon={ (
            <CounterIconPlus />
          ) }
          onClick={ () => setIncrementAmount(incrementAmount + 1) }
        />
      </div>
    </div>
  );
}
