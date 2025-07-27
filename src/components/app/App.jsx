import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../header/Header.jsx";

const CatalogPage = lazy(() =>
  import("../../pages/catalogPage/CatalogPage.jsx")
);
const DetailsPage = lazy(() =>
  import("../../pages/detailsPage/DetailsPage.jsx")
);
const HomePage = lazy(() => import("../../pages/homePage/HomePage.jsx"));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:carId" element={<DetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
