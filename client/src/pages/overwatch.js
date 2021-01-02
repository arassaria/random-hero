import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100vh;
  width: 80vw;
  background: orange;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 0;
  padding: 1rem;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FakeButton = styled.p`
  background: white;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  border-radius: 10px;
  :first-child {
    color: black;
    text-decoration: none;
  }
`;

const Overwatch = () => {
  return (
    <Container>
      <Heading>Overwatch</Heading>
      <Navigation>
        <FakeButton>
          <Link to="/overwatch/tank">Tank</Link>
        </FakeButton>
        <FakeButton>
          <Link to="/overwatch/dps">DPS</Link>
        </FakeButton>
        <FakeButton>
          <Link to="/overwatch/support">Support</Link>
        </FakeButton>
      </Navigation>
    </Container>
  );
};

export default Overwatch;
