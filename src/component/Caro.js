import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Pic from "../images/Pic1.jpg";
import Pic2 from "../images/Pic2.jpg";
import Pic3 from "../images/Pic3.jpg";

const Caro = () => {
  return (
    <Carousel className="main-slide">
      <div className="slider">
        <img src={Pic} alt="launching side image1" />

        <div className="slide">
          <h6>Meeting with Chief Secretary Sindh.</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non
            quasi ex quam inventore aut, quis rerum recusandae nihil nulla
            blanditiis distinctio iusto, repellat velit harum libero cum earum
            odio id ipsam. Eligendi velit mollitia quia perferendis itaque ab
            officiis consectetur fuga quod porro libero, provident repudiandae?
            Harum, non provident.
          </p>
        </div>
      </div>
      <div className="slider">
        <img src={Pic2} alt="pic" />
        <div className="slide">
          <h6>President launching the PIAIC website.</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea esse
            eum natus laborum? Autem veritatis, accusamus corporis dignissimos
            non tenetur numquam tempore, fuga voluptatem vel praesentium dicta
            aliquam nulla beatae necessitatibus labore distinctio est magni
            molestiae ipsam delectus omnis! Aspernatur eligendi accusantium,
            expedita earum eveniet libero. Qui nobis et vel.
          </p>
        </div>
      </div>
      <div className="slider">
        <img src={Pic3} alt="pic" />
        <div className="slide">
          <h6>First meeting with the President.</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            officiis magni, quia itaque eius, recusandae reprehenderit
            necessitatibus ullam eum autem ex molestiae consequuntur,
            repudiandae asperiores. Fuga doloribus, perspiciatis itaque, illum
            soluta officiis sint quos iusto magnam distinctio at ea ad
            architecto numquam commodi! Minus veniam ipsam magni iure dolorem
            unde?
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Caro;
