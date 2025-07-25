export const getCarInfo = (car) => {
  const addressArr = car?.address?.split(",");
  const mileage = car?.mileage?.toLocaleString("en-US").replace(/,/g, " ");
  return {
    city: addressArr[1],
    country: addressArr[2],
    company: car.rentalCompany,
    type: car.type,
    mileage
  };
};
