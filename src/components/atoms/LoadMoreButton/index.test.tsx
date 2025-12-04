import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadMoreButton from "./index";

describe("LoadMoreButton Component", () => {
  it("renders load more button", () => {
    const mockHandleLoadMore = jest.fn();
    const { container } = render(
      <LoadMoreButton handleLoadMore={mockHandleLoadMore} loading="idle" />
    );
    expect(container).toBeInTheDocument();
  });
});
