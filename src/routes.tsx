import { Route, Routes } from "react-router-dom";
import { Home } from "./features/home/home";
import { Search } from "./features/search/search";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
