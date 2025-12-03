import { styled } from "@mui/material/styles";
import { Card, Box, Stack, IconButton } from "@mui/material";

export const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const StyledActionButtonStack = styled(Stack)({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 10,
});

export const StyledImageContainerBox = styled(Box)({
  height: 140,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTypeChipBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const StyledIconButton = styled(IconButton)({
  backgroundColor: "rgba(255,255,255,0.7)",
});
