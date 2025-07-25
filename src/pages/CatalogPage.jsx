import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCars } from "../redux/cars/operations";
import { fetchBrands } from "../redux/brands/operations.js";
import { selectIsLoading, selectError } from "../redux/cars/selectors";
import {
  selectIsBrandsLoading,
  selectBrandsError
} from "../redux/brands/selectors.js";
import { Alert } from "@mui/material";
import Loader from "../components/loader/Loader.jsx";
import Container from "../components/container/Container.jsx";
import Filters from "../components/filters/Filters.jsx";
import CarList from "../components/carList/CarList.jsx";

const CatalogPage = () => {
  const [queryParamsOfFilters, setQueryParamsOfFilters] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCarsLoading = useSelector(selectIsLoading);
  const isBrandsLoading = useSelector(selectIsBrandsLoading);

  const carsError = useSelector(selectError);
  const brandsError = useSelector(selectBrandsError);

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchBrands());
  }, [dispatch]);

  if (isCarsLoading || isBrandsLoading) {
    return <Loader size={60} />;
  }

  if (carsError || brandsError) {
    return (
      <Alert
        severity="error"
        sx={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
        onClose={() => navigate("/")}
      >
        {carsError?.message || brandsError?.message}
      </Alert>
    );
  }
  return (
    <Container>
      <Filters setQueryParamsOfFilters={setQueryParamsOfFilters} />
      <CarList queryParamsOfFilters={queryParamsOfFilters} />
    </Container>
  );
};

export default CatalogPage;
