import React from "react";
import { PokemonImageProps } from "./types";
import { StyledImageContainer, StyledImage } from "./styles";

export const PokemonImage: React.FC<PokemonImageProps> = React.memo(({ imageUrl, name }) => (
  <StyledImageContainer>
    <StyledImage src={imageUrl} alt={name} />
  </StyledImageContainer>
));

export default PokemonImage;
