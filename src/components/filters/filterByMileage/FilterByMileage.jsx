import { Box, InputAdornment, Input, Typography } from "@mui/material";
import styles from "./FilterByMileage.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { setCarMileageFilter } from "../../../redux/filters/slice";
import { selectCarMileageFilter } from "../../../redux/filters/selectors";

const FilterByMileage = () => {
  const dispatch = useDispatch();

  const { from, to } = useSelector(selectCarMileageFilter);

  const formatValue = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const replacedValue = value.replace(/,/g, "");
    dispatch(setCarMileageFilter({ name, value: replacedValue }));
  };

  return (
    <Box sx={styles.container}>
      <Typography color="primary" sx={styles.label}>
        Сar mileage / km
      </Typography>
      <Box sx={styles.formControl}>
        <Input
          sx={styles.textField}
          name="from"
          startAdornment={
            <InputAdornment position="start">From</InputAdornment>
          }
          onChange={handleChange}
          value={formatValue(from)}
          autoComplete="off"
        />
        <span style={styles.separator}></span>
        <Input
          sx={styles.textField}
          name="to"
          startAdornment={<InputAdornment position="start">To</InputAdornment>}
          onChange={handleChange}
          value={formatValue(to)}
          autoComplete="off"
        />
      </Box>
    </Box>
  );
};

export default FilterByMileage;
