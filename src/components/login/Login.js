// import React, { useState } from "react";
// import "./login.css";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [action, setAction] = useState("");
//   const navigate=useNavigate()

//   const handleLogin=(e)=>{
//     e.preventDefault()
//     navigate('/home')
//   }

//   const handleSignUp=(e)=>{
//     e.preventDefault()
//     navigate('/home')
//   }

//   return (
//     <div className={`full ${action}`}>
//       {/* Login Form */}
//       <div className="form-box login">
//         <form onSubmit={handleLogin}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input type="text" placeholder="Username" required />
//             <FaUser className="icon" />
//           </div>
//           <div className="input-box">
//             <input type="password" placeholder="Password" required />
//             <FaLock className="icon" />
//           </div>
//           <button type="submit">Login</button>
//           <div className="register-link">
//             <p>
//               Don't have an account?{" "}
//               <a href="#" onClick={()=>setAction('active')}>
//                 Register
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>

//       {/* Register Form */}
//       <div className="form-box register">
//         <form onSubmit={handleSignUp}>
//           <h1>Sign Up</h1>
//           <div className="input-box">
//             <input type="text" placeholder="Username" required name="name" />
//             <FaUser className="icon" />
//           </div>
//           <div className="input-box">
//             <input type="email" placeholder="Email" required />
//             <MdEmail className="icon" />
//           </div>
//           <div className="input-box">
//             <input type="password" placeholder="Password" required  password="password"/>
//             <FaLock className="icon" />
//           </div>
//           <button type="submit" >Sign Up</button>
//           <div className="register-link">
//             <p>
//               Already have an account?{" "}
//               <a href="#" onClick={()=>setAction('')}>
//                 Login
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.name === loginData.username &&
      storedUser.password === loginData.password
    ) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  // Handle Sign-Up
  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(signUpData));
    alert("Sign-Up Successful! Please login.");
    setAction(""); // Switch back to Login form
  };

  // Handle Input Changes
  const handleInputChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`full ${action}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onChange={(e) => handleInputChange(e, setLoginData)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e, setLoginData)}
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={() => setAction("active")}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={signUpData.name}
              onChange={(e) => handleInputChange(e, setSignUpData)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={(e) => handleInputChange(e, setSignUpData)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={(e) => handleInputChange(e, setSignUpData)}
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setAction("")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
