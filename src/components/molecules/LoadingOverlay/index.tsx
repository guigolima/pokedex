import React from "react";
import { Box } from "@mui/material";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";

interface LoadingOverlayProps {
  isOpen: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="rgba(0, 0, 0, 0.6)"
      zIndex={9999}
    >
      <LoadingSpinner />
    </Box>
  );
};

export default LoadingOverlay;