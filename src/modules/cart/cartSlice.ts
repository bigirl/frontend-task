import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { CartProduct } from '../product/types';

export interface CartState {
  cart: CartProduct[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  cart: [],
  status: 'idle',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    }
  },
});

export const { update } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
