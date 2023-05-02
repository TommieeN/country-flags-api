import "./FlagItem.scss";
import canada from "../../assets/candian-flag.png";

function FlagItem() {
  return (
    <div className="card">
      <img className="card__img" src={canada} alt="canadian flag" />
      <div className="card__text-container">
        <h2 className="card__header">Canada</h2>
        <p className="card__text">
          <span className="card__text-bold">Population</span>: 81,770,900
        </p>
        <p className="card__text">
          <span className="card__text-bold">Region</span>: Americas
        </p>
        <p className="card__text">
          <span className="card__text-bold">Capital</span>: Ottawa
        </p>
      </div>
    </div>
  );
}

export default FlagItem;
