"use client";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ searchCountry, country }) => {
  return (
    <div className={styles.search}>
      <form>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          name="country"
          type="text"
          placeholder="Search for a country..."
          autoComplete="off"
          value={country}
          onChange={searchCountry}
          onBlur={searchCountry}
        />
      </form>
    </div>
  );
};

export default Search;
