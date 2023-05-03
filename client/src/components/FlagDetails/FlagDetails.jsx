import "./FlagDetails.scss";
import belgium from "../../assets/BelgiumFlag.png";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/icons/arrowBack.svg";

function FlagDetails() {
  return (
    <section className="details">
      <Link className="details-link" to="/">
        <button className="details-link__btn">
          <img className="details-link__image" src={BackArrow} alt="back-arrow" />
            Back
        </button>
      </Link>
        <div className="details-container">
            <div className="details-container__img-wrapper">
                <img className="details-container__img" src={belgium} alt="canadian-flag" />
            </div>
            <div className="details-container__wrapper">
                <h1 className="details-container__header">
                    Belgium
                </h1>
                <div className="details-container__info">
                    <p><span className="details-container__info-bold">Native Name</span>: Belgie</p>
                    <p><span className="details-container__info-bold">Population</span>: 11,319,511</p>
                    <p><span className="details-container__info-bold">Region</span>: Europe</p>
                    <p><span className="details-container__info-bold">Sub Region</span>: Western Europe</p>
                    <p><span className="details-container__info-bold">Capital</span>: Brussels</p>
                </div>
                <div className="details-container__more-info">
                    <p><span className="details-container__more-info-bold">Top Level Domain</span>: .be</p>
                    <p><span className="details-container__more-info-bold">Currencies</span>: Euro</p>
                    <p><span className="details-container__more-info-bold">Languages</span>: Dutch, French, German</p>
                </div>
                <div className="details-container__countries">
                    <h3>
                        Border Countries:
                    </h3>
                    <div className="details-container__btn-wrapper">
                        <button className="details-container__btn">France</button>
                        <button className="details-container__btn">Germany</button>
                        <button className="details-container__btn">Netherlands</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FlagDetails;
