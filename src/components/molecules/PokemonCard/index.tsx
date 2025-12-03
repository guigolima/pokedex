import React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { TypeChip } from "../../atoms/TypeChip";
import { PokemonSummary } from "../../../types/pokemon";
import {
  StyledCard,
  StyledActionButtonStack,
  StyledImageContainerBox,
  StyledTypeChipBox,
  StyledIconButton,
} from "./styles";

interface PokemonCardProps {
  pokemon: PokemonSummary;
  isFavorite: boolean;
  isInTeam: boolean;
  onPokemonClick: (id: number) => void;
  onToggleFavorite: (pokemon: PokemonSummary) => void;
  onToggleTeam: (pokemon: PokemonSummary) => void;
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
          <CardMedia
            component="img"
            image={pokemon.imageUrl}
            alt={pokemon.name}
            sx={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
          />
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
          <StyledTypeChipBox>
            {pokemon.types.map((type: string) => (
              <TypeChip key={type} type={type} />
            ))}
          </StyledTypeChipBox>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
