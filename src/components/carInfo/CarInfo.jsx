import PropTypes from "prop-types";
import { Icon } from "../icon/Icon.jsx";
import styles from "./CarInfo.module.css";
import { getCarInfo } from "../../utils/getCarInfo.js";

// accessories: (3)[
//   ("Leather seats", "Panoramic sunroof", "Premium audio system")
// ];
// address: "123 Example Street, Kiev, Ukraine";
// brand: "Buick";
// description: "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.";
// engineSize: "3.6L V6";
// fuelConsumption: "10.5";
// functionalities: (3)[
//   ("Power liftgate", "Remote start", "Blind-spot monitoring")
// ];
// id: "11a3ab35-07b8-4336-b06b-602cdc309f2c";
// img: "https://ac.goit.global/car-rental-task/9582-ai.jpg";
// mileage: 5858;
// model: "Enclave";
// rentalCompany: "Luxury Car Rentals";
// rentalConditions: (3)[
//   ("Minimum age: 25", "Valid driver's license", "Security deposit required")
// ];
// rentalPrice: "40";
// type: "SUV";
// year: 2008;

const CarInfo = ({ car }) => {
  const {
    id,
    brand,
    model,
    year,
    rentalPrice,
    description,
    rentalConditions,
    type,
    engineSize,
    fuelConsumption,
    functionalities
  } = car;
  const { city, country, mileage } = getCarInfo(car);
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          {brand} {model}, {year}
          <span>Id: {id.slice(0, 4)}</span>
        </h2>
        <p className={styles.location}>
          <Icon name="location" /> {city}, {country}
          <span>Mileage: {mileage} km</span>
        </p>
        <p className={styles.price}>${rentalPrice}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.listWrapper}>
        <h3 className={styles.listTitle}>Rental Conditions:</h3>

        <ul className={styles.list}>
          {rentalConditions.map((condition) => (
            <li className={styles.listItem} key={condition}>
              <Icon name="check" />
              <p>{condition}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.listWrapper}>
        <h3 className={styles.listTitle}>Car Specifications:</h3>
        <ul className={styles.list}>
          {[{ year }, { type }, { engineSize }, { fuelConsumption }].map(
            (el) => {
              const key = Object.keys(el)[0];
              const value = Object.values(el)[0];
              return (
                <li className={styles.listItem} key={key}>
                  <Icon name={key} />
                  <p>{value}</p>
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div className={styles.listWrapper}>
        <h3 className={styles.listTitle}>Accessories and functionalities:</h3>
        <ul className={styles.list}>
          {functionalities.map((functionality) => (
            <li className={styles.listItem} key={functionality}>
              <Icon name="check" />
              <p>{functionality}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CarInfo.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarInfo;
