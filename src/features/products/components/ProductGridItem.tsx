import React from 'react';
import { Link } from "react-router-dom";
import { numberWithCommas } from '../../../utils/numberWithCommas';

import { ProductDTO } from '../../../models/product/ProductDTO';

import styles from './ProductGridItem.module.css';

type Props = {
  product: ProductDTO;
}

const ProductGridItem: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <div
      className={ [
        'rounded border border-gray-300 hover:border-opacity-0',
        'transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl',
      ].join(' ') }
    >
      <Link
        to={ `/${product._id}`}
      >
        <div
          className={ [
            styles.imageAspectRatio,
            'w-full relative rounded-t',
          ].join(' ') }
        >
          <img
            src={ product.image_url }
            alt={ product.name }
            className="absolute w-full h-full object-cover rounded-t"
          />
        </div>
      </Link>
      <div className="w-full flex flex-col p-8">
        <div className="w-full flex items-center mb-4">
          <div className="mr-4 w-16 flex-shrink-0">
            <img
              src={ product.brand_info.url }
              alt={ product.brand_info.name }
              className="w-full h-full object-cover rounded"
            />
          </div>
          <Link
            to={ `/${product._id}`}
          >
            <div
              className={ [
                styles.title,
                'font-bold',
              ].join(' ') }
            >
              { product.name }
            </div>
          </Link>
        </div>
        <div
          className={ [
            styles.description,
            'mb-4 text-gray-700',
          ].join(' ') }
        >
          { product.description }
        </div>
        <div className="mb-8 text-secondary font-bold text-right">
          { `฿${numberWithCommas(product.price)}` }
        </div>
        <div>
          <Link
            to={ `/${product._id}`}
          >
            <button
              className="text-white bg-primary py-1 w-full text-center rounded"
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductGridItem);
