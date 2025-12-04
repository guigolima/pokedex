import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Grid, Skeleton } from "@mui/material";
import { RootState } from "../../../redux/store";
import { PokemonCard } from "../../molecules/PokemonCard";
import { getPokemonDetails } from "../../../api/requests";
import { Pokemon } from "../../../types/pokemon";

interface FavoriteGridProps {
  onPokemonClick: (id: number) => void;
}

export const FavoriteGrid: React.FC<FavoriteGridProps> = ({ onPokemonClick }) => {
  const { favoriteIds } = useSelector((state: RootState) => state.favorites);
  const [favorites, setFavorites] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favoriteIds.length === 0) {
        setFavorites([]);
        return;
      }

      setLoading(true);
      try {
        const favoritePokemons = await Promise.all(
          favoriteIds.map((id) => getPokemonDetails(id))
        );
        setFavorites(favoritePokemons);
      } catch (error) {
        console.error("Error fetching favorite Pokémon details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favoriteIds]);

  if (favoriteIds.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          No favorite Pokémon yet. Click the heart icon on a Pokémon to add it!
        </Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
            <Skeleton variant="rounded" width="100%" height={300} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {favorites.map((pokemon) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} onPokemonClick={onPokemonClick} />
        </Grid>
      ))}
    </Grid>
  );
};
