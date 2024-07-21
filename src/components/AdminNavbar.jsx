import { Link } from "react-router-dom";
import Logo from "../assets/img/Favicon.png";
import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../style/AdminNavbar.css"
export const AdminNavbar = () => {
    const [activeLink, setActiveLink] = useState('blogs');
 
   
    return ( 
        <Navbar expand="lg" className="navbar-container">
            <div className="container-fluid">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
                <Navbar.Collapse id="basic-navbar-nav">
               
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/admin/" className={`nav-link ${activeLink === 'blogs' ? 'active' : ''}`} onClick={e=>setActiveLink('blogs')}>
                           Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} to="/admin/postblog" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={e=>setActiveLink('home')}>
                            Post a Blog
                        </Nav.Link>
                       
                      
                        <Nav.Link as={Link} to="/admin/property" className={`nav-link ${activeLink === 'property' ? 'active' : ''}`} onClick={e=>setActiveLink('property')}>
                          Property Listing
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};