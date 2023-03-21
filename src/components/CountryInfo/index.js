import styles from "./index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import helpThousandsSeparator from "@/helpers/helpThousandsSeparator";
import helpNameUrl from "@/helpers/helpNameUrl";
import ImageUploader from "../ImageUploader";

const CountryInfo = ({ country, borders }) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country[0];

  const countryLanguages = Object.values(languages).map((el) => el);

  return (
    <>
      <section className={styles.back}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>
      </section>
      <section className={styles.container} id="country">
        <ImageUploader
          width={400}
          height={300}
          flags={flags}
          name={name}
          index={1}
          styleLoader="countryInfo"
        />
        <div className={styles.contentContainer}>
          <h2>{name.common || "Not established"}</h2>
          <div className={styles.text}>
            <div className={styles.textOne}>
              <p>
                Native Name: <span>{name.official || "Not established"}</span>
              </p>
              <p>
                Population:
                <span>
                  {population
                    ? ` ${helpThousandsSeparator(population)}`
                    : "Not established"}
                </span>
              </p>
              <p>
                Region: <span>{region || "Not established"}</span>
              </p>
              <p>
                Sub Region: <span>{subregion || "Not established"}</span>
              </p>
              <p>
                Capital: <span>{capital[0] || "Not established"}</span>
              </p>
            </div>
            <div className={styles.textTwo}>
              <p>
                Top Level Domain: <span>{tld[0] || "Not established"}</span>
              </p>
              <p>
                Currencies:
                <span>
                  {Object.values(currencies)[0]
                    ? ` ${Object.values(currencies)[0].name}`
                    : " Not established"}
                </span>
              </p>
              <p>
                Languages:
                <span> {countryLanguages.join(", ") || "Not established"}</span>
              </p>
            </div>
          </div>
          <div className={styles.borders}>
            <h3>Border Countries:</h3>
            <div>
              {(borders.length === 0 || !borders) && (
                <p>There are no borders</p>
              )}
              {borders.length > 0 &&
                borders.map((el, index) => (
                  <Link key={index} href={helpNameUrl(el.name.official)}>
                    {el.name.common}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryInfo;
