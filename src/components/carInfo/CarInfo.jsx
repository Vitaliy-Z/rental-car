import PropTypes from "prop-types";
import { Icon } from "../icon/Icon.jsx";
import styles from "./CarInfo.module.css";
import { getCarInfo } from "../../utils/getCarInfo.js";
import Loader from "../loader/Loader.jsx";

const CarInfo = ({ car }) => {
  if (!car.id) {
    return <Loader />;
  }

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

  const formattedInfoKey = (key) => {
    return (
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
    );
  };
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
                  <p className={styles.listItemText}>
                    {formattedInfoKey(key)}: {value}
                  </p>
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
