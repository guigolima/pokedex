import { styled, Box } from "@mui/material";
import { StatBarFillProps } from "./types";

export const MAX_STAT_VALUE = 255;

export const StatBarContainer = styled(Box)({
  width: "100%",
});

export const StatBarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 0.5,
}));

export const StatName = styled(Box)(({ theme }) => ({
  textTransform: "capitalize",
  fontWeight: 600,
  minWidth: "120px",
}));

export const StatValue = styled(Box)({
  minWidth: "45px",
  textAlign: "right",
});

export const StatBarTrack = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "8px",
  backgroundColor: "rgba(0,0,0,0.1)",
  borderRadius: 1,
  overflow: "hidden",
}));

export const StatBarFill = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith("$"),
})<StatBarFillProps>(({ value, color }) => ({
  height: "100%",
  width: `${Math.min((value / MAX_STAT_VALUE) * 100, 100)}%`,
  backgroundColor: color,
  transition: "width 0.5s ease",
}));
