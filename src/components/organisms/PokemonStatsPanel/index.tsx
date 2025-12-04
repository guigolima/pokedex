import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PokemonStatsChart from "../../molecules/PokemonStatsChart";
import StatBar from "../../atoms/StatBar";
import { PokemonStatsPanelProps, Stat } from "./types";

export const PokemonStatsPanel: React.FC<PokemonStatsPanelProps> = React.memo(
  ({ stats, pokemonType, primaryTypeColor }) => {
    return (
      <Box flex={1} minWidth={0}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Base Stats
        </Typography>

        {stats.length > 0 && (
          <Box mb={2}>
            <PokemonStatsChart stats={stats} pokemonType={pokemonType} />
          </Box>
        )}

        <Stack spacing={2}>
          {stats.map((stat: Stat) => (
            <StatBar
              key={stat.stat?.name}
              statName={stat.stat?.name.replace("-", " ")}
              value={stat.base_stat}
              color={primaryTypeColor}
            />
          ))}
        </Stack>
      </Box>
    );
  }
);

export default PokemonStatsPanel;
