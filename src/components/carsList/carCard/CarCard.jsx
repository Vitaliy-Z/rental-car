import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getCarInfo } from "../../../utils/getCarInfo.js";
import Button from "../../button/Button.jsx";
import styles from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };
  const carInfo = getCarInfo(car);
  return (
    <div className={styles.card}>
      <div className={styles.infoWrapper}>
        <img
          loading="lazy"
          src={car.img}
          alt={`Photo of ${car.brand} ${car.model}`}
          className={styles.image}
        />

        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h4 className={styles.title}>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h4>
            <p className={styles.price}>${car.rentalPrice}</p>
          </div>
          <div className={styles.description}>
            <p className={styles.descriptionItem}>
              {[carInfo.city, carInfo.country, car.rentalCompany].map(
                (el, i) => (
                  <span key={i}>{el}</span>
                )
              )}
            </p>
            <p className={styles.descriptionItem}>
              {[car.type, carInfo.mileage].map((el, i) => (
                <span key={i}>{el}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <Button className={styles.button} onClick={handleClick}>
        Read more
      </Button>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarCard;
