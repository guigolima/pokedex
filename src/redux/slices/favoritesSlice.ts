import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favoriteIds: number[];
}

const initialState: FavoritesState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      const index = state.favoriteIds.indexOf(id);
      if (index > -1) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(id);
      }
    },
    addFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (!state.favoriteIds.includes(id)) {
        state.favoriteIds.push(id);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.favoriteIds = state.favoriteIds.filter((fav) => fav !== id);
    },
    clearFavorites(state) {
      state.favoriteIds = [];
    },
  },
});

export const { toggleFavorite, addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
