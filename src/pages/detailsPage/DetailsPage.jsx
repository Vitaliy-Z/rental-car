import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarDetails } from "../../redux/carDetails/operations.js";
import {
  selectCarDetails,
  selectIsLoading,
  selectError
} from "../../redux/carDetails/selectors.js";
import Container from "../../components/container/Container.jsx";
import BookingForm from "../../components/bookingForm/BookingForm.jsx";
import CarInfo from "../../components/carInfo/CarInfo.jsx";
import Loader from "../../components/loader/Loader.jsx";
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const { carId } = useParams();

  const car = useSelector(selectCarDetails);
  const error = useSelector(selectError);

  const handleSubmit = (values) => {
    console.log(values); // Send request to backend
  };

  useEffect(() => {
    dispatch(fetchCarDetails(carId));
  }, [dispatch, carId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <div className={styles.wrapper}>
          <div className={styles.imageAndFormWrapper}>
            <img
              className={styles.image}
              src={car.img}
              alt={`Photo of ${car.brand} ${car.model}`}
              loading="lazy"
            />
            <BookingForm onSubmit={handleSubmit} />
          </div>
          <CarInfo car={car} />
        </div>
      )}
    </Container>
  );
};
export default DetailsPage;
