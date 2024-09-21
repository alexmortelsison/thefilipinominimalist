import React from "react";
import { useParams } from "react-router-dom";
import foodList from "./foodList";

const Detail = () => {
  const { id } = useParams();
  const foodItem = foodList.find((food) => food.id === Number(id));

  if (!foodItem) return <div>Recipe not found.</div>;

  return (
    <div className="flex flex-col items-start pl-12 mt-10">
      <h1 className="text-7xl font-martires mb-12">{foodItem.title}</h1>

      <div className="flex">
        <img
          src={foodItem.imageUrl}
          alt={foodItem.title}
          className="rounded-2xl h-72"
        />
        <div className="items-center justify-center ml-12">
          <h2 className="items-center font-bold">Ingredients:</h2>
          <ul className="ml-6">
            {foodItem.ingredients.map((ingredient, index) => (
              <li key={index}>
                <input type="checkbox"></input>
                <span className="ml-2">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Instructions</h2>
      <ol>
        {foodItem.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Detail;
