import React from "react";
import "./Emi.css";
import { useState } from "react";
import { HiCurrencyRupee } from "react-icons/hi2";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";

const Emi = () => {
  const [amount, setAmount] = useState("");
  const [interest, setinterest] = useState("");
  const [year, setyear] = useState("");
  const [result, setResult] = useState("");
  const [error,setError]=useState('')

  const handleInput = (e) => {
    // e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name)
    // console.log(value)

    if (name === "amount") setAmount(value);
    else if (name === "interest") setinterest(value);
    else if (name === "year") setyear(value);
    else alert("Enter valid values")
  };
  const calculateEMI = (e) => {
    e.preventDefault();
    setError("")
    if (!amount || !interest || !year) {
      setError("All fields are required.");
      return;
    }
    

    //emi=p(r(1+r)^n/((1-r)^n)-1)
    let r = interest;
    if (amount && interest && year) {
      r = r / 12 / 100; //rate of interest
      let power = Math.pow(1 + r, year * 12);
      //   let pow = Math.power(1 - r, year * 12);
      let emi = amount * ((r * power) / (power - 1));
      setResult(Math.round(emi));
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <h1>Emi calculator</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Amount"
              
              name="amount"
              onChange={handleInput}
              required
            ></input>
            <HiCurrencyRupee className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Interest"
              required
              name="interest"
              onChange={handleInput}
            ></input>
            <TbCirclePercentageFilled className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Year"
              required
              name="year"
              onChange={handleInput}
            ></input>
            <FaCalendarAlt className="icon" />
          </div>
          <div className="required">{error && <div className="error-message">{error}</div>}</div>
         <br/> <button onClick={calculateEMI}>calculate Emi</button>
          <div className="text-center shadow rounded p-4">
            <div>Your EMI is</div>
            <br />
            <input className="score" value={result}></input>
            <div className="fs-3 fw-bold text-primary"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Emi;
