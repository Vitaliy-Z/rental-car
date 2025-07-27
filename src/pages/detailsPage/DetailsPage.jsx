import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Container from "../../components/container/Container.jsx";
import styles from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarDetails } from "../../redux/carDetails/operations.js";
import {
  selectCarDetails,
  selectIsLoading,
  selectError
} from "../../redux/carDetails/selectors.js";
import BookingForm from "../../components/bookingForm/BookingForm.jsx";

// accessories: (3)[
//   ("Leather seats", "Panoramic sunroof", "Premium audio system")
// ];
// address: "123 Example Street, Kiev, Ukraine";
// brand: "Buick";
// description: "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.";
// engineSize: "3.6L V6";
// fuelConsumption: "10.5";
// functionalities: (3)[
//   ("Power liftgate", "Remote start", "Blind-spot monitoring")
// ];
// id: "11a3ab35-07b8-4336-b06b-602cdc309f2c";
// img: "https://ac.goit.global/car-rental-task/9582-ai.jpg";
// mileage: 5858;
// model: "Enclave";
// rentalCompany: "Luxury Car Rentals";
// rentalConditions: (3)[
//   ("Minimum age: 25", "Valid driver's license", "Security deposit required")
// ];
// rentalPrice: "40";
// type: "SUV";
// year: 2008;

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { carId } = useParams();

  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = (values) => {
    console.log(values); // Send request to backend
  };

  useEffect(() => {
    dispatch(fetchCarDetails(carId));
  }, [dispatch, carId]);

  if (isLoading || !car.id) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!car.id) {
    return <Navigate to="/catalog" />;
  }

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.imageAndFormWrapper}>
          <img
            src={car.img}
            alt={`Photo of ${car.brand} ${car.model}`}
            className={styles.image}
          />
          <BookingForm onSubmit={handleSubmit} />
        </div>
        <h1 className={styles.title}>
          {car.brand} {car.model}
        </h1>
      </div>
    </Container>
  );
};
export default DetailsPage;
