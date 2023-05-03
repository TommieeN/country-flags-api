import "./FlagItem.scss";
import belgium from "../../assets/BelgiumFlag.png";

import { Link } from "react-router-dom";

function FlagItem({ name, population, region, capital, image }) {
  return (
    <li>
    <div className="card">
      <Link to="/Details">
        <img className="card__img" src={image} alt={image} />
        <div className="card__text-container">
          <h1 className="card__header">{name}</h1>
          <p className="card__text">
            <span className="card__text-bold">Population</span>: {population}
          </p>
          <p className="card__text">
            <span className="card__text-bold">Region</span>: {region}
          </p>
          <p className="card__text">
            <span className="card__text-bold">Capital</span>: {capital}
          </p>
        </div>
      </Link>
    </div>
    </li>
  );
}

export default FlagItem;
