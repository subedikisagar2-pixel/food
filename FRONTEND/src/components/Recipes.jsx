import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        const data = await response.json();

        if (data.meals) {
          setFood(data.meals);
        } else {
          setFood([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Chicken Recipes</h1>

      {food.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <div>
          {food.map((item) => (
            <div key={item.idMeal}>
              <h3>{item.strMeal}</h3>
              <img src={item.strMealThumb} alt={item.strMeal} width="200" />
              <p>{item.strArea} Cuisine</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
