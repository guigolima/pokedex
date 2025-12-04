import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { LoadMoreButtonProps } from "./types";

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  handleLoadMore,
  loading,
}) => {
  return (
    <Box display="flex" justifyContent="center" mt={4} mb={4}>
      <Button
        variant="contained"
        onClick={handleLoadMore}
        disabled={loading === "pending"}
      >
        Load More
      </Button>
    </Box>
  );
};

export default LoadMoreButton;
