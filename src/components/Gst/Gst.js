import React, { useState } from "react";
import "./Gst.css";

const Gst = () => {
  const [mrp, setMrp] = useState("");
  const [gst, setGst] = useState("");
  const [price, setPrice] = useState("");
  const[error,setError]=useState("")

  const handlechange = (e) => {
    // e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    if (name === "mrp") setMrp(value);
    else if (name === "gst") setGst(value);
  };
  const calculategst=(e)=>{
    e.preventDefault()
    setError("")
    if (!mrp || !gst ) {
        setError("All fields are required.");
        return;
      }
    // let result=(mrp-(mrp/100+gst*gst))
    const result = parseFloat(mrp) + (parseFloat(mrp) * parseFloat(gst) / 100)
    setPrice(result)
  }
  return (
    <div className="container">
      <form>
        <h1>GST calculator</h1>
        <div className="input-box">
          <input
            onChange={handlechange}
            className="data"
            type="text"
            required
            placeholder="price"
            name="mrp"
          />
        </div>
        <div className="input-box">
          <input
            onChange={handlechange}
            className="data"
            type="text"
            required
            placeholder="GST(%)"
            name="gst"
          />
        </div>
        <div className="required">{error && <div className="error-message">{error}</div>}</div>
        <button onClick={calculategst}>Calculate Actual price</button>
        <div className="text-center shadow rounded p-4">
          <div>Actual price with GST</div>
          <br />
          <input className="score" value={price}></input>
          <div className="fs-3 fw-bold text-primary"></div>
        </div>
      </form>
    </div>
  );
};

export default Gst;
