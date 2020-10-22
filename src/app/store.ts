import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import productIdReducer from '../features/productId/productIdSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productId: productIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
