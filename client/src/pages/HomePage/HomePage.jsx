import "./HomePage.scss";
import FlagList from "../../components/FlagList/FlagList";
import Filter from "../../components/Filter/Filter";

import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:9090";

function HomePage() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/flags`)
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
      <Filter />
      {flags && (<FlagList flags={flags} /> )}
      {/* <FlagList/> */}
    </div>
  )
}

export default HomePage