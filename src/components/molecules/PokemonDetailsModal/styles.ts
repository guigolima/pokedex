import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

export const StyledDialogTitle = styled(DialogTitle)({
  textTransform: "capitalize",
  fontWeight: "bolder",
  fontSize: "1.75rem",
  paddingBottom: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledDetailsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledAbilitiesBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 2,
});

export const StatBox = styled(Box)({
  width: "100%",
  height: 8,
  bgcolor: "action.hover",
  borderRadius: 1,
  overflow: "hidden",
});
