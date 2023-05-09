import "./FlagDetails.scss";
import BackArrow from "../../assets/icons/arrowBack.svg";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// URL FOR BACK END API
const URL = "http://localhost:9090";

function FlagDetails() {

  // GET FLAG ID FROM URL
  const { flagId } = useParams();

  // CREATE STATE FOR FLAG DETAILS
  const [flag, setFlag] = useState(null);

  // FETCH FLAG DETAILS FROM BACK END API
  useEffect(() => {
    axios
      .get(`${URL}/flags/${flagId}`)
      .then((response) => {
        const flagData = response.data;
        setFlag(flagData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [flagId]);

  // DECONSTRUCT FLAG DETAILS
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag: image,
  } = flag || {};

  // INSERT DATA INTO FLAG DETAILS PAGE
  return (
    <section className="details">
      <Link className="details-link" to="/">
        <button className="details-link__btn">
          <img
            className="details-link__image"
            src={BackArrow}
            alt="back-arrow"
          />
          Back
        </button>
      </Link>
      <div className="details-container">
        <div className="details-container__img-wrapper">
          <img className="details-container__img" src={image} alt={name} />
        </div>
        <div className="details-container__wrapper">
          <h1 className="details-container__header">{name}</h1>
          <div className="details-container__info">
          <div className="details-container__info-wrapper">
            <p>
              <span className="details-container__more-info-bold">Native Name</span>:{" "}
              {nativeName}
            </p>
            <p>
              <span className="details-container__more-info-bold">Population</span>:{" "}
              {population}
            </p>
            <p>
              <span className="details-container__more-info-bold">Region</span>:{" "}
              {region}
            </p>
            <p>
              <span className="details-container__more-info-bold">Sub Region</span>:{" "}
              {subregion}
            </p>
            <p>
              <span className="details-container__more-info-bold">Capital</span>:{" "}
              {capital}
            </p>
          </div>
          <div className="details-container__more-info">
            <p>
              <span className="details-container__more-info-bold">
                Top Level Domain
              </span>
              : {topLevelDomain}
            </p>
            <p>
              <span className="details-container__more-info-bold">
                Currencies
              </span>
              :{" "}
              {currencies &&
                currencies.map((currency) => currency.name).join(", ")}{" "}
            </p>
            <p>
              <span className="details-container__more-info-bold">
                Languages
              </span>
              :{" "}
              {languages &&
                languages.map((language) => language.name).join(", ")}{" "}
            </p>
          </div>
          </div>
          <div className="details-container__countries">
            <h3>Border Countries:</h3>
            <div className="details-container__btn-wrapper">
              <p className="details-container__country-border">Border Countries:</p>
              {borders &&
                borders.map((border) => (
                  <Link key={border} to={`/flags/${border}`}>
                    <button className="details-container__btn">{border}</button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlagDetails;
