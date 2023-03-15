import Card from "../Card";
import Err from "../Err";

const Countries = ({ countries }) => {
  return (
    <>
      {countries.length &&
        countries.map((country, index) => (
          <Card key={index} {...country} i={index} />
        ))}

      {countries.err == "region" && (
        <>
          <Err
            msg={
              "An error has ocurred, the countries could not be filtered by region"
            }
            err={countries.err}
          />
        </>
      )}

      {!countries.length && (
        <>
          <Err
            msg={"An error has ocurred, the countries could not be obtained"}
            err={countries}
          />
        </>
      )}
    </>
  );
};

export default Countries;
