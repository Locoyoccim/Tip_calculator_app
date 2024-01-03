import { useState } from "react";
import "/src/input.css";

function Inputs(props) {
  function validacion(value, name, nameCLass) {
    if (value === 0 || value === "0") {
      document.getElementById(name).classList.add("error");
      document.getElementById(nameCLass).classList.add("active");
    } else {
      document.getElementById(name).classList.remove("error");
      document.getElementById(nameCLass).classList.remove("active");
    }
  }

  return (
    <>
      <div className="input_container">
        <div className="textos">
          <p className="sub_title">{props.children}</p>
          <p className="error_msj" id={props.id}>
            Cant be zero
          </p>
        </div>
        <div>
          <img className="input_img" src={props.img} alt={props.alt} />
          <input
            className="get_info"
            type={props.type}
            placeholder="0"
            name={props.name}
            id={props.name}
            onChange={(e) => {
              props.manejo_valores(props.name, e.target.value);
              validacion(e.target.value, props.name, props.id);
            }}
            value={props.value}
          />
        </div>
      </div>
    </>
  );
}

export default Inputs;
