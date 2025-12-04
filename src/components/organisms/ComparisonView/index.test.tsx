import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "../../../redux/slices/compareSlice";
import ComparisonView from "./index";

jest.mock("../../../api/requests", () => ({
  getPokemonDetails: jest.fn(),
}));

const testStore = configureStore({
  reducer: {
    compare: compareReducer,
  },
});

describe("ComparisonView Component", () => {
  it("renders comparison view", () => {
    const { container } = render(
      <Provider store={testStore}>
        <ComparisonView />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
