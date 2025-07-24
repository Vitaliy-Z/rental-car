import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { setCarPriceFilter } from "../../../redux/filters/slice.js";
import { selectCarPriceFilter } from "../../../redux/filters/selectors.js";
import { getPricesFromCarsArr } from "../../../utils/getPricesFromCarsArr.js";
import styles from "./FilterByPrice.styles.js";

const FilterByPrice = () => {
  const dispatch = useDispatch();

  const carPriceFilter = useSelector(selectCarPriceFilter);

  const prices = getPricesFromCarsArr();

  const handleChange = (event) => {
    dispatch(setCarPriceFilter(event.target.value));
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id="car-price-select-label">Choose a price</InputLabel>
      <Select
        labelId="car-price-select-label"
        id="car-price-select"
        value={carPriceFilter}
        label="Choose a price"
        onChange={handleChange}
        style={styles.select}
      >
        {prices.map((price, idx) => (
          <MenuItem key={price + idx} value={price}>
            {price}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterByPrice;
