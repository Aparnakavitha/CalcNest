import React, { useState } from "react";

function Form({ getData }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      isNaN(height) ||
      isNaN(weight) ||
      height.trim() === "" ||
      weight.trim() === ""
    ) {
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
      console.log(`Height: ${height}, Weight: ${weight}`);
    }
  };

  return (
    <div>
      <div className="text-center shadow rounded p-4">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={onSubmit} className="row g-3">
          <div className="col-auto">
            <label htmlFor="heightInput" className="form-label">
              Height (m):
            </label>
            <input
              type="text"
              className="form-control"
              id="heightInput"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="eg: 1.8"
            />
          </div>
          <div className="col-auto">
            <label htmlFor="weightInput" className="form-label">
              Weight (kg):
            </label>
            <input
              type="text"
              className="form-control"
              id="weightInput"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="eg: 70"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
        {alert && (
          <div className="alert alert-danger" role="alert">
            Please enter valid data
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
