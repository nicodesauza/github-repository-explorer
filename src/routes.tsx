import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Search } from "./pages/search/search";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
