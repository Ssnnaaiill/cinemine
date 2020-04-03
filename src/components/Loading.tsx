import React, { SFC } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 1.5rem;
`;

export const Loader: SFC = () => (
  <Container>
    <span role="img" aria-label="loading">
      ⏳
    </span>
  </Container>
);
