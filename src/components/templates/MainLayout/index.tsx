import React, { useState } from "react";
import { Container } from "@mui/material";
import { MainLayoutProps } from "./types";
import { StyledBox } from "./styles";
import AppHeader from "../../organisms/AppHeader";

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentTab: propTab,
  onTabChange: propOnTabChange,
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
      />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, pb: 4 }}>
        {children}
      </Container>
    </StyledBox>
  );
};

export default MainLayout;