import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import "./fonts.css";
import Recipe from "./components/Recipes";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Nav and Hero only on the home route */}
      {location.pathname === "/" && <Nav />}
      {location.pathname === "/" && <Hero />}

      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
