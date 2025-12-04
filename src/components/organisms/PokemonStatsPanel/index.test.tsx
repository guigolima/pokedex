import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonStatsPanel from ".";

jest.mock("../../molecules/PokemonStatsChart", () => ({
  __esModule: true,
  default: () => <div>Mock Chart</div>,
}));

describe("PokemonStatsPanel Component", () => {
  it("renders pokemon stats panel", () => {
    const mockStats = [
      { stat: { name: "hp" }, base_stat: 45 },
      { stat: { name: "attack" }, base_stat: 49 },
      { stat: { name: "defense" }, base_stat: 49 },
    ];

    const { container } = render(
      <PokemonStatsPanel
        stats={mockStats}
        pokemonType="grass"
        primaryTypeColor="#78C850"
      />
    );
    expect(container).toBeInTheDocument();
  });
});
