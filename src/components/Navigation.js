import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink exact to="/">
        Aufträge Übersicht
      </StyledNavLink>
      <StyledNavLink to="/driver-overview"> Aufträge (Fahrer) </StyledNavLink>
      <StyledNavLink to="/home"> Aufträge (offen) </StyledNavLink>
      <StyledNavLink to="/archive">Aufträge erledigt </StyledNavLink>
      <StyledNavLink to="/form">Auftrag erstellen</StyledNavLink>
      <StyledNavLink to="/settings">Einstellungen</StyledNavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;

  :visited {
    color: var(--primaryFontGrey);
  }

  :hover {
    background-color: var(--secondaryBGPurple);
    color: var(--primaryBgWhite);
  }

  &.active {
    background-color: var(--primaryBGPurpleDarker);
    color: var(--primaryBgWhite);
  }
`;
