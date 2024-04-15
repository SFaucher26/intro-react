import React from "react";
import { useState } from "react";
import ChildComp from "./ChildComp";
import ParentComp from "./ParentComp";

const MonPremierComp = () => {
  //etat (state)
  let [compteur, setCompteur] = useState(0);

  //logique (fonctions)
  const increment = () => {
    compteur < 20 && setCompteur((compteur += 1));
  };
  const decrement = () => {
    compteur > 0 && setCompteur((compteur -= 1));
  };

  // rendu front (return: render)
  return (
    <>
      <p style={{ color: "red" }}>Compteur : {compteur}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <ParentComp />
    </>
  );
};

export default MonPremierComp;
