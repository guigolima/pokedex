import { styled, Box } from "@mui/material";

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.02)",
  borderRadius: 2,
  padding: 2,
  marginBottom: 2,
  minHeight: "300px",
}));

export const StyledImage = styled("img")({
  maxHeight: "280px",
  maxWidth: "100%",
  objectFit: "contain",
});
