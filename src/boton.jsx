import React, { useEffect } from "react";
import { useState } from "react";
import "/src/boton.css";

function Boton(props) {
  return (
    <>
      <button
        className="porcent_button"
        value={props.valor}
        id={props.id}
        onClick={(e) => {
          props.GetPorcent(props.valor);
          e.preventDefault();
        }}
      >
        {props.children}
      </button>
    </>
  );
}

export default Boton;
