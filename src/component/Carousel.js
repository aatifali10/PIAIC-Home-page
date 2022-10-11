import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Pic from "../images/Pic1.jpg";
import Pic2 from "../images/Pic2.jpg";
import Pic3 from "../images/Pic3.jpg";

const Caro = () => {
  return (
    <>
      <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        <div className="event">
          <img src={Pic} alt="launching side image1" />

          <div className="event-content">
            <h6>Meeting with Chief Secretary Sindh.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              non quasi ex quam inventore aut, quis rerum recusandae nihil nulla
              blanditiis distinctio iusto, repellat velit harum libero cum earum
              odio id ipsam. Eligendi velit mollitia quia perferendis itaque ab
              officiis consectetur fuga quod porro libero, provident
              repudiandae? Harum, non provident.
            </p>
          </div>
        </div>
        <div className="event">
          <img src={Pic2} alt="pic" />

          <div className="event-content">
            <h6>President launching the PIAIC website.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              non quasi ex quam inventore aut, quis rerum recusandae nihil nulla
              blanditiis distinctio iusto, repellat velit harum libero cum earum
              odio id ipsam. Eligendi velit mollitia quia perferendis itaque ab
              officiis consectetur fuga quod porro libero, provident
              repudiandae? Harum, non provident.
            </p>
          </div>
        </div>
        <div className="event">
          <img src={Pic3} alt="pic" />

          <div className="event-content">
            <h6>First meeting with the President.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              non quasi ex quam inventore aut, quis rerum recusandae nihil nulla
              blanditiis distinctio iusto, repellat velit harum libero cum earum
              odio id ipsam. Eligendi velit mollitia quia perferendis itaque ab
              officiis consectetur fuga quod porro libero, provident
              repudiandae? Harum, non provident.
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Caro;
