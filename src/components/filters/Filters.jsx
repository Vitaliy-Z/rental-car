import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Button from "../button/Button.jsx";
import { fetchCars } from "../../redux/cars/operations.js";
import {
  selectCarBrandFilter,
  selectCarPriceFilter,
  selectCarMileageFilter
} from "../../redux/filters/selectors.js";
import { clearFilters } from "../../redux/filters/slice.js";
import { addQueryParams } from "../../utils/addQueryParams.js";
import FilterByBrand from "./filterByBrand/FilterByBrand.jsx";
import FilterByPrice from "./filterByPrice/FilterByPrice.jsx";
import FilterByMileage from "./filterByMileage/FilterByMileage.jsx";
import styles from "./Filters.styles.js";

const Filters = () => {
  const dispatch = useDispatch();

  const carBrand = useSelector(selectCarBrandFilter);
  const carPrice = useSelector(selectCarPriceFilter);
  const carMileage = useSelector(selectCarMileageFilter);

  const handleSearch = () => {
    dispatch(fetchCars(addQueryParams(carBrand, carPrice, carMileage)));
    dispatch(clearFilters());
  };
  return (
    <Box sx={styles.container}>
      <FilterByBrand />
      <FilterByPrice />
      <FilterByMileage />
      <Button style={styles.button} onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Filters;
