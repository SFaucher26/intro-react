import { useState } from "react";
import calimero from "./assets/images/calimero.jpg";
import "./assets/styles/ChildComp.css";

const ChildComp = () => {
  const [perso, setPerso] = useState([
    { id: 1, nom: "Tom", monde: "Tom & Jerry" },
    { id: 2, nom: "Dora", monde: "Le monde de Dora" },
    { id: 3, nom: "Pikachu", monde: "Pokemon" },
    { id: 4, nom: "Sangohan", monde: "DragonBall Z" },
    { id: 5, nom: "Tanjiro", monde: "Demon Slayer" },
  ]);

  const removePerso = (p) => {
    const newPerso = [...perso];
    setPerso(perso.filter((element) => p.id !== element.id));
    console.log(p);
    console.log(newPerso);
  };
  return (
    // <>
    //   {perso.length > 0 && (
    //     <ul>
    //       {perso.map((p) => (
    //         <li key={p.id}>
    //           <h1>{p.nom}</h1>
    //           <p>{p.monde}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </>
    <div>
      {perso.map((p) => (
        <div key={p.id}>
          <p>Nom : {p.nom}</p>
          <p>Monde : {p.monde}</p>
          <button onClick={() => removePerso(p)}>delete {p.nom}</button>
        </div>
      ))}
    </div>
  );
};

export default ChildComp;
