// ./src/components/auth/Login.js

import React, { useRef } from "react";
import styled from "styled-components";
import firebaseApp from "../../Firebase/index";
import { useHistory } from "react-router-dom";

export default function Login() {
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const history = useHistory();

  async function loginWithFirebase(email, password) {
    await firebaseApp.signInWithEmailAndPassword(email, password);
    return history.push("/");
  }

  return (
    <Container>
      <h2>Moin, bitte hier einloggen</h2>
      <form
        onSubmit={(event) => (
          event.preventDefault(),
          loginWithFirebase(userEmail.current.value, userPassword.current.value)
        )}
      >
        <LoginContainer>
          <StyledLabel htmlFor="user-email">E-Mail</StyledLabel>
          <StyledInput
            htmlId="user-email"
            name="user-email"
            type="text"
            ref={userEmail}
          />

          <StyledLabel htmlFor="user-password">Password</StyledLabel>
          <StyledInput
            htmlId="user-password"
            name="user-password"
            type="password"
            ref={userPassword}
          />

          <StyledButton type="submit">Login</StyledButton>
        </LoginContainer>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 260px;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  border: 1px solid gray;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledButton = styled.button`
  display: block;
  height: 43px;
  width: 80px;
  border-radius: 15px;
  border: none;
  background-color: var(--secondaryBGPurple);
  color: var(--primaryBgWhite);
`;
