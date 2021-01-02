import React, { useEffect, useState } from "react";
import { getRole } from "../api/api";
import getRandomInt from "../helpers/random";
import styled from "styled-components/macro";
import overwatchLogo from "../assets/overwatch.png";
import { useParams, Link } from "react-router-dom";

const PageContainer = styled.div`
  height: 100vh;
  overflow: auto;
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
  z-index: -1;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 250px;
`;

const HeroIcon = styled.img``;

const HeroName = styled.p`
  font-size: 3rem;
  margin: 0;
`;

const Heading = styled.h2`
  font-size: 6rem;
  margin: 0;
  text-align: center;
  padding-top: 1rem;
`;

const Button = styled.button`
  background: white;
  width: 160px;
  font-family: "KOverwatch";
  font-size: 2rem;
  margin: 2rem auto;
`;

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const Tank = () => {
  const [selectedHero, setSelectedHero] = useState({});
  const [clicked, setClicked] = useState(0);
  const { role } = useParams();

  useEffect(() => {
    try {
      const doFetch = async () => {
        const heroes = await getRole(role);
        const hero = getRandomInt(heroes.length);
        setSelectedHero(heroes[hero]);
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, [role, clicked]);

  return (
    <PageContainer>
      <Heading>Du spielst:</Heading>
      <Container>
        <HeroIcon src={selectedHero.icon} alt={selectedHero.name} />
        <HeroName>{selectedHero.name}</HeroName>
        <Button onClick={() => (clicked === 1 ? setClicked(0) : setClicked(1))}>
          Neuer Hero
        </Button>
      </Container>
      <BackgroundLogo src={overwatchLogo} />
      <Nav>
        <Link to="/">Zum Hauptmenü</Link>
      </Nav>
    </PageContainer>
  );
};

export default Tank;
