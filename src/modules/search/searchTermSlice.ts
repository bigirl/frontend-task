import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface SearchTermState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SearchTermState = {
  value: "",
  status: 'idle',
};

export const searchTermSlice = createSlice({
  name: 'term',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { update } = searchTermSlice.actions;

export const selectTerm = (state: RootState) => state.term.value;

export default searchTermSlice.reducer;
