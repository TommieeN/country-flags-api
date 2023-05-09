import "./FlagList.scss";
import FlagItem from "../FlagItem/FlagItem";

// DECONSTRUCT FLAGS FROM HOME PAGE
function FlagList({ flags, searchTerm, region, isDarkMode }) {

  const filteredFlags = flags
  .filter((flag) => 
  flag.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((flag) => region === null || flag.region === region)
  .sort((a, b) => a.region.localeCompare(b.region))

  return (
    <section className={`flag-list ${isDarkMode ? "dark" : "" }`}>
      <ul className="flag-list__container">

        {/* MAP THROUGH FLAGS */}
        {filteredFlags
        .map((flag) => (
          <FlagItem 
          key={flag.name} 
          flags={flags}
          image={flag.image}
          name={flag.name}
          population={flag.population}
          region={flag.region}
          capital={flag.capital}
          flagId={flag.id}
          isDarkMode={isDarkMode}
          />
        ))}

      </ul>
    </section>
  );
}

export default FlagList;
