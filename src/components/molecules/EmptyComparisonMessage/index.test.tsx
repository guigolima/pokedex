import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyComparisonMessage from "./index";

describe("EmptyComparisonMessage Component", () => {
  it("renders empty comparison message", () => {
    const { container } = render(<EmptyComparisonMessage />);
    expect(container).toBeInTheDocument();
  });
});
