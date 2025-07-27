import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../header/Header";

const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage"));
const HomePage = lazy(() => import("../../pages/homePage/HomePage"));

const App = () => {
  return (
    <>
      <Header />
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
