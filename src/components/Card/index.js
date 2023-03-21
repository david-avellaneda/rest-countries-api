import styles from "./index.module.css";
import Link from "next/link";
import helpThousandsSeparator from "@/helpers/helpThousandsSeparator";
import helpNameUrl from "@/helpers/helpNameUrl";
import ImageUploader from "../ImageUploader";

const Card = ({ index, name, flags, population, region, capital }) => {
  return (
    <article className={styles.card}>
      <Link href={helpNameUrl(`/${name.official}`)}>
        <ImageUploader
          width={300}
          height={150}
          flags={flags}
          name={name}
          index={index}
          styleLoader="card"
        />
        <div className={styles.cardContent}>
          <h2>{name.common}</h2>
          <div className={styles.cardContentText}>
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
              Capital: <span>{capital[0] || "Not established"}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
