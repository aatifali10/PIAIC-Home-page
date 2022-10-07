import React, { useState } from "react";

const Card = () => {
  let [blue, setblue] = useState("blue");

  const bgColorChnage = (blue) => {
    setblue(blue);
  };

  return (
    <>
      <div className="card">
        <div
          className="AI"
          onMouseEnter={bgColorChnage}
          onMouseOut={() => bgColorChnage("white")}
        >
          <div className="blue"></div>
          <h4>Artificial Intelligence</h4>
        </div>
        <div className="cloud">
          <div className="Pink"></div>
          <h4>Cloud Native and mobile Web</h4>
        </div>
        <div className="blockchain">
          <div className="yello"></div>
          <h4>Blockchain</h4>
        </div>
        <div className="human-things">
          <div className="green"></div>
          <h4>Internet of Things and AI</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
