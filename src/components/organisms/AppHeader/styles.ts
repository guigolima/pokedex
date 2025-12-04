import { styled } from "@mui/material/styles";
import { AppBar, Typography, TypographyProps, Box } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: 32,
  background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
}));

export const StyledIcon = styled(CatchingPokemonIcon)(({ theme }) => ({
  fontSize: "2.5rem",
  marginRight: 2,
  color: "rgba(255, 255, 255, 1)",
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
  animation: "spin 20s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

export const StyledTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const StyledAuthorText = styled(Typography)<TypographyProps>(() => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "0.75rem",
  fontWeight: 400,
}));

export const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  letterSpacing: ".15rem",
  background: "linear-gradient(45deg, #fff 30%, #90caf9 90%)",
  backgroundClip: "text",
}));
