export const addQueryParams = (
  carBrand = "",
  carPrice = "",
  carMileage = { from: "", to: "" }
) => {
  const queryParams = {};
  if (carBrand !== "") {
    queryParams.brand = carBrand;
  }
  if (carPrice !== "") {
    queryParams.rentalPrice = carPrice;
  }
  if (carMileage.from !== "") {
    queryParams.minMileage = carMileage.from;
  }
  if (carMileage.to !== "") {
    queryParams.maxMileage = carMileage.to;
  }

  return queryParams;
};
