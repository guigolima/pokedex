import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PokemonGrid } from "./index";
import favoritesReducer from "../../../redux/slices/favoritesSlice";
import compareReducer from "../../../redux/slices/compareSlice";

const mockPokemons = [
  {
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
  },
];

const createTestStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
      compare: compareReducer,
    },
  });
};

describe("PokemonGrid Component", () => {
  it("renders all pokemon cards", () => {
    const store = createTestStore();
    const mockOnClick = jest.fn();

    render(
      <Provider store={store}>
        <PokemonGrid pokemons={mockPokemons} onPokemonClick={mockOnClick} />
      </Provider>
    );

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  });
});
