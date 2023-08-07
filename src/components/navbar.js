import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page after logout
  };

  const handleRegistration = () => {
    // Perform registration functionality
    // After successful registration, redirect to the desired page
    navigate('/register');
  };

  const handleLogin = () => {
    // Perform login functionality
    // After successful login, redirect to the desired page
    navigate('/login');
  };

  return (
    <>
      {/* Navbar */}
      
      <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
        <div className="container">
          <Link id="color" to="/">
            HELLOMED
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Profile">
                     Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/messages">
                      Messages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-dark ms-3">
                      Find Doctors
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-danger ms-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={handleLogin}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-dark ms-3"
                      onClick={handleRegistration}
                    >
                      Get Started
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
