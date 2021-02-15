import "./styles.css";
import { useState } from "react";
export default function App() {
  const [note, setNote] = useState("");
  const [passone, setPassone] = useState("");
  const [passtwo, setPasstwo] = useState("");
  function passoneHandler(e) {
    setPassone(e.target.value);
  }
  function passtwoHandler(e) {
    setPasstwo(e.target.value);
  }
  function validatePassword() {
    if (passone === passtwo) {
      setNote("Password matched!");
    } else {
      setNote("Password didn't matched!");
    }
  }
  return (
    <div className="App">
      <label>Enter Password : </label>
      <input type="text" onChange={passoneHandler} />
      <br />
      <label>Enter Password Again : </label>
      <input type="text" onChange={passtwoHandler} />
      <br />
      <button onClick={validatePassword}>Check</button>
      <h3>{note}</h3>
    </div>
  );
}
