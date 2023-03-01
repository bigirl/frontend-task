import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../modules/common/counter/counterSlice';
import termReducer from '../modules/search/searchTermSlice';
import cartReducer from '../modules/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    term: termReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
