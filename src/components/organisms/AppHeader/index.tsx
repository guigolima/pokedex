import React from "react";
import { Toolbar, Container, Box, Tabs, Tab, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { AppHeaderProps } from "./types";
import { StyledAppBar, StyledIcon, StyledTitleTypography } from "./styles";

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentTab,
  onTabChange,
  teamCount,
}) => {
  const { compareIds } = useSelector((state: RootState) => state.compare);
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
              <Tab label="Explore" />
              <Tab label="Favorites" />
              <Tab
                label={
                  <Badge badgeContent={compareIds.length} color="secondary">
                    Compare
                  </Badge>
                }
              />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
