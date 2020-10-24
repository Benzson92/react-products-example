import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { ApiGetProductId } from '../../services/api/products/ApiGetProductId'
import { ProductDTO } from '../../models/product/ProductDTO';

interface ProductIdState {
  product: ProductDTO;
}

const initialState: ProductIdState = {
  product: {
    _id: '',
    name: '',
    image_url: '',
    description: '',
    price: '',
    brand_info: {
      id: '',
      name: '',
      url: '',
    },
  }
};

export const productIdSlice = createSlice({
  name: 'productId',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProduct: (state, action: PayloadAction<ProductDTO>) => {
      state.product = { ...action.payload };
    },
  },
});

export const { setProduct } = productIdSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchProduct = (id: string): AppThunk => async dispatch => {
  const api = new ApiGetProductId();
  const response = await api.get(id);
  dispatch(setProduct(response.data));
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProduct = (state: RootState) => state.productId.product;

export default productIdSlice.reducer;