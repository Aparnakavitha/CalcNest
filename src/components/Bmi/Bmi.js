import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");
  const [bmi, setBmi] = useState("");
  const[error,setError]=useState("")

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "height") setHeight(value);
    else if (name === "weight") setWeight(value);
  };
  const calculateBMI = (e) => {
    e.preventDefault();
    setError("")
    if(!height || !weight )
      setError("All fields are required")
    let result = (weight / (height * height)).toFixed(2);
    setBmi(result);
    let answer=" "

    if (result < 18.5) {
       
        answer= "Underweight";
    } else if (result >= 18.5 && result < 24.9) {
        answer="Normal";
    } else if (result >= 24.9 && result < 29.9) {
        answer="Overweight";
    } else if (result >= 29.9 && result < 34.9) {
        answer="Obesity class I";
    } else if (result >= 34.9 && result < 39.9) {
        answer="Obesity class II";
    } else if (result > 39.9) {
       answer= "Obesity class III";
    }
    setType(answer)
  };

  return (
    <div className="container">
      <form>
        <h1>Bmi calculator</h1>
        <input
          type="text"
          className="input-box"
          name="height"
          placeholder="height(m)"
          required
          onChange={handleinput}
        />

        <input
          type="text"
          className="input-box"
          name="weight"
          placeholder="weight(kg)"
          required
          onChange={handleinput}
        />
        <div className="required" >{error && <div className="error-message">{error}</div>}</div>
        <br/>
        <button onClick={calculateBMI}>calculate bmi</button>
        <div className="text-center shadow rounded p-4">
          <div >Your BMI is</div>
          <input className="score" value={bmi}></input>
          
        </div>
        <div className="type">{type}</div>
      </form>
    </div>
  );
};

export default Bmi;
