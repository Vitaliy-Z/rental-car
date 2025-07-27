import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchMoreCars } from "../../redux/cars/operations.js";
import { fetchBrands } from "../../redux/brands/operations.js";
import {
  selectCars,
  selectIsLoading,
  selectError
} from "../../redux/cars/selectors.js";
import { selectFilters } from "../../redux/filters/selectors.js";
import { selectBrands } from "../../redux/brands/selectors.js";
import { addQueryParams } from "../../utils/addQueryParams.js";
import Container from "../../components/container/Container.jsx";
import Filters from "../../components/filters/Filters.jsx";
import CarsList from "../../components/carsList/CarsList.jsx";
import Loader from "../../components/loader/Loader.jsx";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const items = useSelector(selectCars);
  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchBrands());
  }, [dispatch]);
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    dispatch(fetchMoreCars({ page: page + 1 }));
  };

  const handleSearch = () => {
    const queryParams = addQueryParams(filters);
    console.log("🚀 ~ queryParams:", queryParams);
    dispatch(fetchCars(queryParams));
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}

      {!isLoading && !error && (
        <>
          <Filters brands={brands} onSearch={handleSearch} />
          <CarsList
            cars={items.cars}
            totalCars={items.totalCars}
            onLoadMore={handleLoadMore}
          />
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
