import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppHeader } from "../../organisms/AppHeader";
import { MainLayoutProps } from "./types";
import { StyledBox } from "./styles";

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentTab: propTab,
  onTabChange: propOnTabChange,
  teamCount = 0,
}) => {
  const [internalTab, setInternalTab] = useState(0);

  const currentTab = typeof propTab === "number" ? propTab : internalTab;

  const handleTabChange = propOnTabChange
    ? propOnTabChange
    : (_e: React.SyntheticEvent, newValue: number) => setInternalTab(newValue);

  return (
    <StyledBox>
      <AppHeader
        currentTab={currentTab}
        onTabChange={handleTabChange}
        teamCount={teamCount}
      />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, pb: 4 }}>
        {children}
      </Container>
    </StyledBox>
  );
};
