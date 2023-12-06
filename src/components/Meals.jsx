import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {

  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals", {
          method: "GET",
        });

        if (!response.ok) {
          // Handle error, e.g., set an error state
          console.error("Error fetching meals");
          return;
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }

    fetchMeals();

  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
