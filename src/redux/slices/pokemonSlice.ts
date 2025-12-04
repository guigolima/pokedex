import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPokemonList,
  getPokemonDetails,
  getPokemonsByType,
} from "../../api/requests";
import { Pokemon } from "../../types/pokemon";

export interface PokemonState {
  list: Pokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  offset: number;
  limit: number;
  hasMore: boolean;
}

interface FetchPokemonPayload {
  pokemon: Pokemon[];
  hasMore: boolean;
}

const initialState: PokemonState = {
  list: [],
  loading: "idle",
  error: null,
  offset: 0,
  limit: 12,
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
    const response = await getPokemonList(0, 12);
    const detailed = await fetchDetailedPokemon(response.results);

    return {
      pokemon: detailed,
      hasMore: !!response.next,
    };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchPokemonByName = createAsyncThunk<
  FetchPokemonPayload,
  string,
  { rejectValue: string }
>("pokemon/fetchByName", async (name: string, { rejectWithValue }) => {
  try {
    const detail = await getPokemonDetails(name);
    const pokemon = (detail ? [detail as Pokemon] : []) as Pokemon[];
    return {
      pokemon,
      hasMore: false,
    };
  } catch (error: any) {
    return rejectWithValue(error.message || "Not found");
  }
});

export const fetchPokemonsByType = createAsyncThunk<
  FetchPokemonPayload,
  string,
  { rejectValue: string }
>("pokemon/fetchByType", async (type: string, { rejectWithValue }) => {
  try {
    const response = await getPokemonsByType(type);
    const results = (response?.pokemon || []).map((p: any) => p.pokemon);
    const detailed = await fetchDetailedPokemon(results);
    return {
      pokemon: detailed,
      hasMore: false,
    };
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch by type");
  }
});

export const fetchNextPage = createAsyncThunk<
  FetchPokemonPayload,
  void,
  { rejectValue: string; state: { pokemon: PokemonState } }
>("pokemon/fetchNextPage", async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState();
    const { offset, limit, hasMore } = state.pokemon;

    if (!hasMore) {
      return rejectWithValue("No more pages available");
    }

    const nextOffset = offset + limit;
    const response = await getPokemonList(nextOffset, limit);
    const detailed = await fetchDetailedPokemon(response.results);

    return {
      pokemon: detailed,
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
        state.offset = 0;
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
        state.offset = state.offset + state.limit;
        state.hasMore = action.payload.hasMore;
        state.error = null;
      })
      .addCase(fetchNextPage.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.list = action.payload.pokemon;
        state.offset = 0;
        state.hasMore = action.payload.hasMore;
        state.error = null;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Pokemon not found";
        state.list = [];
        state.offset = 0;
        state.hasMore = false;
      })
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.list = action.payload.pokemon;
        state.offset = 0;
        state.hasMore = action.payload.hasMore;
        state.error = null;
      })
      .addCase(fetchPokemonsByType.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Failed to fetch by type";
        state.list = [];
        state.offset = 0;
        state.hasMore = false;
      });
  },
});

export default pokemonSlice.reducer;
