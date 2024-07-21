/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import '../style/Admindisplayblog.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import DOMPurify from 'dompurify';
import {AdminNavbar} from './AdminNavbar'
export default function Adimdisplayblog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 50000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
 

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://tolet-globe-backend.onrender.com/blogs/")
      .then((response) => {
        setBlogs(response.data);
        console.log(blogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);
  const shownav = useNavigate();
  const goto = (id) => {
    localStorage.setItem('blogid', id);
    shownav('/admin/showblog');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const del = async (id) => {
    try {
      const response = await fetch(`https://tolet-globe-backend.onrender.com/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if (response.status === 200) {
        alert('Blog deleted Successfully');
       window.location.reload();  // Refresh the data without reloading the page
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImage = async (id) => {
    try {
      const response = await fetch(`https://tolet-globe-backend.onrender.com/blogs/${id}/image`);
      const blob = await response.blob();
     
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error(error);
      return ; // Fallback to a default image if fetch fails
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflowY: 'auto' }}>
      <AdminNavbar/>
      <h1 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}>Blogs</h1>
      
      <div className='blog-card-container' style={{ width: '100%', height: '100%', padding: '0', margin: '0', display: 'flex', justifyContent: 'space-between'}}>
     
        {blogs.map((element, index) => (
          <div key={index} className="col-md-4" style={{ backgroundColor: 'black' }}>
          
            <Card style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
              <img alt="Sample" src={element.img} style={{ width: '100%',height:'40%', borderRadius: '4%' }} />
              <CardBody className="text-light start" style={{ width: '100%',height:'60%' }}>
                <h6 className='displayblogdate'>{formatDate(element.updatedAt)}</h6>
                <CardTitle className="displayblogtitle" tag="h4">
                  {element.title.substring(0, 40)}....
                </CardTitle>
              
                <CardText><div
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(element.content?.substring(0,60).replace(/^"|"$/g, '').replace(/--/g, '-')),
  }}
/></CardText>
                <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'0',margin:'0'}}>
                  <button style={{backgroundColor:'#3cbcb1',padding:'1%',borderRadius:'3%'}} onClick={() => goto(element._id)}>Read More <i className="fas fa-arrow-right" style={{ fontSize: '12px', marginLeft: '5px' }} /></button>
                  <button style={{backgroundColor:'tomato',padding:'2%',borderRadius:'3%'}} onClick={() => del(element._id)}>Delete <i className="fas fa-trash-alt" style={{ fontSize: '12px', marginLeft: '5px' }} /></button>
                </div>
                <CardSubtitle className="displayblogauthor" tag="h6">
                  by {element.author.substring(0, 20)}
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        ))}
        
      </div>
    </div>
  );
}