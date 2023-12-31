import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import HomePage from "./pages/HomePage";
import CocktailRandomPage from "./pages/CocktailRandomPage";
import CategoriesPage from "./pages/CategoriesPage";
import IngredientPage from "./pages/IngredientPages";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";

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
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;