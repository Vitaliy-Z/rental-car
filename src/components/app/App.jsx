import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderMui from "../header/Header.jsx";
import Loader from "../loader/Loader.jsx";

const CatalogPage = lazy(() => import("../../pages/CatalogPage.jsx"));
const CarDetailsPage = lazy(() => import("../../pages/CarDetailsPage.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage.jsx"));

const App = () => {
  return (
    <>
      <HeaderMui />
      <main>
        <Suspense fallback={<Loader size={60} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:carId" element={<CarDetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
