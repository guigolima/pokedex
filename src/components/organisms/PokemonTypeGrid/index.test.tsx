import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import typesReducer from "../../../redux/slices/typeSlice";
import pokemonReducer from "../../../redux/slices/pokemonSlice";
import PokemonTypeGrid from "./index";

jest.mock("../../../api/requests", () => ({
  getPokemonTypes: jest.fn(() => Promise.resolve([])),
  getPokemonsByType: jest.fn(() => Promise.resolve({ pokemon: [] })),
}));

const testStore = configureStore({
  reducer: {
    types: typesReducer,
    pokemon: pokemonReducer,
  },
});

describe("PokemonTypeGrid Component", () => {
  it("renders pokemon type grid", () => {
    const { container } = render(
      <Provider store={testStore}>
        <PokemonTypeGrid onTypeSelect={() => {}} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
