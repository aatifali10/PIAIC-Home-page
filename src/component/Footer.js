import React from "react";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="navigation">
          <h5>Navigation</h5>

          <ul>
            <li>Home</li>
            <li>Apply</li>
            <li>How it Works</li>
            <li>Artificial Intelligence</li>
            <li>Cloud Native and Mobile Web Computing</li>
            <li>Blockchain</li>
            <li>Internwr og Things and AI</li>
            <li>About The President</li>
            <li>Management Committee</li>
            <li>Women Inclusion in Technology (WIT)</li>
          </ul>
        </div>
        <div className="Locations">
          <h5>Locations</h5>
          <h3>PIAIC Helpline</h3>

          <span>
            <BsFillTelephoneFill
              style={{
                color: "#00bf9a",
                marginRight: "10px",
                fontSize: "20px",
              }}
            />
            +92-308-2220203 (Whatsapp as well)
          </span>
          <h2>Connect with us</h2>
          <BsFacebook
            style={{ color: "#00bf9a", fontSize: "30px", marginRight: "10px" }}
          />
          <AiFillYoutube style={{ color: "#00bf9a", fontSize: "35px" }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
