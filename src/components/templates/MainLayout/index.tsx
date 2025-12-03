import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppHeader } from "../../organisms/AppHeader";
import { MainLayoutProps } from "./types";
import { StyledBox } from "./styles";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <StyledBox>
      <AppHeader
        currentTab={currentTab}
        onTabChange={function (
          _event: React.SyntheticEvent,
          newValue: number
        ): void {
          setCurrentTab(newValue);
        }}
        teamCount={0}
      />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, pb: 4 }}>
        {children}
      </Container>
    </StyledBox>
  );
};
