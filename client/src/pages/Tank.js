import React, { useEffect, useState } from "react";
import { getRole } from "../api/api";
import getRandomInt from "../helpers/random";

const Tank = () => {
  const [selectedHero, setSelectedHero] = useState({});

  useEffect(() => {
    try {
      const doFetch = async () => {
        const heroes = await getRole("tank");
        const hero = getRandomInt(heroes.length);
        setSelectedHero(heroes[hero]);
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <p>Name: {selectedHero.name}</p>
      <img src={selectedHero.icon} alt={selectedHero.name} />
    </div>
  );
};

export default Tank;
