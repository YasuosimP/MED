import React, { useState } from "react";
import axios from 'axios';
import { login } from './authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [sickness, setSickness] = useState("");
  const [sex, setSex] = useState("");
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      // Register the user
      const registerResponse = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role,
        age,
        sickness,
        sex
      });
      
      const { data } = registerResponse;
      localStorage.setItem('authToken', data.token);

      // Store user data in Redux state
      dispatch(login(data.user));

     
      navigate('/profile'); 
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <section className="register-photo" style={{ backgroundColor: "transparent" }}>
      <div className="form-container" style={{ marginTop: 40 }}>
        <div
          className="image-holder"
          style={{
            background: 'url("assets/img/meeting.jpg") left / cover no-repeat'
          }}
        />
        <form method="post" onSubmit={handleSubmit} style={{ height: 525 }}>
          <h2 className="text-center">
            Create an account
            <br />
          </h2>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              value={name} required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="email"
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
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="password"
              id="confirmPassword"
              name="password-repeat" required
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="text"
              name="age"
              placeholder="age"
              value={age} 
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
        <select
          className="form-control "
          id="userRole"
          name="userRole"
          onChange={(e)=>setRole(e.target.value)}
        >
           <option value="default">select role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>
      
          <div className="form-group mb-3">
        <select
          className="form-control "
          id="userSex"
          name="userSex"
          value={sex}
          onChange={(e)=>setSex(e.target.value)}
        >
           <option value="default">sexe</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
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
            <div className="form-check">
              <label className="form-check-label"> 
                <input className="form-check-input" type="checkbox" required/>I agree to the
                license terms.
                <br />
              </label>
            </div>
          </div>
          <div className="form-group mb-3">
            <button
              className="btn btn-primary d-block w-100"
              id="submitButton"
              type="submit"
              style={{ color: "rgb(255,255,255)", backgroundColor: "#eb3b60" }}
            >
              Sign Up
            </button>
          </div>
          <a className="already" href="login.html">
            You already have an account?&nbsp;
            <strong>
              <span style={{ color: "rgb(46, 50, 54)" }} onClick={handleSubmit}>Login here.</span>
            </strong>
            <br />
          </a>
        </form>
      </div>
    </section>
  );
};

export default Register;
