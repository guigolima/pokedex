import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../../../redux/slices/pokemonSlice";
import favoritesReducer from "../../../redux/slices/favoritesSlice";
import compareReducer from "../../../redux/slices/compareSlice";
import FavoriteGrid from ".";

jest.mock("../../../api/requests", () => ({
  getPokemonDetails: jest.fn(),
}));

const testStore = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorites: favoritesReducer,
    compare: compareReducer,
  },
});

describe("FavoriteGrid Component", () => {
  it("renders favorite grid", () => {
    const { container } = render(
      <Provider store={testStore}>
        <FavoriteGrid onPokemonClick={() => {}} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
