/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Layout from "../Layout/Layout.jsx";
import "./../Auth/Auth.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
//import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth, setAuth] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFocus = (e) => {
    e.target.previousElementSibling.classList.add("glowIcon");
  };

  const handleBlur = (e) => {
    e.target.previousElementSibling.classList.remove("glowIcon");
  };

  const inputs = document.querySelectorAll(".input_text");
  inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      navigate("/");
      /*if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        
      } else {
        toast.error(res.data.message);
      }*/
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div className="login_form_container">
  <div className="login_form">
    <h2>Login</h2>
    <div className="input_group">
      <i className="fa fa-user" />
      <input type="email" placeholder="Username" className="input_text" autoComplete="off" id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
    </div>
    <div className="input_group">
      <i className="fa fa-unlock-alt" />
      <input type="password" placeholder="Password" className="input_text" autoComplete="off" value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
                required />
    </div>
    <div className="button_group" id="login_button">
      <button type="submit" onSubmit={handleSubmit}>LOGIN</button>
    </div>
    <div className="fotter">
      <a href="#" onClick={() => navigate("/forget-password")}>Forgot Password ?</a>
      <a href="#" onClick={() => navigate("/register")}>Register</a>
    </div>
  </div>
</div>

      </form>
    </div>
  );
};

export default Login;
