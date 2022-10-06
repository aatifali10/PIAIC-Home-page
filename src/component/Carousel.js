import { coursel } from "../data";

const Carousel = () => {
  return (
    <>
      <h1 className="margin">Images</h1>
      <div className="coursel">
        {coursel.map((elem) => {
          const { id } = elem;
          return (
            <div className="slider">
              <div key={id} className="img">
                <img
                  src={elem.image}
                  alt=""
                  style={{ width: "40vw", height: "40vh", objectFit: "cover" }}
                />
                <div className="text">
                  <h1>{elem.title}</h1>
                  <h2>{elem.para}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
