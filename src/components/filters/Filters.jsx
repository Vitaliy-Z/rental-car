import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import styles from "./Filters.module.css";
import { setFilter, clearFilters } from "../../redux/filters/slice.js";

const Filters = ({ brands = [], onSearch }) => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);

  const prices = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "minMileage" || name === "maxMileage") {
      value = value.replace(/[^0-9]/g, "");
    }
    dispatch(setFilter({ name, value }));
  };

  const handleSearch = () => {
    onSearch();
    dispatch(clearFilters());
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Car brand
        <select
          name="brand"
          className={styles.input}
          value={filters.brand}
          onChange={handleChange}
        >
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.label}>
        Price/ 1 hour
        <select
          name="rentalPrice"
          className={styles.input}
          value={filters.rentalPrice}
          onChange={handleChange}
        >
          <option value="">Choose a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.label}>
        Сar mileage / km
        <div className={styles.mileage}>
          <input
            id="minMileage"
            name="minMileage"
            type="text"
            inputMode="numeric"
            className={styles.input}
            value={`From  ${filters.minMileage}`}
            onChange={handleChange}
          />

          <input
            id="maxMileage"
            name="maxMileage"
            type="text"
            inputMode="numeric"
            className={styles.input}
            value={`To  ${filters.maxMileage}`}
            onChange={handleChange}
          />
        </div>
      </label>
      <Button className={styles.button} onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

Filters.propTypes = {
  brands: PropTypes.array
};

export default Filters;
