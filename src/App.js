import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import './App.css';
import store from "./store";
import Navbar from "./components/navbar";
import FrontPage from "./components/frontPage";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import ProfileUpdate from "./components/ProfileUpdate";
import { login } from "./components/authSlice";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Modal from 'react-modal';
// ...

Modal.setAppElement('#root');



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      axios
        .get("/api/user", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          const user = response.data;
          dispatch(login(user));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<FrontPage />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile" element={<ProfileUpdate />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;

