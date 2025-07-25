import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarDetails } from "../redux/carDetails/operations";
import {
  selectCarDetails,
  selectIsLoading,
  selectError
} from "../redux/carDetails/selectors";
import { Alert } from "@mui/material";
import Loader from "../components/loader/Loader.jsx";
import Container from "../components/container/Container.jsx";
import CarDetails from "../components/carDetails/CarDetails.jsx";

const CarDetailsPage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carDetails = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarDetails(carId));
  }, [carId, dispatch]);

  if (isLoading) return <Loader size={60} />;

  if (error || !Object.keys(carDetails).length)
    return (
      <Alert
        severity="error"
        sx={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
        onClose={() => navigate("/")}
      >
        {error?.message || "Something went wrong"}
      </Alert>
    );

  return (
    <Container>
      <CarDetails car={carDetails} />
    </Container>
  );
};
export default CarDetailsPage;
