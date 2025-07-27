export const addQueryParams = ({
  brand,
  rentalPrice,
  minMileage,
  maxMileage
}) => {
  const queryParams = {};
  if (brand !== "") {
    queryParams.brand = brand;
  }
  if (rentalPrice !== "") {
    queryParams.rentalPrice = rentalPrice;
  }
  if (minMileage !== "") {
    queryParams.minMileage = minMileage;
  }
  if (maxMileage !== "") {
    queryParams.maxMileage = maxMileage;
  }

  return queryParams;
};
