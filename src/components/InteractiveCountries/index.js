"use client";

import styles from "./index.module.css";
import { useState } from "react";
import Countries from "../Countries";
import Filter from "../Filter";
import Search from "../Search";
import helpApi from "@/helpers/helpApi";

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

  const filterByRegion = async (region) => {
    const url = `region/${region}?fields=capital,flags,name,population,region`;
    try {
      const data = await helpApi(url);
      setCountriesData(data);
    } catch (err) {
      return;
    }
  };

  const handleFilterByRegion = (e) => {
    e.target.value === "all"
      ? setCountriesData(countries)
      : filterByRegion(e.target.value);
  };

  return (
    <>
      <section className={styles.search}>
        <Search searchCountry={searchCountry} country={country} />
        <Filter handleFilterByRegion={handleFilterByRegion} />
      </section>
      <section className={styles.countries}>
        <Countries countries={countriesData} />
      </section>
    </>
  );
};

export default InteractiveCountries;
