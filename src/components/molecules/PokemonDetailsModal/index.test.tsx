import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonDetailsModal from "./index";

const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 69,
  base_experience: 64,
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
  abilities: [
    {
      ability: {
        name: "overgrow",
      },
      is_hidden: false,
    },
  ],
  stats: [
    {
      stat: {
        name: "hp",
      },
      base_stat: 45,
    },
  ],
};

describe("PokemonDetailsModal Component", () => {
  it("renders pokemon name when open", () => {
    const mockOnClose = jest.fn();

    render(
      <PokemonDetailsModal open={true} pokemon={mockPokemon} onClose={mockOnClose} />
    );

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
