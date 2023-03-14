const helpThousandsSeparator = (number) => {
  let parter = number.toString().split(".");
  parter[0] = parter[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parter.join(".");
};

export default helpThousandsSeparator;
