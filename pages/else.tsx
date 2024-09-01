
import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

interface NavBarProps {
  brandName: string;
  navItems?: Array<{ label: string; href: string }>;
}

export default function NavBar({ brandName, navItems }: NavBarProps) {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems?.map((item) => (
              <Nav.Link 
                key={item.href} 
                href={item.href}
                onClick={() => onUpdateActiveLink(item.label)}
                className={activeLink === item.label ? 'active navbar-link' : 'navbar-link'}
              >
                {item.label}
              </Nav.Link>
            ))}
            {/* ... rest of the Nav component ... */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src="" alt=""/></a>
              <a href="#"><img src="" alt=""/></a>
              <a href="#"><img src="" alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
