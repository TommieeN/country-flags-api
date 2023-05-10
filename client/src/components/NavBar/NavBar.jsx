import "./NavBar.scss";

import whiteMoon from "../../assets/icons/white-moon.png";
import Moon from "../../assets/icons/moon.svg";

function NavBar({ handleToggleDarkMode, isDarkMode }) {
  return (
    <div className={`nav-bar ${isDarkMode ? "dark" : "" }`}>
      <header className="nav-bar__heading">Where in the world?</header>
      <button
        className={`nav-bar__wrap ${isDarkMode ? "dark" : ""}`}
        onClick={handleToggleDarkMode}
      >
        <img
          className="nav-bar__moon"
          src={isDarkMode ? whiteMoon : Moon}
          alt="crescent-moon"
        />
        Dark Mode
      </button>
    </div>
  );
}

export default NavBar;
