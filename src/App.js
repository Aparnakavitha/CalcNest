import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Formscore from "./components/Formscore";
import { useState } from "react";

function App() {
  const [bmi, setbmi] = useState("00");
  const [bmiType, setbmiType] = useState("");

  const onSubForm = (w, h) => {
    let b = calBmi(w, h);
    setbmi(b);
    let c = weightType(b);
    setbmiType(c);
    console.log(w, h);
  };
  //Bmi calculation
  const calBmi = (w, h) => {
    return (w / (h * h)).toFixed(2); // return (w / (h * h)).toFixed(2)
  };

  //bmitype
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi >= 29.9 && bmi < 34.9) {
      return "Obesity class I";
    } else if (bmi >= 34.9 && bmi < 39.9) {
      return "Obesity class II";
    } else if (bmi > 39.9) {
      return "Obesity class III";
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <div className="col-12 col-sm-6 mb-5">
            <Form getData={onSubForm} />
          </div>
          <div className="row justify-content-center mt-5 ">
            <div className="col-12 col-sm-6 mb-5">
              <Formscore bmiNo={bmi} bmiName={bmiType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
