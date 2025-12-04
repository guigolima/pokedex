import React from "react";
import { Toolbar, Container, Box, Tabs, Tab, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { AppHeaderProps } from "./types";
import {
  StyledAppBar,
  StyledIcon,
  StyledTitleBox,
  StyledAuthorText,
  StyledTypography,
} from "./styles";

const AppHeader: React.FC<AppHeaderProps> = ({ currentTab, onTabChange }) => {
  const { compareIds } = useSelector((state: RootState) => state.compare);
  return (
    <StyledAppBar position="sticky" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <StyledTitleBox sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledIcon />
            <Box>
              <StyledTypography variant="h5" component="div">
                POKÉDEX
              </StyledTypography>
              <StyledAuthorText variant="caption">
                by Guilherme Maranhão
              </StyledAuthorText>
            </Box>
          </StyledTitleBox>
          <Box sx={{ flexGrow: 1 }} />
          <Tabs value={currentTab} onChange={onTabChange} textColor="inherit">
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
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default AppHeader;
