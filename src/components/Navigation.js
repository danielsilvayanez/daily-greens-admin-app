import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink exact to="/">
        Aufträge Übersicht
      </StyledNavLink>
      <StyledNavLink to="/home"> Aufträge (offen) </StyledNavLink>
      <StyledNavLink to="/archive">Aufträge erledigt </StyledNavLink>
      <StyledNavLink to="/form">Auftrag erstellen</StyledNavLink>
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

  &.active {
    background-color: var(--secondaryBGPurple);
    color: var(--primaryBgWhite);
  }
`;
