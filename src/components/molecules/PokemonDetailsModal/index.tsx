import React, { useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PokemonDetailsModalProps } from "./types";
import { StyledDialogTitle } from "./styles";
import { typeColors } from "../../../constants/typeColors";
import PokemonInfoPanel from "../../organisms/PokemonInfoPanel";
import PokemonStatsPanel from "../../organisms/PokemonStatsPanel";

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({
  open,
  pokemon,
  onClose,
}) => {
  const imageUrl = useMemo(
    () =>
      pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
      pokemon?.sprites?.front_default ||
      "",
    [pokemon?.sprites]
  );

  const types = useMemo(
    () => pokemon?.types?.map((t: any) => t.type?.name) || [],
    [pokemon?.types]
  );

  const abilities = useMemo(
    () => pokemon?.abilities?.map((a: any) => a.ability?.name) || [],
    [pokemon?.abilities]
  );

  const stats = useMemo(
    () => pokemon?.stats || [],
    [pokemon?.stats]
  );

  const primaryTypeColor = useMemo(
    () => typeColors[types[0]?.toLowerCase()] || "#1976d2",
    [types]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!pokemon) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <StyledDialogTitle>
        <Box>
          <Typography
            variant="h5"
            component="span"
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            {pokemon.name}
          </Typography>{" "}
          <Typography component="span" variant="h6" color="textSecondary">
            #{String(pokemon.id).padStart(3, "0")}
          </Typography>
        </Box>
        <IconButton onClick={handleClose} size="small" sx={{ ml: 2 }}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers sx={{ p: 3 }}>
        <Box display="flex" gap={3} flexDirection={{ xs: "column", md: "row" }}>
          <PokemonInfoPanel
            imageUrl={imageUrl}
            name={pokemon.name}
            types={types}
            abilities={abilities}
            height={pokemon.height}
            weight={pokemon.weight}
            baseExperience={pokemon.base_experience}
          />

          <PokemonStatsPanel
            stats={stats}
            pokemonType={types[0] || "normal"}
            primaryTypeColor={primaryTypeColor}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(PokemonDetailsModal);
