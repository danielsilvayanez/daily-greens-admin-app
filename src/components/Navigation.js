import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink exact to="/">
        Aufträge (offen)
      </StyledNavLink>
      <StyledNavLink to="/archive">Aufträge (erledigt) </StyledNavLink>
      <StyledNavLink to="/form">Auftrag erstellen</StyledNavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px;

  :visited {
    color: var(--primaryFontGrey);
  }

  &.active {
    color: var(--primaryBgWhite);
  }
`;
