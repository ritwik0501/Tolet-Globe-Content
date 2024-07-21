import { Link } from "react-router-dom";
import Logo from "../assets/img/Favicon.png";
import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../style/navbar.css"
import { ReactComponent as CustomIcon } from '../assets/image/home/NavbarToggleIcon.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [expanded, setExpanded] = useState(false);
 
    const handleNavLinkClick = (link) => {
        setActiveLink(link);
        setExpanded(false);
    };

    const toggleNavbar = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    return ( 
        <Navbar expand="lg" className="navbar-container">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    <img src={Logo} alt="Logo" />
                </Link>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={toggleNavbar}  
                    style={{ border: 'none', backgroundColor: 'transparent' }} 
                >
                    <CustomIcon 
                        style={{ 
                            transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            padding : '4px'
                        }} 
                    />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleNavLinkClick('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/service" className={`nav-link ${activeLink === 'service' ? 'active' : ''}`} onClick={() => handleNavLinkClick('service')}>
                            Service
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blog" className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => handleNavLinkClick('blog')}>
                            Blog
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavLinkClick('contact')}>
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavLinkClick('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/property" className={`nav-link ${activeLink === 'propertyListing' ? 'active' : ''}`} onClick={() => handleNavLinkClick('propertyListing')}>
                            Property Listing
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};
