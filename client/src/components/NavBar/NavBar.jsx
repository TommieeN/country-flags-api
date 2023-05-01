import "./NavBar.scss";
import Moon from "../../assets/icons/moon.svg";

function NavBar() {
  return (
    <div className="nav-bar">
      <p className="nav-bar__heading">Where in the world?</p>
      <div className="nav-bar__wrap">
        <img className="nav-bar__moon" src={Moon} alt="crescent-moon" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default NavBar;
