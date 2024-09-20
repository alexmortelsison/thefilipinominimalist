import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import foodList from "./components/foodList";
import "./fonts.css";
import Recipe from "./components/Recipes";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Nav and Hero only on the home route */}
      {location.pathname === "/" && <Nav />}
      {location.pathname === "/" && <Hero />}
      {location.pathname === "/" && <Recipe />}

      <Routes>
        <Route
          path="/"
          element={
            <div className="recipe-list flex flex-wrap mb-24">
              {foodList.map((food) => (
                <RecipeCard key={food.id} {...food} />
              ))}
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

// Wrap the App component with Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
