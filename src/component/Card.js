import { data } from "../data";

const Card = () => {
  return (
    <div className="cards">
      {data.map((item) => {
        const { id } = item;
        return (
          <div className="card" key={id}>
            <h6>{item.course}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
