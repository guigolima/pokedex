import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { RootState, AppDispatch } from "../../../redux/store";
import { getPokemonDetails } from "../../../api/requests";
import { Pokemon } from "../../../types/pokemon";
import { clearCompare } from "../../../redux/slices/compareSlice";
import EmptyComparisonMessage from "../../molecules/EmptyComparisonMessage";
import PokemonCard from "../../molecules/PokemonCard";

const ComparisonView: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { compareIds } = useSelector((state: RootState) => state.compare);
  const [comparePokemons, setComparePokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchComparePokemons = async () => {
      if (compareIds.length === 0) {
        setComparePokemons([]);
        return;
      }

      try {
        const pokemons = await Promise.all(
          compareIds.map((id) => getPokemonDetails(id))
        );
        setComparePokemons(pokemons as Pokemon[]);
      } catch (error) {
        console.error("Failed to fetch comparison pokemons:", error);
      }
    };

    fetchComparePokemons();
  }, [compareIds]);

  const handleClearAll = () => {
    dispatch(clearCompare());
  };

  if (compareIds.length === 0) {
    return <EmptyComparisonMessage />;
  }

  const statNames = [
    { key: "hp", label: "HP" },
    { key: "attack", label: "Attack" },
    { key: "defense", label: "Defense" },
    { key: "special-attack", label: "Sp. Attack" },
    { key: "special-defense", label: "Sp. Defense" },
    { key: "speed", label: "Speed" },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Pokémon Comparison
        </Typography>
        <Button variant="outlined" onClick={handleClearAll}>
          Clear All
        </Button>
      </Box>

      <Grid container spacing={3} mb={4}>
        {comparePokemons.map((pokemon) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} onPokemonClick={() => {}} />
          </Grid>
        ))}
      </Grid>

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Attribute
              </TableCell>
              {comparePokemons.map((pokemon) => (
                <TableCell
                  key={pokemon.id}
                  align="center"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {pokemon.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {statNames.map((stat) => {
              const values = comparePokemons.map((p) => {
                const statData = p.stats?.find(
                  (s: any) => s.stat?.name === stat.key
                );
                return statData?.base_stat || 0;
              });
              const maxValue = Math.max(...values);

              return (
                <TableRow key={stat.key} hover>
                  <TableCell sx={{ fontWeight: "medium" }}>
                    {stat.label}
                  </TableCell>
                  {comparePokemons.map((pokemon) => {
                    const statData = pokemon.stats?.find(
                      (stats: any) => stats.stat?.name === stat.key
                    );
                    const value = statData?.base_stat || 0;
                    const isMax = value === maxValue && maxValue > 0;

                    return (
                      <TableCell
                        key={pokemon.id}
                        align="center"
                        sx={{
                          fontWeight: isMax ? "bold" : "normal",
                          color: isMax ? "primary.main" : "inherit",
                          bgcolor: isMax
                            ? "rgba(25, 118, 210, 0.08)"
                            : "inherit",
                        }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ComparisonView;
