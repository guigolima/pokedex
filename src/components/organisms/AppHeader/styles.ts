import { styled } from "@mui/material/styles";
import { AppBar, Typography, TypographyProps } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const StyledAppBar = styled(AppBar)({
  marginBottom: 32,
  position: "sticky",
  color: "primary",
  elevation: 0,
});

export const StyledIcon = styled(CatchingPokemonIcon)({
  display: "none",
  marginRight: 8,
});

export const StyledTitleTypography = styled(Typography)<TypographyProps>(
  () => ({
    marginRight: 32,
    display: "none",
    fontWeight: 700,
    letterSpacing: ".1rem",
  })
);
