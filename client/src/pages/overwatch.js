import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import overwatchLogo from "../assets/overwatch.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  margin: 0 0;
  overflow: hidden;
  z-index: 0;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-size: 6rem;
`;

const SubHeading = styled.h3`
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-size: 4.5rem;
`;

const Navigation = styled.div`
  text-align: center;
`;

const Tank = styled.p`
  color: #8c8c8c;
  font-size: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const DPS = styled.p`
  color: #c91515;
  font-size: 3rem;
  padding-bottom: 2rem;
`;

const Support = styled.p`
  color: #cece64;
  font-size: 3rem;
`;

const BackgroundLogo = styled.img`
  position: absolute;
  opacity: 0.2;
  top: 50%;
  left: 50%;
  height: 768px;
  width: 768px;
  margin-top: -384px;
  margin-left: -384px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  padding-top: 10rem;
`;

const Overwatch = () => {
  return (
    <Container>
      <BackgroundLogo src={overwatchLogo} alt="" />
      <Heading>Overwatch</Heading>
      <SubHeading>Random Hero Generator</SubHeading>
      <Navigation>
        <Link to="/overwatch/tank">
          <Tank>Tank</Tank>
        </Link>
        <Link to="/overwatch/dps">
          <DPS>DPS</DPS>
        </Link>
        <Link to="/overwatch/support">
          <Support>Support</Support>
        </Link>
        <Description>
          Klick auf die Rolle deiner Wahl um einen zufälligen Helden zugeteilt
          zu bekommen
        </Description>
      </Navigation>
    </Container>
  );
};

export default Overwatch;
