import React from "react";

const Content = () => {
  return (
    <div className="hero-background">
      <div className="container">
        <section className="hero">
          <img
            src="https://www.piaic.org/static/media/president-png.5b5f05c1.png"
            alt=""
          />
          <div className="hero-content">
            <div className="hero-content-header">
              <h1>Presidential Initiative</h1>
              <h5>for Artificial Intelligence & Computing (PIAIC)</h5>
              <p>
                The mission of PIAIC is to reshape Pakistan by revolutionizing
                education, research, and business by adopting latest,
                cutting-edge technologies. Experts are calling this the 4th
                industrial revolution. We want Pakistan to become a global hub
                for AI, data science, cloud native computing, edge computing,
                blockchain, augmented reality, and internet of things.
              </p>
            </div>
            <div className="hero-content-footer">
              <button>APPLY</button>
              <p className="app">
                | 100K<span>Applications Received</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
