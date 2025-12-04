import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "../../../redux/slices/compareSlice";
import AppHeader from ".";

const testStore = configureStore({
  reducer: {
    compare: compareReducer,
  },
});

describe("AppHeader Component", () => {
  it("renders app header", () => {
    const { container } = render(
      <Provider store={testStore}>
        <AppHeader currentTab={0} onTabChange={() => {}} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
