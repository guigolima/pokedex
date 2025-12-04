import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import compareReducer from "../../../redux/slices/compareSlice";
import { MainLayout } from "./index";

const testStore = configureStore({
  reducer: {
    compare: compareReducer,
  },
});

describe("MainLayout Component", () => {
  it("renders main layout", () => {
    const { container } = render(
      <Provider store={testStore}>
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
