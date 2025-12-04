import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { toggleFavorite } from "../../../redux/slices/favoritesSlice";
import { toggleCompare } from "../../../redux/slices/compareSlice";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  StyledCard,
  StyledActionButtonStack,
  StyledImageContainerBox,
  StyledIconButton,
} from "./styles";
import { getColorFromUrl } from "../../../utils/colors";
import { PokemonCardProps } from "./types";
import TypeChip from "../../atoms/TypeChip";

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onPokemonClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoriteIds } = useSelector((state: RootState) => state.favorites);
  const { compareIds } = useSelector((state: RootState) => state.compare);
  const isFavorite = favoriteIds.includes(pokemon.id);
  const isComparing = compareIds.includes(pokemon.id);
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  const getPokemonColor = async () => {
    if (!pokemon.sprites.front_default) return;
    const color = await getColorFromUrl(pokemon.sprites.front_default);
    setPokemonColor(color || "#fff");
  };

  useEffect(() => {
    getPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavorite(pokemon.id));
  };

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleCompare(pokemon.id));
  };

  return (
    <StyledCard
      elevation={2}
      style={{ backgroundColor: pokemonColor || "#fff" }}
    >
      <StyledActionButtonStack direction="row" spacing={1}>
        <StyledIconButton
          size="small"
          onClick={handleToggleCompare}
          color={isComparing ? "primary" : "default"}
        >
          <CompareArrowsIcon />
        </StyledIconButton>
        <StyledIconButton
          size="small"
          onClick={handleToggleFavorite}
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
              sx={{ objectFit: "contain", width: "auto" }}
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
          <Stack
            direction="row"
            spacing={0.5}
            justifyContent="center"
            flexWrap="wrap"
            gap={0.5}
          >
            {pokemon.types?.map((type: any) => (
              <TypeChip key={type.type?.name} type={type.type?.name || ""} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default PokemonCard;