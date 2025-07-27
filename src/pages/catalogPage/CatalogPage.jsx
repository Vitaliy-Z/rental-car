import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectCars } from "../../redux/cars/selectors.js";
import Container from "../../components/container/Container.jsx";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, isLoading, error } = useSelector(selectCars);
  console.log(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
      <h1 className={styles.title}>CatalogPage</h1>
    </Container>
  );
};

export default CatalogPage;
