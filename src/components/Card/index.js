import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import helpThousandsSeparator from "@/helpers/helpThousandsSeparator";
import helpNameUrl from "@/helpers/helpNameUrl";

const Card = ({ i, name, flags, population, region, capital }) => {
  return (
    <article className={styles.card}>
      <Link href={helpNameUrl(`/${name.common}`)}>
        <Image
          src={flags.svg || flags.png}
          alt={flags.alt || name.common}
          priority={i < 10}
          width={300}
          height={150}
        />
        <div className={styles.cardContent}>
          <h2>{name.common}</h2>
          <div className={styles.cardContentText}>
            <p>
              Population:{" "}
              <span>
                {population
                  ? helpThousandsSeparator(population)
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
