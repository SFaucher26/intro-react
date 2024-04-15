import React from "react";
import { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  // state
  const [elements, setElements] = useState(["test 1", "test 2", "test 3"]);

  // logique
  const addElement = () => {
    setElements([...elements, `test ${elements.length + 1}`]);
  };
  // rendu

  return (
    <div style={{ color: "green" }}>
      <h2> Mon composant parent </h2>
      {elements.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
      <button onClick={() => addElement()}>Ajouter un element </button>
      <ChildComp />
    </div>
  );
};

export default ParentComp;
