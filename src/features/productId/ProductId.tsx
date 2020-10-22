import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { numberWithCommas } from '../../utils/numberWithCommas';

import { Counter } from '../counter/Counter';

import {
  selectProduct,
  fetchProduct,
} from './productIdSlice';

import styles from './ProductId.module.css';

interface MatchParams {
  id: string;
}

export function ProductId({ match }: RouteComponentProps<MatchParams>) {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      <div className="flex flex-row items-center py-4 border-b border-gray-300 mb-8">
        <div>
          <Link
            to="/"
            className="text-blue-500 mr-4"
          >
            Home
          </Link>
        </div>
        <div>/</div>
        <div className="ml-4">
          { product.name }
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div
          className={ [
            'border border-gray-300 rounded flex flex-shrink-0',
            'relative w-1/2 mx-auto xl:mr-8 xl:ml-0',
            styles.square,
          ].join(' ') }
        >
          <img
            src={ product.image_url }
            alt={ product.name }
            className="w-full h-full absolute object-cover rounded"
          />
        </div>
        <div>
          <div className="mb-4 font-bold text-3xl">
            { product.name }
          </div>
          <div className="mb-4 text-gray-700">
            { product.description }
          </div>
          <div className="mb-4 text-secondary font-bold">
            { `฿${numberWithCommas(product.price)}` }
          </div>
          <div className="mb-4">
            <Counter />
          </div>
          <div>
            <button
              className="text-white bg-primary py-1 px-4 text-center rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
