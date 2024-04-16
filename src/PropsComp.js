import React from "react";
import PropsChildrenComp from "./PropsChildrenComp";

const PropsComp = (props) => {
  console.log(props);
  console.log(props.title);

  const titre = props.title;
  const sstitre = props.sstitre;

  return (
    <div>
      Props Component
      <h1>{titre}</h1>
      <h2>{sstitre}</h2>
      <PropsChildrenComp>{titre}</PropsChildrenComp>
    </div>
  );
};

export default PropsComp;
