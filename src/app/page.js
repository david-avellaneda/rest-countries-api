import InteractiveCountries from "@/components/InteractiveCountries";
import styles from "./page.module.css";

async function getData() {
  // ISR
  try {
    const res = await fetch("https://restcountries.com/v3.1/all", {
      next: {
        // Cada 2 días se haga una nueva petición, es decir cada 172.800 segundos
        revalidate: 172800,
      },
    });

    if (!res.ok)
      throw {
        status: res.status || 500,
        msg: res.statusText || "Internal several error",
      };

    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}

const PostsPage = async () => {
  const countries = await getData();

  return (
    <main className={styles.main}>
      <InteractiveCountries countries={countries} />
    </main>
  );
};

export default PostsPage;
