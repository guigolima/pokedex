import React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Pokemon } from "../../../types/pokemon";
import { TypeChip } from "../../atoms/TypeChip";
import {
  StyledCard,
  StyledActionButtonStack,
  StyledImageContainerBox,
  StyledIconButton,
} from "./styles";

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  isInTeam: boolean;
  onPokemonClick: (id: number) => void;
  onToggleFavorite: (pokemon: Pokemon) => void;
  onToggleTeam: (pokemon: Pokemon) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isFavorite,
  isInTeam,
  onPokemonClick,
  onToggleFavorite,
  onToggleTeam,
}) => {
  return (
    <StyledCard elevation={2}>
      <StyledActionButtonStack direction="row" spacing={1}>
        <StyledIconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onToggleTeam(pokemon);
          }}
          color={isInTeam ? "secondary" : "default"}
        >
          <CatchingPokemonIcon />
        </StyledIconButton>
        <StyledIconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(pokemon);
          }}
          color="error"
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </StyledIconButton>
      </StyledActionButtonStack>

      <CardActionArea
        onClick={() => onPokemonClick(pokemon.id)}
        sx={{ flexGrow: 1, pt: 2 }}
      >
        <StyledImageContainerBox>
          {pokemon.sprites.front_default && (
            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
              sx={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
            />
          )}
        </StyledImageContainerBox>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textTransform="capitalize"
            align="center"
          >
            {pokemon.name}
          </Typography>
          <Stack direction="row" spacing={0.5} justifyContent="center" flexWrap="wrap" gap={0.5}>
            {pokemon.types?.map((type) => (
              <TypeChip key={type.type?.name} type={type.type?.name || ""} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
