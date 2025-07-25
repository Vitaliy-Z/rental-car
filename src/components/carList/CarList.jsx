import React from "react";
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

import styles from "./CarList.styles.js";

const CarList = ({
  items = [],
  favorites = [],
  onFavoriteToggle,
  onReadMore
}) => {
  const getCarInfo = (car) => {
    const addressArr = car.address.split(",");
    const mileage = car.mileage.toLocaleString("en-US").replace(/,/g, " ");

    return (
      <>
        {`${addressArr[1]} | ${addressArr[2]} | ${car.rentalCompany} |`}
        <br />
        {`${car.type} | ${mileage} km`}
      </>
    );
  };
  return (
    <Grid container rowSpacing={6} columnSpacing={4}>
      {items.map((car) => (
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

            <Typography sx={styles.carInfoText}>{getCarInfo(car)}</Typography>

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
