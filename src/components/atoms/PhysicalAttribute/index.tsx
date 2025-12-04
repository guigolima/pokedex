import React from "react";
import { Box, Typography } from "@mui/material";
import { PhysicalAttributeProps } from "./types";

export const PhysicalAttribute: React.FC<PhysicalAttributeProps> = React.memo(
  ({ label, value, icon }) => (
    <Box display="flex" alignItems="center" gap={1.5}>
      {icon}
      <Box flex={1}>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
  )
);

export default PhysicalAttribute;
