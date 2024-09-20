// App.js
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import "./fonts.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Recipes></Recipes>
    </>
  );
}

export default App;
