const cardDetails = [
  {
    header: "Artificial Intelligence",
    descritpion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.",
    cardClass: "AI",
  },
  {
    header: "Cloud Native and mobile Web",
    descritpion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.",
    cardClass: "cloud",
  },
  {
    header: "Blockchain",
    descritpion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.",
    cardClass: "blockchain",
  },
  {
    header: "Internet of Things and AI",
    descritpion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto.",
    cardClass: "human-things",
  },
];

const Card = () => {
  return (
    <>
      <div className="card-container">
        {cardDetails.map(({ cardClass, header, descritpion }) => (
          <div className={`card ${cardClass}`} key={cardClass}>
            <h4>{header}</h4>
            <p>{descritpion}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
