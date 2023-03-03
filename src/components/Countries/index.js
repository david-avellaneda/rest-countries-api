import Card from "../Card";

const Countries = ({ countries }) => {
  return (
    <>
      {countries.map((country, index) => (
        <Card key={index} {...country} i={index} />
      ))}
    </>
  );
};

export default Countries;
