import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import {
  selectCars,
  selectIsLoading,
  selectError
} from "../../redux/cars/selectors.js";
import Container from "../../components/container/Container.jsx";
import CarsList from "../../components/carsList/CarsList.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      {isLoading || (!items?.cars && <p>Loading...</p>)}
      {error && <p>Error: {error.message}</p>}
      {items?.cars?.length > 0 ? (
        <CarsList cars={items.cars} />
      ) : (
        <p>No cars found</p>
      )}
    </Container>
  );
};

export default CatalogPage;
