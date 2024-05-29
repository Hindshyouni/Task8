import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-img">
          <img src="images/logo.svg" />
          <span>Digital marketing agency </span>
        </div>

        <div className={`nav-item  ${isOpen && "open"}`}>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Clients & Partners</a>
          <a href="#">About Us</a>
          <a href="#">Let's Talk</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
