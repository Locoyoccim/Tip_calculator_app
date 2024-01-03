import "/src/input-button.css";

function InputButton(props) {
  return (
    <>
      <input
        className="button_input"
        type={props.type}
        placeholder={props.holder}
        onChange={(e) => props.UsoCustom(e.target.value)}
        value={props.value}
      />
    </>
  );
}

export default InputButton;
