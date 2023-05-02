import "./FlagItem.scss";
import canada from "../../assets/candian-flag.png";

import { Link } from "react-router-dom";

function FlagItem() {
  return (
    <Link to="/Details">
    <div className="card">
      <img className="card__img" src={canada} alt="canadian flag" />
      <div className="card__text-container">
        <h1 className="card__header">Canada</h1>
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
    </Link>
  );
}

export default FlagItem;
