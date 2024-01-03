import React, { useState } from "react";
import { useEffect } from "react";
import Logo from "./Logo.jsx";
import "./index.css";
import Input from "/src/inputs.jsx";
import person from "/src/assets/icon-person.svg";
import dollar from "/src/assets/icon-dollar.svg";
import Boton from "/src/boton.jsx";
import InputButton from "/src/input-button.jsx";
import Results from "/src/results.jsx";
import Reset from "/src/Reset.jsx";

function App() {
  const [BillAmount, setBillAmount] = useState();
  const [People, setPeople] = useState();
  const [Porcent, setPorcent] = useState(0);
  const [Tipamount, setTipamount] = useState(0);
  const [TotalBill, SetTotalBIll] = useState(0);
  const [Custom, setCustom] = useState("");

  /*Estado Inputs */
  function manejo_valores(name, value) {
    if (name === "Bill") {
      setBillAmount(parseFloat(value));
    } else {
      setPeople(parseFloat(value));
    }
  }

  /*Manejo de porcentaje*/
  function GetPorcent(value) {
    setPorcent(parseFloat(value));
    setCustom("");
  }

  /*Calculo de propina */
  function Calculo() {
    if (isNaN(BillAmount) || isNaN(People) || isNaN(Porcent) || People === 0) {
      setTipamount(0);
      SetTotalBIll(0);
      return;
    } else {
      let TipCaculate = BillAmount * Porcent;
      let totalWithTip = TipCaculate + BillAmount;
      SetTotalBIll(totalWithTip / People);
      setTipamount(TipCaculate / People);
    }
  }

  /*apoyo para correcta actulizacion de los estados */
  useEffect(() => {
    Calculo();
  }, [BillAmount, People, Porcent]);

  /*Manejo del boton RESET*/
  function Restart() {
    // Limpiar los estados
    setBillAmount(0);
    setPeople(0);
    setPorcent(0);
    setTipamount(0);
    SetTotalBIll(0);
    setCustom("");
  }

  /*Manejo de CUustom*/
  function UsoCustom(value) {
    setPorcent(value / 100);
    setCustom(value);
  }

  /*rederizado*/
  return (
    <>
      <Logo />
      <section>
        <div className="info_container">
          <div>
            <Input
              type="number"
              img={dollar}
              alt="person"
              manejo_valores={manejo_valores}
              name="Bill"
              id="Bill_error"
              value={BillAmount}
            >
              Bill
            </Input>
          </div>
          <div className="tip_amount">
            <p>Select Tip %</p>
            <div className="button_container">
              <Boton id="1" valor={0.05} GetPorcent={GetPorcent}>
                5 %
              </Boton>
              <Boton id="2" valor={0.1} GetPorcent={GetPorcent}>
                10 %
              </Boton>
              <Boton id="3" valor={0.15} GetPorcent={GetPorcent}>
                15 %
              </Boton>
              <Boton id="4" valor={0.25} GetPorcent={GetPorcent}>
                25 %
              </Boton>
              <Boton id="5" valor={0.5} GetPorcent={GetPorcent}>
                50 %
              </Boton>
              <InputButton
                type="number"
                holder={"Custom"}
                UsoCustom={UsoCustom}
                value={Custom}
              />
            </div>
          </div>
          <div className="number_people">
            <Input
              id="People_error"
              type="number"
              img={person}
              alt="dollar"
              name="People"
              manejo_valores={manejo_valores}
              value={People}
            >
              Number of People
            </Input>
          </div>
        </div>
        <div className="result_container">
          <div>
            <Results amount={Tipamount.toFixed(2)}>Tip Amount</Results>
            <Results amount={TotalBill.toFixed(2)}>Total</Results>
          </div>
          <Reset Restart={Restart} available={Tipamount} />
        </div>
      </section>
    </>
  );
}

export default App;
