import React from 'react';
import '../style/dashboard.css';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
//import logoimg from '../assets/img/Favicon.png'
import Admin from '../Admin';
import User from '../User';

const Dashboard = () => {
    const anothernav=useNavigate();
    const usernav=()=>{
      anothernav("/user");
    }
    const adminnav=()=>{
      anothernav("/admin");
    }
  return (
    <div className='outerdivd'>
      
      <nav>
        <div onClick={usernav} style={{color:'white',cursor:'pointer'}}>User </div>
        <div onClick={adminnav} style={{color:'white',cursor:'pointer'}}>Admin</div>
      </nav>
      <Routes>
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
    
  );
};

export default Dashboard;

