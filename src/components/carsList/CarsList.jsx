import PropTypes from "prop-types";
import CarCard from "./carCard/CarCard.jsx";
import styles from "./CarsList.module.css";

const CatalogList = ({ cars }) => {
  return (
    <ul className={styles.list}>
      {cars.map((car) => (
        <li key={car.id} className={styles.item}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

CatalogList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CatalogList;
