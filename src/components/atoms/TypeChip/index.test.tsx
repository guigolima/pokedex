import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypeChip from ".";

describe("TypeChip Component", () => {
  it("renders type chip", () => {
    const { container } = render(<TypeChip type="fire" />);
    expect(container).toBeInTheDocument();
  });
});
