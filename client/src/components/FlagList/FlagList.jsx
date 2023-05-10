import "./FlagList.scss";
import FlagItem from "../FlagItem/FlagItem";

// DECONSTRUCT FLAGS FROM HOME PAGE & FILTER SPECIFIC FLAGS
function FlagList({ flags, searchTerm, region, isDarkMode }) {
  const filteredFlags = flags
    .filter((flag) =>
      flag.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((flag) => region === null || flag.region === region)
    .sort((a, b) => a.region.localeCompare(b.region));

  return (
    <main className={`flag-list ${isDarkMode ? "dark" : "" }`}>
      <ul className="flag-list__container">
        {/* MAP THROUGH FLAGS */}
        {filteredFlags.map((flag) => (
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
    </main>
  );
}

export default FlagList;
