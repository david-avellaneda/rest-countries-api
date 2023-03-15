import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const regions = [
  { name: "All countries", value: "all" },
  { name: "Africa", value: "africa" },
  { name: "Americas", value: "americas" },
  { name: "Antarctic", value: "antarctic" },
  { name: "Asia", value: "asia" },
  { name: "Europe", value: "europe" },
  { name: "Oceania", value: "oceania" },
];

const Filter = ({ handleFilterByRegion }) => {
  return (
    <div className={styles.filter}>
      <select onChange={handleFilterByRegion}>
        {regions.map((region, index) => (
          <option key={index} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
      <div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default Filter;
