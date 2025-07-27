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

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { carId } = useParams();
  console.log("🚀 ~ carId:", carId);
  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log("🚀 ~ carDetails:", car);

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
      <h1 className={styles.title}>
        {car.brand} {car.model}
      </h1>
    </Container>
  );
};
export default DetailsPage;
