import { lazy, Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage"));
const FormPage = lazy(() => import("../../pages/FormPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/form">Form </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
