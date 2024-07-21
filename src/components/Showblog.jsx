import React,{useEffect,useState} from 'react'
import '../style/Showblog.css'
import img1 from '../assets/image/blog/blog1/image1.png';
import axios from "axios";
import DOMPurify from 'dompurify';
import { AdminNavbar } from './AdminNavbar';
export default function Showblog() {
    const [targetBlog, setTargetBlog] = useState({});
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://tolet-globe-backend.onrender.com/blogs/")
      .then((response) => {
       
        const targetBlogData = response.data.find(blog => blog._id === localStorage.getItem('blogid'));
        if (targetBlogData) {
            console.log(targetBlogData);
          setTargetBlog(targetBlogData);
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <div style={{width:'100vw',height:'100vh',color:'white'}}>
         <AdminNavbar/>
       <p className='showblogdate'>{formatDate(targetBlog.updatedAt)}</p>
      <h1  className='blogtitle'>{targetBlog.title}</h1>
      <p>By {targetBlog.author}</p>
      
      <div className='showblogcontent'>
      <img src={targetBlog.img} className="showblogimage" style={{width:'80%',paddingBottom:'2%',marginLeft:'10%'}}></img>
      <div
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(targetBlog.content?.replace(/^"|"$/g, '').replace(/--/g, '-')),
  }}
/>
      </div>
    </div>
  )
}
