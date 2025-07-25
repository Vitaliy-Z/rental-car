import { useState } from "react";
import { Alert, Box } from "@mui/material";
import BookingForm from "./bookingForm/BookingForm.jsx";
import CarInfo from "./carInfo/CarInfo.jsx";
import styles from "./CarDetails.styles.js";

const CarDetails = ({ car }) => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(true);

  const handleBookingFormOpen = () => {
    setIsBookingFormOpen(!isBookingFormOpen);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.carImageAndFormWrapper}>
        <img
          width={640}
          height={512}
          src={car.img}
          alt={`Photo of ${car.brand} ${car.model}`}
          style={styles.carImage}
        />
        {isBookingFormOpen ? (
          <BookingForm sendBookingData={handleBookingFormOpen} />
        ) : (
          <Alert
            severity="info"
            sx={styles.bookingFormAlert}
            onClose={handleBookingFormOpen}
          >
            You have successfully booked the car! <br />
            Thank you for your interest in our car!
          </Alert>
        )}
      </Box>
      <CarInfo car={car} />
    </Box>
  );
};

export default CarDetails;
