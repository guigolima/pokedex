import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonInfoPanel from ".";

jest.mock("../../../api/requests", () => ({
  getPokemonTypes: jest.fn(() => Promise.resolve([])),
  getPokemonsByType: jest.fn(() => Promise.resolve({ pokemon: [] })),
}));

describe("PokemonInfoPanel Component", () => {
  it("renders pokemon info panel", () => {
    const { container } = render(
      <PokemonInfoPanel
        imageUrl="https://example.com/pikachu.png"
        name="pikachu"
        types={["electric"]}
        abilities={["static", "lightning-rod"]}
        height={4}
        weight={60}
        baseExperience={112}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
