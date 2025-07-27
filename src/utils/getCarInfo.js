export const formatMileage = (mileage) => {
  return mileage.toLocaleString("en-US").replace(/,/g, " ");
};

export const getCarInfo = (car) => {
  const addressArr = car?.address?.split(", ");
  const mileage = formatMileage(car?.mileage);
  return {
    city: addressArr[1],
    country: addressArr[2],
    company: car.rentalCompany,
    type: car.type,
    mileage
  };
};
