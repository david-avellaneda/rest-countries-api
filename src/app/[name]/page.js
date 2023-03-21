import CountryInfo from "@/components/CountryInfo";
import Err from "@/components/Err";
import helpApi from "@/helpers/helpApi";

async function getCountry(url) {
  const data = await helpApi(url);
  return data;
}

const Country = async ({ params }) => {
  const countryUrl = `name/${params.name}?fullText=true&fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`;
  const country = await getCountry(countryUrl);

  let bordersData = [];

  if (country && country[0] && country[0].borders[0]) {
    const countries = country[0].borders.join(",");
    const borders = await getCountry(`alpha?codes=${countries}&fields=name`);
    bordersData = borders;
  }

  return (
    <>
      {country && country[0] && (
        <title>{country[0].name.common + " - REST countries API"}</title>
      )}
      <main className="country-info">
        {country && country[0] ? (
          <CountryInfo country={country} borders={bordersData} />
        ) : (
          <Err
            err={country}
            msg="An error occurred while obtaining the country information"
          />
        )}
      </main>
    </>
  );
};

export default Country;
