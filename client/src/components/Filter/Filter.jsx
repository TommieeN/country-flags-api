import "./Filter.scss";
import { useState } from "react";

function Filter() {
  // USESTATE FOR DROPDOWN
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // USESTATE FOR SELECTED REGION
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  // FILTER REGION OPTIONS
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // CLICK FUNCTION TO SET SELECTED REGION AND CLOSE DROPDOWN
  const handleDropdownClick = (region) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };

  // RENDER FILTER COMPONENT
  return (
    <div className="filter">
      <input className="filter__search" placeholder="Search for a country..." />
      <div className="filter__dropdown">
        <button
          className={`filter__dropdown-toggle ${
            isDropdownOpen ? "filter__dropdown-toggle-down" : ""
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedRegion}
        </button>
        {isDropdownOpen && (
          <ul className="filter__list">
            {regions.map((region) => (
              <li
                key={region}
                className="filter__list-item"
                onClick={() => handleDropdownClick(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filter;
