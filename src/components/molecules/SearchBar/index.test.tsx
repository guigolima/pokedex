import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "./index";

describe("SearchBar Component", () => {
  it("renders search bar", () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <SearchBar value="" onChange={mockOnChange} />
    );
    expect(container).toBeInTheDocument();
  });
});
