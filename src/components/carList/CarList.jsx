import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoadingMore } from "../../redux/cars/selectors";
import { selectFavoritesCars } from "../../redux/favorites/selectors.js";
import { fetchMoreCars } from "../../redux/cars/operations.js";
import { getCarInfo } from "../../utils/getCarInfo";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Loader from "../loader/Loader.jsx";
import Button from "../button/Button.jsx";
import styles from "./CarList.styles.js";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";

const CarList = () => {
  const [pageLimit, setPageLimit] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carsObjectRedux = useSelector(selectCars);
  const isLoadingMore = useSelector(selectIsLoadingMore);
  const favoritesCars = useSelector(selectFavoritesCars);

  if (!carsObjectRedux) return <Loader size={60} />;

  const { cars = [], totalCars } = carsObjectRedux;

  const carsWithInfo = cars.map((car) => ({
    ...car,
    carInfo: getCarInfo(car)
  }));

  const onFavoriteToggle = (id) => {
    favoritesCars.includes(id)
      ? dispatch(removeFavorite(id))
      : dispatch(addFavorite(id));
  };

  const onReadMore = (id) => {
    navigate(`/catalog/${id}`);
  };

  const onLoadMore = () => {
    dispatch(fetchMoreCars({ page: pageLimit + 1 }));
    setPageLimit(pageLimit + 1);
  };

  return (
    <>
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
                {favoritesCars.includes(car.id) ? (
                  <FavoriteIcon sx={styles.favoriteFillIcon} />
                ) : (
                  <FavoriteBorderIcon sx={styles.favoriteBorderIcon} />
                )}
              </IconButton>
            </Box>

            <CardContent sx={styles.cardContent}>
              <div style={styles.carInfoTextWrapper}>
                <Box sx={styles.carInfoTitle}>
                  <Typography variant="subtitle1">
                    {car.brand} <span>{car.model}</span>, {car.year}
                  </Typography>
                  <Typography variant="subtitle1">
                    ${car.rentalPrice}
                  </Typography>
                </Box>

                <Typography sx={styles.carInfoText}>
                  {car.carInfo.city} | {car.carInfo.country} |{" "}
                  {car.carInfo.company} | <br />
                  {car.carInfo.type} | {car.carInfo.mileage} km
                </Typography>
              </div>

              <Button
                style={styles.readMoreButton}
                onClick={() => onReadMore(car.id)}
              >
                Read more
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
      {isLoadingMore ? (
        <div style={styles.loaderWrapper}>
          <Loader size={30} />
        </div>
      ) : (
        cars.length < totalCars && (
          <Button
            style={styles.loadMoreButton}
            variant="outlined"
            onClick={onLoadMore}
            disabled={isLoadingMore}
          >
            Load more
          </Button>
        )
      )}
    </>
  );
};

export default CarList;
