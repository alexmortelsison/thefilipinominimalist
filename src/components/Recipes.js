import React from "react";
import foodList from "./foodList";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  return (
    <div className="px-48 mt-24 mb-24">
      <div className="border-b-2 mb-10 border-gray-900"></div>
      <div className="flex items-center justify-center">
        <h1 className="text-8xl font-martires font-bold mt-5">Recipes</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4">
        {foodList.map((food) => (
          <RecipeCard
            key={food.id}
            title={food.title}
            imageUrl={food.imageUrl}
            id={food.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
