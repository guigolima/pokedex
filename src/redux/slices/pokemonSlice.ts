import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonList, getPokemonDetails } from "../../api/requests";
import { Pokemon } from "../../types/pokemon";

export interface PokemonState {
  list: Pokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  loading: "idle",
  error: null,
};

export const fetchPokemonList = createAsyncThunk<
  Pokemon[],
  void,
  { rejectValue: string }
>("pokemon/fetchList", async (_, { rejectWithValue }) => {
  try {
    const response = await getPokemonList();

    const detailed: Pokemon[] = await Promise.all(
      response.results.map(async (item) => {
        const detail = await getPokemonDetails(item.name);
        return detail as Pokemon;
      })
    );

    return detailed;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default pokemonSlice.reducer;
