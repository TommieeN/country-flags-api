import "./FlagItem.scss";
import belgium from "../../assets/BelgiumFlag.png";

import { Link } from "react-router-dom";

function FlagItem() {
  return (
    <div className="card">
      <Link to="/Details">
        <img className="card__img" src={belgium} alt="belgium-flag" />
        <div className="card__text-container">
          <h1 className="card__header">Belgium</h1>
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
      </Link>
    </div>
  );
}

export default FlagItem;
