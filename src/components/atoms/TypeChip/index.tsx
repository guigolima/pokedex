import React from "react";
import { StyledChip } from "./styles";
import { TypeChipProps } from "./types";
import { typeColors } from "../../../constants/typeColors";

export const TypeChip: React.FC<TypeChipProps> = ({ type }) => {
  const backgroundColor = typeColors[type] || "#777";

  return <StyledChip label={type} size="small" style={{ backgroundColor }} />;
};
