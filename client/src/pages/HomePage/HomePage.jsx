import "./HomePage.scss";
import FlagList from "../../components/FlagList/FlagList";
import Filter from "../../components/Filter/Filter";

import { useState, useEffect } from "react";

import axios from "axios";

// CREATE URL FOR BACK END API
const URL = "http://localhost:9090";

function HomePage() {
  // CREATE STATE FOR FLAG LIST
  const [flags, setFlags] = useState(null);

  // CREATE STATE FOR SEARCH BAR
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
    <div className="home">
      <Filter
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSelectRegion={handleSelectRegion}
      />
      {flags && (
        <FlagList
          flags={flags}
          searchTerm={searchTerm}
          region={selectedRegion}
        />
      )}
    </div>
  );
}

export default HomePage;
