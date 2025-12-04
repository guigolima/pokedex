import React, { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import StarIcon from "@mui/icons-material/Star";
import { PokemonDetailsModalProps } from "./types";
import {
  StatBox,
  StyledAbilitiesBox,
  StyledDetailsBox,
  StyledDialogTitle,
} from "./styles";
import TypeChip from "../../atoms/TypeChip";

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

  if (!pokemon) return null;

  const pokemonDetails = [
    {
      label: "Height",
      value: `${pokemon.height / 10} m`,
      icon: <HeightIcon color="primary" />,
    },
    {
      label: "Weight",
      value: `${pokemon.weight / 10} kg`,
      icon: <ScaleIcon color="primary" />,
    },
    {
      label: "Base Exp",
      value: pokemon.base_experience,
      icon: <StarIcon color="primary" />,
    },
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        <Box>
          {pokemon.name}{" "}
          <Typography component="span" variant="caption" color="textSecondary">
            #{pokemon.id}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ ml: 2 }}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <Stack spacing={3}>
          {imageUrl && (
            <Box display="flex" justifyContent="center">
              <img
                src={imageUrl}
                alt={pokemon.name}
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
            </Box>
          )}
          <StyledDetailsBox>
            {pokemonDetails.map((item) => (
              <Box key={item.label} display="flex" alignItems="center" gap={1}>
                {item.icon}
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    {item.label}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </StyledDetailsBox>
          <hr />
          <StyledAbilitiesBox>
            <Box display="flex" justifyContent="center" gap={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Types
              </Typography>
              {types.map((type: string) => (
                <TypeChip key={type} type={type} />
              ))}
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Abilities
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {abilities.map((ability: string) => (
                  <Chip
                    key={ability}
                    label={ability.replace("-", " ")}
                    variant="outlined"
                    size="medium"
                    sx={{ textTransform: "capitalize" }}
                  />
                ))}
              </Stack>
            </Box>
          </StyledAbilitiesBox>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Base Stats
            </Typography>
            <Stack spacing={1.5}>
              {pokemon.stats?.map((stat: any) => {
                const statName = stat.stat?.name.replace("-", " ");
                const baseStat = stat.base_stat;
                const maxStatValue = 150;

                return (
                  <Box key={stat.stat?.name}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: "medium",
                        }}
                      >
                        {statName}
                      </Typography>
                      <Typography variant="body1" fontWeight="bolder">
                        {baseStat}
                      </Typography>
                    </Box>
                    <StatBox>
                      <Box
                        sx={{
                          height: "100%",
                          width: `${Math.min(
                            (baseStat / maxStatValue) * 100,
                            100
                          )}%`,
                          bgcolor: "primary.main",
                        }}
                      />
                    </StatBox>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(PokemonDetailsModal);
