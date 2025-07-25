import { Box, Typography } from "@mui/material";
import { getCarInfo } from "../../../utils/getCarInfo";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import styles from "./CarInfo.styles.js";

const CarInfo = ({ car }) => {
  const carInfo = getCarInfo(car);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.carInfoHeaderWrapper}>
        <Box>
          <Typography variant="h2" sx={styles.carInfoHeaderTitle}>
            {car.brand} {car.model}, {car.year}
            <span>Id: {car.id.slice(0, 4)}</span>
          </Typography>

          <Box sx={styles.carInfoHeaderLocationWrapper}>
            <LocationOnOutlinedIcon
              fontSize="12px"
              sx={{ marginRight: "-14px" }}
            />
            <Typography>
              {carInfo.city}, {carInfo.country}
            </Typography>
            <Typography>Mileage: {carInfo.mileage} km</Typography>
          </Box>

          <Typography sx={styles.carInfoHeaderPrice}>
            ${car.rentalPrice}
          </Typography>
        </Box>

        <Typography variant="body1">{car.description}</Typography>
      </Box>

      <Box>
        <Typography variant="h3" sx={styles.titleBlock}>
          Rental Conditions
        </Typography>
        <ul style={styles.detailsList}>
          {car.rentalConditions.map((condition) => (
            <li key={condition} style={styles.detailsItem}>
              <CheckCircleOutlinedIcon fontSize="small" />
              <Typography variant="body1">{condition}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        <Typography variant="h3" sx={styles.titleBlock}>
          Car Specifications
        </Typography>
        <ul style={styles.detailsList}>
          <li style={styles.detailsItem}>
            <CalendarMonthOutlinedIcon fontSize="small" />
            <Typography>Year: {car.year}</Typography>
          </li>
          <li style={styles.detailsItem}>
            <DirectionsCarFilledOutlinedIcon fontSize="small" />
            <Typography>Type: {car.type}</Typography>
          </li>
          <li style={styles.detailsItem}>
            <LocalGasStationOutlinedIcon fontSize="small" />
            <Typography>Fuel Consumption: {car.fuelConsumption}</Typography>
          </li>
          <li style={styles.detailsItem}>
            <SettingsOutlinedIcon fontSize="small" />
            <Typography>Engine Size: {car.engineSize}</Typography>
          </li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h3" sx={styles.titleBlock}>
          Accessories and functionalities:
        </Typography>
        <ul style={styles.detailsList}>
          {car.functionalities.map((functionality) => (
            <li key={functionality} style={styles.detailsItem}>
              <CheckCircleOutlinedIcon fontSize="small" />
              <Typography variant="body1">{functionality}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default CarInfo;
