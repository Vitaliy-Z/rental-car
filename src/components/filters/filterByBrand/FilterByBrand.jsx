import { useDispatch, useSelector } from "react-redux";
import { selectBrands } from "../../../redux/brands/selectors.js";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./FilterByBrand.styles.js";
import { setCarBrandFilter } from "../../../redux/filters/slice.js";
import { selectCarBrandFilter } from "../../../redux/filters/selectors.js";

const FilterByBrand = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const carBrandFilter = useSelector(selectCarBrandFilter);

  const handleChange = (event) => {
    dispatch(setCarBrandFilter(event.target.value));
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id="car-brand-select-label">Choose a brand</InputLabel>
      <Select
        labelId="car-brand-select-label"
        id="car-brand-select"
        value={carBrandFilter}
        label="Choose a brand"
        onChange={handleChange}
        style={styles.select}
      >
        {brands.map((brand, idx) => (
          <MenuItem key={brand + idx} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterByBrand;
