import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

function thousandsSeparator(n) {
  let parter = n.toString().split(".");
  parter[0] = parter[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parter.join(".");
}

const Card = ({ i, name, flags, population, region, capital }) => {
  return (
    <article className={styles.card}>
      <Link href={`/${name.common}`}>
        <Image
          src={flags.svg}
          alt={flags.alt || name.common}
          priority={i < 10}
          width={300}
          height={150}
        />
        <div className={styles.cardContent}>
          <h2>{name.common}</h2>
          <div className={styles.cardContentText}>
            <p>
              Population: <span>{thousandsSeparator(population)}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
