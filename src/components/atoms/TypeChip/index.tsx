import React from "react";
import { StyledChip } from "./styles";
import { TypeChipProps } from "./types";
import { typeColors } from "../../../constants/typeColors";

const TypeChip: React.FC<TypeChipProps> = ({ type }) => {
  return (
    <StyledChip
      label={type}
      size="small"
      style={{ backgroundColor: typeColors[type] }}
    />
  );
};

export default TypeChip;