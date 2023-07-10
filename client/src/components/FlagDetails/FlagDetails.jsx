import "./FlagDetails.scss";
import NavBar from "../NavBar/NavBar";

import WhiteArrow from "../../assets/icons/white-arrow.png";
import BackArrow from "../../assets/icons/arrowBack.svg";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// URL FOR BACK END API
const URL = "https://flags-api.onrender.com";

function FlagDetails() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DARK MODE TOGGLE
  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    const body = document.body;
    const html = document.documentElement;
    if (newDarkMode) {
      body.classList.add("dark");
      html.classList.add("dark-mode");
    } else {
      body.classList.remove("dark");
      html.classList.remove("dark-mode");
    }
  };

  // GET FLAG ID FROM URL
  const { flagId } = useParams();

  // CREATE STATE FOR FLAG DETAILS
  const [flag, setFlag] = useState(null);

  // FETCH FLAG DETAILS FROM BACK END API
  useEffect(() => {
    axios
      .get(`${URL}/flags/${flagId}`)
      .then((response) => {
        console.log("FLAG DETAILS DATA:", response.data)
        const flagData = response.data;
        setFlag(flagData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [flagId]);
 
  // INITIALIZE DARK MODE STATE BASED ON USERES PREFERENCE STORED IN LOCAL STORAGE
  useEffect(() => {
    const body = document.body;
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      body.classList.remove("dark");
    }
    document.documentElement.classList.toggle(
      "dark-mode",
      storedDarkMode === "true"
    );
  }, []);
 if (!flag) {
  return
 }
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
    <>
      <NavBar
        handleToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <section className={`details ${isDarkMode ? "dark" : ""}`}>
        <Link className="details-link" to="/">
          <button className={`details-link__btn ${isDarkMode ? "dark" : ""}`}>
            <img
              className="details-link__image"
              src={isDarkMode ? WhiteArrow : BackArrow}
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
                  <span className="details-container__more-info-bold">
                    Native Name
                  </span>
                  : {nativeName}
                </p>
                <p>
                  <span className="details-container__more-info-bold">
                    Population
                  </span>
                  : {population.toLocaleString()}
                </p>
                <p>
                  <span className="details-container__more-info-bold">
                    Region
                  </span>
                  : {region}
                </p>
                <p>
                  <span className="details-container__more-info-bold">
                    Sub Region
                  </span>
                  : {subregion}
                </p>
                <p>
                  <span className="details-container__more-info-bold">
                    Capital
                  </span>
                  : {capital}
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
                <p className="details-container__country-border">
                  Border Countries:
                </p>
                {borders &&
                  borders.map((border) => (
                    <Link key={border} to={`/flags/${border}`}>
                      <button
                        className={`details-container__btn ${
                          isDarkMode ? "dark" : ""
                        }`}
                      >
                        {border}
                      </button>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FlagDetails;
