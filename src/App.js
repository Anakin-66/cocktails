import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import HomePage from "./pages/HomePage";
import CocktailRandomPage from "./pages/CocktailRandomPage";
import CategoriesPage from "./pages/CategoriesPage";
import IngredientPage from "./pages/IngredientPages";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailPage />} />
        <Route path="/random" element={<CocktailRandomPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
