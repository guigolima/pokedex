import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const EmptyComparisonMessage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography variant="h5" color="textSecondary" gutterBottom>
          No Pokémon selected for comparison
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Click the compare icon on Pokémon cards to add them here (max 4)
        </Typography>
      </Box>
    </Container>
  );
};

export default EmptyComparisonMessage;
