import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { getCarInfo } from "../../utils/getCarInfo";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loader from "../loader/Loader.jsx";

import styles from "./CarList.styles.js";

const CarList = () => {
  const { cars = [] } = useSelector(selectCars);

  if (!cars) return <Loader size={60} />;

  const carsWithInfo = cars.map((car) => ({
    ...car,
    carInfo: getCarInfo(car)
  }));

  const onFavoriteToggle = (id) => {
    console.log("onFavoriteToggle", id);
  };

  const onReadMore = (id) => {
    console.log("onReadMore", id);
  };

  return (
    <Grid container rowSpacing={6} columnSpacing={4}>
      {carsWithInfo.map((car) => (
        <Card key={car.id} sx={styles.card}>
          <Box sx={styles.imgWrapper}>
            <CardMedia
              component="img"
              height="180"
              image={car.img}
              alt={`Foto of ${car.brand}`}
              sx={styles.img}
            />

            <IconButton
              onClick={() => onFavoriteToggle(car.id)}
              sx={styles.favoriteButton}
            >
              {/* <FavoriteIcon sx={styles.favoriteFillIcon} /> */}
              <FavoriteBorderIcon sx={styles.favoriteBorderIcon} />
            </IconButton>
          </Box>

          <CardContent sx={styles.cardContent}>
            <Box sx={styles.carInfoTitle}>
              <Typography variant="subtitle1">
                {car.brand} <span>{car.model}</span>, {car.year}
              </Typography>
              <Typography variant="subtitle1">${car.rentalPrice}</Typography>
            </Box>

            <Typography sx={styles.carInfoText}>
              {car.carInfo.city} | {car.carInfo.country} | {car.carInfo.company}
              |
              <br />
              {car.carInfo.type} | {car.carInfo.mileage} km
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={styles.readMoreButton}
              onClick={() => onReadMore(car.id)}
            >
              Read more
            </Button>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default CarList;
