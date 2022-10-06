import React from "react";

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

          <span>+92-308-2220203 (Whatsapp as well)</span>
          <h2>Connect with us</h2>
        </div>
      </div>
      <div className="footer-logo">
        <h3>Powered by</h3>
        <img
          src="https://www.piaic.org/static/media/panacloudfootericon.130c4779.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
