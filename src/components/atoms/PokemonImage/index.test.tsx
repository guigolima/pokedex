import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonImage from ".";

describe("PokemonImage Component", () => {
  it("renders pokemon image", () => {
    const { container } = render(
      <PokemonImage imageUrl="https://example.com/pikachu.png" name="pikachu" />
    );
    expect(container).toBeInTheDocument();
  });
});
