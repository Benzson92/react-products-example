import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectProducts,
  fetchProducts,
  selectActiveLayout,
  setActiveLayout,
} from './productsSlice';

import ProductGridItem from './components/ProductGridItem';
import ProductListItem from './components/ProductListItem';
import ProductButtonLayout from './components/ProductButtonLayout';

import ProductIconGrid from './icons/ProductIconGrid';
import ProductIconList from './icons/ProductIconList';

export function Products() {
  const products = useSelector(selectProducts);
  const activeLayout = useSelector(selectActiveLayout);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="m-4 flex flex-row justify-end pb-4 border-b border-gray-300">
        <div className="">
          <ProductButtonLayout
            activeLayout={ activeLayout }
            ariaLabel={ 'grid' }
            renderIcon={ (
              <ProductIconGrid />
            ) }
            onClick={ () => dispatch(setActiveLayout('grid')) }
          />
        </div>
        <div className="">
          <ProductButtonLayout
            activeLayout={ activeLayout }
            ariaLabel={ 'list' }
            renderIcon={ (
              <ProductIconList />
            ) }
            onClick={ () => dispatch(setActiveLayout('list')) }
          />
        </div>
      </div>
      { activeLayout === 'grid' ? (
        <div className="w-full flex flex-wrap">
          { products.map((item) => (
            <div
              key={ item._id }
              className="w-full md:w-1/3 xl:w-1/4 p-4"
            >
              <ProductGridItem
                product={ item }
              />
            </div>
          )) }
        </div>
      ) : (
        <div className="w-full">
          { products.map((item) => (
            <div
              key={ item._id }
              className="mb-8"
            >
              <ProductListItem
                product={ item }
              />
            </div>
          )) }
        </div>
      ) }
    </div>
  );
}
