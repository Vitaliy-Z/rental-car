import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderMui from "../header/Header-mui";

const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));

const App = () => {
  return (
    <>
      <HeaderMui />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
