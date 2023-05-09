import "./FlagItem.scss";

import { Link } from "react-router-dom";

// DECONSTRUCT FLAGS FROM FLAG LIST
function FlagItem({
  name,
  population,
  region,
  capital,
  image,
  flagId,
  isDarkMode,
}) {
  
  return (
    // CREATE LINK FOR FLAG DETAILS PAGE & PASS DATA FOR FLAG LIST
    <li className={`card ${isDarkMode ? "dark" : ""}`}>
      <Link to={`/flags/${flagId}`}>
        <img className="card__img" src={image} alt={name} />
        <div className="card__text-container">
          <h1 className={`card__header ${isDarkMode ? "dark" : ""}`}>{name}</h1>
          <p className={`card__text ${isDarkMode ? "dark" : ""}`}>
            <span className="card__text-bold">Population</span>: {population}
          </p>
          <p className={`card__text ${isDarkMode ? "dark" : ""}`}>
            <span className="card__text-bold">Region</span>: {region}
          </p>
          <p className={`card__text ${isDarkMode ? "dark" : ""}`}>
            <span className="card__text-bold">Capital</span>: {capital}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default FlagItem;
