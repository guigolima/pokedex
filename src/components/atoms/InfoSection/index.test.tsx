import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoSection from ".";

describe("InfoSection Component", () => {
  it("renders info section", () => {
    const { container } = render(
      <InfoSection title="Test Title">
        <div>Test Content</div>
      </InfoSection>
    );
    expect(container).toBeInTheDocument();
  });
});
