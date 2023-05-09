import "./FlagList.scss";
import FlagItem from "../FlagItem/FlagItem";

// DECONSTRUCT FLAGS FROM HOME PAGE
function FlagList({ flags }) {
  return (
    <section className="flag-list">
      <ul className="flag-list__container">

        {/* MAP THROUGH FLAGS */}
        {flags
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
          />
        ))}

      </ul>
    </section>
  );
}

export default FlagList;
