import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={props.img} alt="" className="card-img" />
        </div>

        <h3>{props.itemName}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          error.
        </p>
      </div>
    </div>
  );
};
export default Card;
