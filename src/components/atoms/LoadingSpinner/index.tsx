import React from "react";
import { CircularProgress } from "@mui/material";
import { StyledBox } from "./styles";

export const LoadingSpinner: React.FC = () => {
  return (
    <StyledBox>
      <CircularProgress color="primary" />
    </StyledBox>
  );
};
