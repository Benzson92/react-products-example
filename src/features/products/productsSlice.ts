import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { ApiGetProducts } from '../../services/api/products/ApiGetProducts'
import { ProductDTO } from '../../models/product/ProductDTO';

interface ProductsState {
  products: ProductDTO[];
  activeLayout: string;
}

const initialState: ProductsState = {
  products: [],
  activeLayout: 'grid'
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProducts: (state, action: PayloadAction<ProductDTO[]>) => {
      state.products = [...action.payload];
    },
    setActiveLayout: (state, action: PayloadAction<string>)  => {
      state.activeLayout = action.payload;
    },
  },
});

export const { setProducts, setActiveLayout } = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchProducts = (): AppThunk => async dispatch => {
  const api = new ApiGetProducts();
  const response = await api.get();
  dispatch(setProducts(response.data));
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;
export const selectProducts = (state: RootState) => state.products.products;
export const selectActiveLayout = (state: RootState) => state.products.activeLayout;

export default productsSlice.reducer;
