import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../../redux/slices/favoritesSlice";
import compareReducer from "../../../redux/slices/compareSlice";
import PokemonCard from ".";

const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    front_default: "https://example.com/bulbasaur.png",
    other: {
      "official-artwork": {
        front_default: "https://example.com/bulbasaur-official.png",
      },
    },
  },
  types: [
    {
      type: {
        name: "grass",
      },
    },
  ],
};

const createTestStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
      compare: compareReducer,
    },
  });
};

describe("PokemonCard Component", () => {
  it("renders pokemon name", () => {
    const store = createTestStore();
    const mockOnClick = jest.fn();

    render(
      <Provider store={store}>
        <PokemonCard pokemon={mockPokemon} onPokemonClick={mockOnClick} />
      </Provider>
    );

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  });
});
