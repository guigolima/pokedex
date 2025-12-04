import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingOverlay } from "./index";

describe("LoadingOverlay Component", () => {
  it("renders loading overlay", () => {
    const { container } = render(<LoadingOverlay isOpen={true} />);
    expect(container).toBeInTheDocument();
  });
});
