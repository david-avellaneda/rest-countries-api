"use client";

import styles from "./index.module.css";
import { useState } from "react";
import Countries from "../Countries";
import Filter from "../Filter";
import Search from "../Search";

const InteractiveCountries = ({ countries }) => {
  const [countriesData, setCountriesData] = useState(countries);
  const [country, setCountry] = useState("");

  const searchCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
    setCountriesData(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <section className={styles.search}>
        <Search searchCountry={searchCountry} country={country} />
        <Filter />
      </section>
      <section className={styles.countries}>
        <Countries countries={countriesData} />
      </section>
    </>
  );
};

export default InteractiveCountries;
