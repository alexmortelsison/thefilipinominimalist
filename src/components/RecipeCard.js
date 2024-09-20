import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ id, title, imageUrl }) => {
  const navigate = useNavigate();

  const handleSeeRecipe = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="mt-24 w-fit border-orange-700 rounded-3xl border-2 p-8 mx-24">
      <h1 className="text-3xl flex flex-col items-center justify-center uppercase font-bold font-martires">
        {title}
        <div className="border-t my-2 border-black"></div>
      </h1>
      <img
        className="rounded-3xl h-48 border border-orange-500 hover:scale-125 duration-200 cursor-pointer"
        src={imageUrl}
        alt={title}
      />
      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-orange-700 px-4 py-2 rounded-3xl flex items-center justify-center text-white hover:bg-orange-500"
          onClick={handleSeeRecipe}
        >
          See Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
