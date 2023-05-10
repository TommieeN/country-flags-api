import "./NavBar.scss";

import whiteMoon from "../../assets/icons/white-moon.png";
import Moon from "../../assets/icons/moon.svg";

function NavBar({ handleToggleDarkMode, isDarkMode }) {
  return (
    <div className={`nav-bar ${isDarkMode ? "dark" : ""}`}>
      <p className="nav-bar__heading">Where in the world?</p>
      <button
        className={`nav-bar__wrap ${isDarkMode ? "dark" : ""}`}
        onClick={handleToggleDarkMode}
      >
        <img
          className="nav-bar__moon"
          src={isDarkMode ? whiteMoon : Moon}
          alt="crescent-moon"
        />
        <p className="nav-bar__text">Dark Mode</p>
      </button>
    </div>
  );
}

export default NavBar;
