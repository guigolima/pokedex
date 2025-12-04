import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './slices/pokemonSlice';
import typeReducer from './slices/typeSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    types: typeReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;