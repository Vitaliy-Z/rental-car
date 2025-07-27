import PropTypes from "prop-types";
import CarCard from "./carCard/CarCard.jsx";
import Button from "../button/Button.jsx";
import styles from "./CarsList.module.css";

const CatalogList = ({ cars, totalCars, onLoadMore }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {cars.map((car) => (
          <li key={car.id} className={styles.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
      {cars.length < totalCars && (
        <Button className={styles.button} onClick={onLoadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};

CatalogList.propTypes = {
  cars: PropTypes.array.isRequired,
  totalCars: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired
};

export default CatalogList;
