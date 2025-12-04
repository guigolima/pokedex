import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompareState {
  compareIds: number[];
  maxCompare: number;
}

const initialState: CompareState = {
  compareIds: [],
  maxCompare: 4,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (!state.compareIds.includes(id) && state.compareIds.length < state.maxCompare) {
        state.compareIds.push(id);
      }
    },
    removeFromCompare(state, action: PayloadAction<number>) {
      state.compareIds = state.compareIds.filter((id) => id !== action.payload);
    },
    toggleCompare(state, action: PayloadAction<number>) {
      const id = action.payload;
      const index = state.compareIds.indexOf(id);
      if (index > -1) {
        state.compareIds.splice(index, 1);
      } else if (state.compareIds.length < state.maxCompare) {
        state.compareIds.push(id);
      }
    },
    clearCompare(state) {
      state.compareIds = [];
    },
  },
});

export const { addToCompare, removeFromCompare, toggleCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
