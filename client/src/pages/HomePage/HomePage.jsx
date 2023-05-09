import "./HomePage.scss";
import FlagList from "../../components/FlagList/FlagList";
import Filter from "../../components/Filter/Filter";
import NavBar from "../../components/NavBar/NavBar";
import { useState, useEffect } from "react";

import axios from "axios";

// URL FOR BACK END API
const URL = "http://localhost:9090";

function HomePage() {
  // STATE FOR FLAG LIST
  const [flags, setFlags] = useState(null);

  // STATE FOR SEARCH BAR
  const [searchTerm, setSearchTerm] = useState("");

  // STATE FOR REGION FILTER
  const [selectedRegion, setSelectedRegion] = useState(null);

  // FUNCTION TO SET SELECTED REGION
  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  // FUNCTION FOR SEARCH BAR
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  
    const body = document.body;
    const html = document.documentElement;
    if (newDarkMode) {
      body.classList.add("dark");
      html.classList.add("dark-mode");
    } else {
      body.classList.remove("dark");
      html.classList.remove("dark-mode");
    }
  }

  useEffect(() => {
    const body = document.body;
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
      body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      body.classList.remove("dark");
    }
    document.documentElement.classList.toggle(
      "dark-mode", storedDarkMode === 'true'
    )
  }, []);

  // FETCH FLAGS FROM BACK END API
  useEffect(() => {
    axios
      .get(`${URL}/flags`)
      .then((response) => {
        const flagArray = response.data;
        setFlags(flagArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className="home">
    <NavBar 
    isDarkMode={isDarkMode}
    handleToggleDarkMode={handleToggleDarkMode}
    />
      <Filter
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSelectRegion={handleSelectRegion}
        isDarkMode={isDarkMode}
      />
      {flags && (
        <FlagList
          flags={flags}
          searchTerm={searchTerm}
          region={selectedRegion}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
    </>
  );
}

export default HomePage;
