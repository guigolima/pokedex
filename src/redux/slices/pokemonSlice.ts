import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonList, getPokemonDetails } from "../../api/requests";
import { Pokemon } from "../../types/pokemon";

export interface PokemonState {
  list: Pokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  nextUrl: string | null;
  hasMore: boolean;
}

interface FetchPokemonPayload {
  pokemon: Pokemon[];
  nextUrl: string | null;
  hasMore: boolean;
}

const initialState: PokemonState = {
  list: [],
  loading: "idle",
  error: null,
  nextUrl: null,
  hasMore: true,
};

const fetchDetailedPokemon = async (results: any[]): Promise<Pokemon[]> => {
  return Promise.all(
    results.map(async (item) => {
      const detail = await getPokemonDetails(item.name);
      return detail as Pokemon;
    })
  );
};

export const fetchPokemonList = createAsyncThunk<
  FetchPokemonPayload,
  void,
  { rejectValue: string }
>("pokemon/fetchList", async (_, { rejectWithValue }) => {
  try {
    const response = await getPokemonList();
    const detailed = await fetchDetailedPokemon(response.results);

    return {
      pokemon: detailed,
      nextUrl: response.next,
      hasMore: !!response.next,
    };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchNextPage = createAsyncThunk<
  FetchPokemonPayload,
  void,
  { rejectValue: string; state: { pokemon: PokemonState } }
>("pokemon/fetchNextPage", async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { nextUrl } = state.pokemon;

    if (!nextUrl) {
      return rejectWithValue("No more pages available");
    }

    const url = new URL(nextUrl, "https://pokeapi.co");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const limit = parseInt(url.searchParams.get("limit") || "20");

    const response = await getPokemonList(offset, limit);
    const detailed = await fetchDetailedPokemon(response.results);

    return {
      pokemon: detailed,
      nextUrl: response.next,
      hasMore: !!response.next,
    };
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
        state.list = action.payload.pokemon;
        state.nextUrl = action.payload.nextUrl;
        state.hasMore = action.payload.hasMore;
        state.error = null;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      })
      .addCase(fetchNextPage.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.list.push(...action.payload.pokemon);
        state.nextUrl = action.payload.nextUrl;
        state.hasMore = action.payload.hasMore;
        state.error = null;
      })
      .addCase(fetchNextPage.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default pokemonSlice.reducer;
