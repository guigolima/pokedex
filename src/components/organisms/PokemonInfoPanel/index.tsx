import React from "react";
import { Box, Stack, Chip } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import StarIcon from "@mui/icons-material/Star";
import PokemonImage from "../../atoms/PokemonImage";
import InfoSection from "../../atoms/InfoSection";
import PhysicalAttribute from "../../atoms/PhysicalAttribute";
import TypeChip from "../../atoms/TypeChip";
import { PokemonInfoPanelProps } from "./types";

export const PokemonInfoPanel: React.FC<PokemonInfoPanelProps> = React.memo(
  ({ imageUrl, name, types, abilities, height, weight, baseExperience }) => {
    const physicalAttributes = [
      {
        label: "Height",
        value: `${height / 10} m`,
        icon: <HeightIcon color="primary" />,
      },
      {
        label: "Weight",
        value: `${weight / 10} kg`,
        icon: <ScaleIcon color="primary" />,
      },
      {
        label: "Base Exp",
        value: baseExperience,
        icon: <StarIcon color="primary" />,
      },
    ];

    return (
      <Box flex="0 0 auto" width={{ xs: "100%", md: "350px" }}>
        {imageUrl && <PokemonImage imageUrl={imageUrl} name={name} />}

        <Stack spacing={2}>
          <InfoSection title="Types">
            <Stack direction="row" spacing={1}>
              {types.map((type: string) => (
                <TypeChip key={type} type={type} />
              ))}
            </Stack>
          </InfoSection>

          <InfoSection title="Abilities">
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {abilities.map((ability: string) => (
                <Chip
                  key={ability}
                  label={ability.replace("-", " ")}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </Stack>
          </InfoSection>

          <InfoSection title="Physical Attributes">
            <Stack spacing={1.5}>
              {physicalAttributes.map((attr) => (
                <PhysicalAttribute
                  key={attr.label}
                  label={attr.label}
                  value={attr.value}
                  icon={attr.icon}
                />
              ))}
            </Stack>
          </InfoSection>
        </Stack>
      </Box>
    );
  }
);

export default PokemonInfoPanel;
