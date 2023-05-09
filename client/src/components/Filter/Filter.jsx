import "./Filter.scss";
import { useState } from "react";

function Filter({ searchTerm, onSearchTermChange, onSelectRegion, isDarkMode }) {
  // USESTATE FOR DROPDOWN
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // USESTATE FOR SELECTED REGION
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  // FILTER REGION OPTIONS
  const regions = ["All Regions", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  // CLICK FUNCTION TO SET SELECTED REGION TO FILTER FLAGS
  const handleDropdownClick = (region) => {
    setSelectedRegion(region);
    if (region === "All Regions") {
      onSelectRegion(null);
    } else {
    onSelectRegion(region);
    }
    setIsDropdownOpen(false);
  };

  // RENDER FILTER COMPONENT
  return (
    <div className={`filter ${isDarkMode ? "dark" : "" }`}>
      <input 
      className={`filter__search ${isDarkMode ? "dark" : "" }`}
      placeholder="Search for a country..." 
      value={searchTerm}
      onChange={onSearchTermChange}
      />
      <div className="filter__dropdown">
        <button
          className={`filter__dropdown-toggle ${
            isDropdownOpen && isDarkMode ? "filter__dropdown-toggle-down" : ""
          } ${isDarkMode ? "dark" : "" }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedRegion}
        </button>
        {isDropdownOpen && (
          <ul className={`filter__list ${isDarkMode ? "dark" : "" }`}>
            {regions.map((region) => (
              <li
                key={region}
                className={`filter__list-item ${isDarkMode ? "dark" : "" }`}
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
