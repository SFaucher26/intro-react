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

  const [nom, setNom] = useState("");
  const [monde, setMonde] = useState("");
  const [disabled, setDisabled] = useState(true);

  //METHODE AVEC FILTER
  // const removePerso = (p) => {
  //   // const newPerso = [...perso];
  //   // filter fait un nouveau tableau donc pas besoin de newPerso
  //   setPerso(perso.filter((element) => p.id !== element.id));
  //   console.log(perso);
  //   // console.log(newPerso);
  // };

  // //METHODE AVEC SPLICE
  const removePerso = (p) => {
    const indexToDelete = perso.findIndex((element) => element.id === p.id);
    const updatePerso = [...perso];
    updatePerso.splice(indexToDelete, 1);
    setPerso(updatePerso);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let idMax = Math.max(...perso.map((objet) => objet.id));
    const newPerso = { id: idMax + 1, nom: nom, monde: monde };
    setPerso([...perso, newPerso]);
    // console.log(idMax);
    // let nomPerso = e.target.nom.value;
    // let mondePerso = e.target.monde.value;
    // const newPerso = { id: idMax + 1, nom: nomPerso, monde: mondePerso };
    // setPerso([...perso, newPerso]);

    // console.log(e.target.nom.value);
    // console.log(e.target.monde.value);
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    // if (e.target.name == "nom") {
    //   setNom(e.target.value);
    // }
    // console.log(e.target.value);
    // if (e.target.name == "monde") {
    //   setMonde(e.target.value);
    // }
    e.target.name == "nom" && setNom(e.target.value);
    e.target.name == "monde" && setMonde(e.target.value);
    nom.length > 0 && monde.length > 2 ? setDisabled(false) : setDisabled(true);
  };

  return (
    <div>
      {perso.map((p) => (
        <div key={p.id}>
          <p>Nom : {p.nom}</p>
          <p>Monde : {p.monde}</p>
          <button onClick={() => removePerso(p)}>delete {p.nom}</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nom}
          onChange={handleChange}
          placeholder="nom du personnage"
          name="nom"
        />
        <input
          type="text"
          value={monde}
          onChange={handleChange}
          placeholder="monde du personnage"
          name="monde"
        />
        <button type="submit" disabled={disabled}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ChildComp;
