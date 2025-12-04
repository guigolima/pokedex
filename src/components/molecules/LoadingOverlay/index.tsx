import React from "react";
import Box from "@mui/material/Box";
import LoadingSpinner from "../../atoms/LoadingSpinner";
import { LoadingOverlayProps } from "./types";

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isOpen }) => {
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
