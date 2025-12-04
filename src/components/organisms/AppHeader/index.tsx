import React from "react";
import { Toolbar, Container, Box, Tabs, Tab } from "@mui/material";
import { AppHeaderProps } from "./types";
import { StyledAppBar, StyledIcon, StyledTitleTypography } from "./styles";

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentTab,
  onTabChange,
  teamCount,
}) => {
  return (
    <StyledAppBar position="sticky" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <StyledIcon />
          <StyledTitleTypography variant="h6" noWrap component="div">
            POKEDEX
          </StyledTitleTypography>
          <Box sx={{ flexGrow: 1 }}>
            <Tabs
              value={currentTab}
              onChange={onTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Pokemon" />
              <Tab label="Favorites" />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
