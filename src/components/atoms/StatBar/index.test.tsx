import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StatBar from ".";

describe("StatBar Component", () => {
  it("renders stat bar", () => {
    const { container } = render(
      <StatBar statName="HP" value={100} color="#FF0000" />
    );
    expect(container).toBeInTheDocument();
  });
});
