import "./HomePage.scss";

import FlagList from "../../components/FlagList/FlagList";
import Filter from "../../components/Filter/Filter";
import NavBar from "../../components/NavBar/NavBar";

import axios from "axios";
import { useState, useEffect } from "react";

// URL FOR BACK END API
const URL = "https://flags-api.onrender.com";

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

  // DARK MODE USE STATE
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DARK MODE TOGGLE
  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    const body = document.body;
    if (newDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };

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
      <section className="home">
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
      </section>
  );
}

export default HomePage;
