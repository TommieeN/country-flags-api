import "./FlagDetails.scss";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/icons/arrowBack.svg";

function FlagDetails() {
  return (
    <div>
        <Link to="/"><img src={BackArrow} alt="back-arrow"/></Link>
    </div>
  )
}

export default FlagDetails