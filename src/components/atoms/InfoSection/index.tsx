import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoSectionProps } from "./types";

export const InfoSection: React.FC<InfoSectionProps> = React.memo(
  ({ title, children }) => (
    <Box>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  )
);

export default InfoSection;
