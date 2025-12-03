import { createSlice } from "@reduxjs/toolkit";

export interface ListPokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  list: ListPokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  loading: "idle",
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;