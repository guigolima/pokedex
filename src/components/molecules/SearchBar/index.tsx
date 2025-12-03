import React from "react";
import { StyledTextField } from "./styles";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <StyledTextField
      fullWidth
      variant="outlined"
      placeholder="Search Pokemon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
