import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="right-side">
        <img
          src={"https://www.piaic.org/static/media/Logo.fb7de414.svg"}
          alt=""
        />
      </div>
      <div className="left-side">
        <ul>
          <li>How it Works</li>
          <li>Apply</li>
          <li>Available Programs</li>
          <li>About</li>
          <li>WIT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
