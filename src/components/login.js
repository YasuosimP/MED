import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add this line to use the useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent form from doing a page refresh
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      const { data } = response;
      localStorage.setItem('authToken', data.token);
      dispatch(login({ email, password })); // Pass the user credentials to the login action
      navigate('/profile'); 
    } catch (error) {
      console.error(error);
      // handle error here
    }
  };
  return (
      <section className="register-photo" style={{ backgroundColor: "transparent" }}>
    <div className="form-container" style={{ marginTop: 40 }}>
      <div
        className="image-holder"
        style={{
          background: 'url("assets/img/login.jpg") left / cover no-repeat '
        }}
      />
      <form method="post" onSubmit={handleSubmit} style={{ height: 525 }}>
        <h2 className="text-center">
          Welcome home
          <br />
        </h2>
        <div className="form-group mb-3">
       <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
            value={email} required
            onChange={(e) => setEmail(e.target.value)}
    />
        </div>
        <div className="form-group mb-3">
         <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div
          id="passwordsError"
          style={{ display: "none", marginBottom: "16.5px" }}
        >
          <span
            id="errorMessage"
            className="text-danger"
            style={{ fontSize: 13 }}
          />
        </div>
        <div className="form-group mb-3">
          <button
            className="btn btn-primary d-block w-100"
            id="submitButton"
            type="submit"
            style={{ color: "rgb(255,255,255)", backgroundColor: "#eb3b60" }}
          >
            Login
          </button>
        </div>
        <a className="already" href="login.html">
          Don't Have an account ?&nbsp;
          <strong>
            <span style={{ color: "rgb(46, 50, 54)" }}>Login here.</span>
          </strong>
          <br />
        </a>
      </form>
    </div>
  </section>
  
   )
  }
  export default Login;