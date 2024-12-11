// import React, { useState } from "react";
// // import "./App.css";

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleSearch = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const navigateToCalculator = () => {
//     if (selectedOption === "BMI Calculator") {
//       window.location.href = "/bmi"; // Navigate to BMI Calculator page
//     } else if (selectedOption === "EMI Calculator") {
//       window.location.href = "/emi"; // Navigate to EMI Calculator page
//     } else if (selectedOption === "GST Calculator") {
//       window.location.href = "/gst"; // Navigate to GST Calculator page
//     } else {
//       alert("Please select a valid option.");
//     }
//   };

//   return (
//     <div className="home-container">
//       <h1>Welcome to the Calculator Hub</h1>
//       <div className="search-bar">
//         <select onChange={handleSearch} value={selectedOption}>
//           <option value="" disabled>
//             Select a Calculator
//           </option>
//           <option value="BMI Calculator">BMI Calculator</option>
//           <option value="EMI Calculator">EMI Calculator</option>
//           <option value="GST Calculator">GST Calculator</option>
//         </select>
//         <button onClick={navigateToCalculator}>Go</button>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [Option, setOption] = useState("");
  const handlevalue = (e) => {
    // e.preventDefault()
    setOption(e.target.value);
  };
  const pageChange = () => {
    if (Option === "BMI Calculator") window.location.href = "/bmi";
    else if (Option === "EMI Calculator") window.location.href = "/emi";
    else if (Option === "GST Calculator") window.location.href = "/gst";
    else alert("please select a valid option")
  };
  return (
    <div className="container">
      <h1>Calculator Hub</h1>
      <div className="search-bar">
        <select value={Option} onChange={handlevalue}>
          <option  value="" disabled>
            Select a calculator
          </option>
          <option  value="BMI Calculator">
            BMI Calculator
          </option>
          <option  value="EMI Calculator">
            EMI Calculator
          </option>
          <option  value="GST Calculator">
            GST Calculator
          </option>
        </select>
        <button onClick={pageChange}>OK</button>
      </div>
    </div>
  );
};

export default Home;
