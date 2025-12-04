import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import { PokemonCard } from "../../molecules/PokemonCard";
import { PokemonGridProps } from "./types";
import { Pokemon } from "../../../types/pokemon";

export const PokemonGrid: React.FC<PokemonGridProps> = ({
  pokemons,
  isLoading,
  onPokemonClick,
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (pokemons.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          No Pokemon found.
        </Typography>
      </Box>
    );
  }
  
  return (
    <Grid container spacing={3}>
      {pokemons.map((pokemon, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <PokemonCard
            pokemon={pokemon}
            onPokemonClick={onPokemonClick}
            isFavorite={false}
            isInTeam={false}
            onToggleFavorite={function (pokemon: Pokemon): void {
              throw new Error("Function not implemented.");
            }}
            onToggleTeam={function (pokemon: Pokemon): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
