import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img
          src={"https://www.piaic.org/static/media/Logo.fb7de414.svg"}
          alt=""
        />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">How It Works</a>
        <a href="/about">Apply</a>
        <a href="/service">Available Programs</a>
        <a href="/contact">About</a>
        <a href="/contact">WIT</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
