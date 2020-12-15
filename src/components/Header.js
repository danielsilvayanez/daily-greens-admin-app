import React from "react";
import styled from "styled-components";
import logo from "../images/dailyGreensLogo.png";

const today = new Date();
let date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <img src={logo} width="130" height="50" />
        <StyledDiv2>
          <h2>{date}</h2>
        </StyledDiv2>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid --primaryBGBtnGreen;
  padding: 5px;
  align-items: flex-end;
  background-color: var(--primaryBGBtnGreen);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledDiv2 = styled.div`
  display: flex;
  align-items: flex-end;
`;
