import React from 'react';
import { Link } from "react-router-dom";
import { numberWithCommas } from '../../../utils/numberWithCommas';

import { ProductDTO } from '../../../models/product/ProductDTO';

import styles from './ProductListItem.module.css';

type Props = {
  product: ProductDTO;
}

const ProductListItem: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <div
      className={ [
        'flex flex-row items-center p-8 rounded',
        'transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'
      ].join(' ') }
    >
      <div className="flex flex-row items-center pr-8">
        <Link
          to={ `/${product._id}`}
        >
          <div className="mr-8 w-40 flex-shrink-0 border border-gray-300 rounded shadow-md">
            <img
              src={ product.image_url }
              alt={ product.name }
              className="w-full h-full object-cover rounded"
            />
          </div>
        </Link>
        <div>
          <Link
            to={ `/${product._id}`}
          >
            <div
              className={ [
                styles.title,
                'mb-4 font-bold',
              ].join(' ') }
            >
              { product.name }
            </div>
          </Link>
          <div
            className={ [
              styles.description,
              'text-gray-700',
            ].join(' ') }
          >
            { product.description }
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 text-secondary font-bold">
          { `฿${numberWithCommas(product.price)}` }
        </div>
        <div>
          <Link
            to={ `/${product._id}`}
          >
            <button
              className="text-white bg-primary py-1 px-4 text-center rounded"
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductListItem);
