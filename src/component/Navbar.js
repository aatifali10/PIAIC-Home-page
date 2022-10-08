import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img
          src={"https://www.piaic.org/static/media/Logo.fb7de414.svg"}
          alt=""
        />
      </div>
      <ul className="nav-bar">
        <li>How it Works</li>
        <li>Apply</li>
        <li>Available Programs</li>
        <li>About</li>
        <li>WIT</li>
      </ul>
    </div>
  );
};

export default Navbar;
