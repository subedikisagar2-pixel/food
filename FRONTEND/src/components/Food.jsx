import React, { useEffect, useState } from "react";

const Food = () => {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => response.json())
      .then((data) => setFoodItem(data.meals || []))
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);

  // Function to extract ingredients from API
  const getIngredients = (item) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (item[`strIngredient${i}`]) {
        ingredients.push(
          `${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍗 Chicken Recipes
      </h1>

      {foodItem.length === 0 ? (
        <p className="text-center text-red-500 text-lg">Food item not found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItem.map((item) => (
            <div
              key={item.idMeal}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h2 className="text-xl font-semibold mt-4 text-gray-800">
                {item.strMeal}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Category:</span>{" "}
                {item.strCategory}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Area:</span> {item.strArea}
              </p>

              <h3 className="mt-3 font-semibold text-gray-700">Ingredients:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {getIngredients(item)
                  .slice(0, 5)
                  .map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
              </ul>

              <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                <span className="font-semibold">Instructions:</span>{" "}
                {item.strInstructions}
              </p>

              {item.strYoutube && (
                <a
                  href={item.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-red-600 font-medium hover:underline"
                >
                  ▶ Watch on YouTube
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Food;
