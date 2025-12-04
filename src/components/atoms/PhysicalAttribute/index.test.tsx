import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhysicalAttribute from ".";
import HeightIcon from "@mui/icons-material/Height";

describe("PhysicalAttribute Component", () => {
  it("renders physical attribute", () => {
    const { container } = render(
      <PhysicalAttribute 
        label="Height" 
        value="1.0 m" 
        icon={<HeightIcon />} 
      />
    );
    expect(container).toBeInTheDocument();
  });
});
