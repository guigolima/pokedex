import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Chip, Container } from "@mui/material";
import { RootState, AppDispatch } from "../../../redux/store";
import { fetchAllTypes, selectType } from "../../../redux/slices/typeSlice";
import { typeColors } from "../../../constants/typeColors";

const PokemonTypeGrid: React.FC<{ onTypeSelect?: () => void }> = ({ onTypeSelect }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { allTypes, selectedType } = useSelector(
    (state: RootState) => state.types
  );

  useEffect(() => {
    dispatch(fetchAllTypes());
  }, [dispatch]);

  const handleTypeClick = useCallback(
    (type: string) => {
      dispatch(selectType(type));
      if (onTypeSelect) onTypeSelect();
    },
    [dispatch]
  );

  const gridColumns = {
    xs: "repeat(4, 1fr)",
    sm: "repeat(6, 1fr)",
    md: "repeat(8, 1fr)",
    lg: "repeat(10, 1fr)",
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: 1.5,
        }}
      >
        {allTypes.map((type) => {
          const typeColor = typeColors[type] || "#607d8b";
          const isSelected = selectedType === type;

          const textColor = "white";

          return (
            <Chip
              key={type}
              label={type}
              onClick={() => handleTypeClick(type)}
              clickable
              variant={isSelected ? "filled" : "outlined"}
              sx={{
                height: 32,
                fontSize: "0.75rem",
                fontWeight: isSelected ? 700 : 500,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                borderRadius: 1,
                transition: "all 0.2s",
                color: isSelected ? textColor : typeColor,
                backgroundColor: isSelected ? typeColor : "transparent",
                borderColor: typeColor,
                "&:hover": {
                  backgroundColor: isSelected ? typeColor : `${typeColor}30`, // Light hover effect
                  boxShadow: isSelected ? `0 0 0 2px ${typeColor}` : "none",
                  transform: isSelected ? "scale(1.03)" : "scale(1.01)",
                },
              }}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default PokemonTypeGrid;
