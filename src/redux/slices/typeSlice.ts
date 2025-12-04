import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPokemonTypes } from "../../api/requests";

interface TypesState {
  allTypes: string[];
  selectedType: string | null;
  loading: boolean;
  error?: string | null;
}

const initialState: TypesState = {
  allTypes: [],
  selectedType: null,
  loading: false,
  error: null,
};

export const fetchAllTypes = createAsyncThunk("types/fetchAll", async () => {
  const data = await getPokemonTypes();
  return (data.results || []).map((t: any) => t.name);
});

const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    selectType(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
    clearSelectedType(state) {
      state.selectedType = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllTypes.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.allTypes = action.payload;
        }
      )
      .addCase(fetchAllTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch types";
      });
  },
});

export const { selectType, clearSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
