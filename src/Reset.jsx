import { useEffect } from "react";
import React from "react";
import "/src/reset.css";

function Reset(props) {
  function Unavailble(valor) {
    if (valor !== 0) {
      document
        .getElementsByClassName("reset_button")[0]
        .classList.add('available')
    } else {
      document
        .getElementsByClassName("reset_button")[0]
        .classList.remove("available");
    }
  }

  useEffect(() => {
    Unavailble(props.available);
  }, [props.available]);

  return (
    <>
      <div>
        <button
          type="reset"
          className="reset_button"
          onClick={() => props.Restart()}
        >
          RESET
        </button>
      </div>
    </>
  );
}

export default Reset;
