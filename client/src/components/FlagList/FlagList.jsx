import FlagItem from "../FlagItem/FlagItem";
import "./FlagList.scss";

function FlagList({ flags }) {
  return (
    <section>
      <ul>
        {flags.map((flag) => (
          <FlagItem 
          key={flag.name} 
          image={flag.image}
          name={flag.name}
          population={flag.population}
          region={flag.region}
          capital={flag.capital}
          />
        ))}
        {/* <li>
        <FlagItem />
        </li> */}
      </ul>
    </section>
  );
}

export default FlagList;
