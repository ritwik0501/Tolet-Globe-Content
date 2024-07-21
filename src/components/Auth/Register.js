/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Layout from "../Layout/Layout.jsx";
import "./../Auth/Auth.css";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
  
    //form funtion
    const handleSubmit = async (e) => {
      e.preventDefault(); //to prevent refreshing of the page while submitting the register form
      try {
        const res = await axios.post("/api/v1/auth/register", {
          name,
          email,
          password,
          phone,
          address,
          answer
        });
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
      console.log(name, email, password, phone, address);
    };
  return (
    
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className="register_form_container">
      <div className="register_form">
        <h2>Register</h2>
        <div className="input_group">
        <i className="fa fa-user" />
          <input
            type="text"
            placeholder="Username"
            className="input_text"
            autoComplete="off"
            id="exampleInputUser1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input_group">
        <i className="fa fa-envelope" />
          <input
            type="email"
            placeholder="Email"
            className="input_text"
            autoComplete="off"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input_group">
        <i className="fa fa-unlock-alt" />
          <input
            type="password"
            placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
              required
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
        <i className="fa fa-phone" />
          <input
            type="number"
            placeholder="Phone Number"
            className="input_text"
            autoComplete="off"
            id="exampleInputPhoneNumber1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input_group">
        <i className="fa fa-address-card" />
          <input
            type="text"
            placeholder="Address"
            className="input_text"
            autoComplete="off"
            id="exampleInputAddress1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="input_group">
        <i className="fa fa-question-circle" />
          <input
            type="text"
            placeholder="Your first School"
            className="input_text"
            autoComplete="off"
            id="exampleInputanswer1"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <div className="register_button">
          <button type="submit" >REGISTER</button>
        </div>
      </div>
    </div>    
        </form>
      </div>
    
  );
};

export default Register;
