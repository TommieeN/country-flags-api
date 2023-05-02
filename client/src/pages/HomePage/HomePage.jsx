import "./HomePage.scss";
import FlagList from "../../components/FlagList/FlagList";
import Filter from "../../components/Filter/Filter";

function HomePage() {
    

  return (
    <div className="home">
      <Filter />
      <FlagList/>
    </div>
  )
}

export default HomePage