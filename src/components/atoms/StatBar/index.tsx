import React from "react";
import { Typography } from "@mui/material";
import { StatBarProps } from "./types";
import {
  StatBarContainer,
  StatBarHeader,
  StatBarTrack,
  StatBarFill,
} from "./styles";

export const StatBar: React.FC<StatBarProps> = React.memo(
  ({ statName, value, color }) => (
    <StatBarContainer>
      <StatBarHeader>
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            minWidth: "120px",
          }}
        >
          {statName}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ minWidth: "45px", textAlign: "right" }}
        >
          {value}
        </Typography>
      </StatBarHeader>
      <StatBarTrack>
        <StatBarFill value={value} color={color} />
      </StatBarTrack>
    </StatBarContainer>
  )
);

export default StatBar;
