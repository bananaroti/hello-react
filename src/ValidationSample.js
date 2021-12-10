import React from "react";
import { useState } from "react/cjs/react.development";
import "./ValidationSapmle.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const input = React.createRef();

  const handleFocus = () => {
    input.current.focus();
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    handleFocus();
  };
  return (
    <div>
      <input
        ref={input}
        type={"password"}
        value={password}
        onChange={handleChange}
        placeholder="password"
        className={clicked ? (validated ? "success" : "failure") : ""}
      ></input>
      <button onClick={handleButtonClick}>Button</button>
    </div>
  );
};

export default ValidationSample;
