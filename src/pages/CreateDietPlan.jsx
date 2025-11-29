import React, { useState } from "react";
import "../styles/CreateDietPlan.css";

function CreateDietPlan() {
  const [week, setWeek] = useState("");
  const [preference, setPreference] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = () => {
    if (!week || !preference) {
      alert("Please select both fields");
      return;
    }

    const vegPlans = {
      Monday: {
        breakfast: "Oats + almonds + banana",
        lunch: "2 chapati + dal + palak curry + curd",
        snack: "Fruit bowl",
        dinner: "Paneer tikka + quinoa",
      },
      Tuesday: {
        breakfast: "Poha + peanuts + tea",
        lunch: "Veg biryani + raita",
        snack: "Sprouts salad",
        dinner: "Paneer butter masala + roti",
      },
      Wednesday: {
        breakfast: "Upma + coconut chutney",
        lunch: "Rajma + rice + salad",
        snack: "Dry fruits",
        dinner: "Vegetable khichdi + curd",
      },
      Thursday: {
        breakfast: "Idli + sambar",
        lunch: "Veg fried rice + manchurian",
        snack: "Fruit juice",
        dinner: "Palak paneer + rice",
      },
      Friday: {
        breakfast: "Paratha + curd",
        lunch: "Chole + bhatura (1 piece) + salad",
        snack: "Corn salad",
        dinner: "Veg pasta + soup",
      },
      Saturday: {
        breakfast: "Dosa + chutney",
        lunch: "Veg thali",
        snack: "Tea + biscuits",
        dinner: "Paneer pulao + raita",
      },
      Sunday: {
        breakfast: "Aloo paratha + curd",
        lunch: "Veg biryani + paneer curry",
        snack: "Milkshake",
        dinner: "Mushroom curry + rice",
      },
    };

    const nonVegPlans = {
      Monday: {
        breakfast: "Boiled eggs + toast",
        lunch: "Chicken curry + rice",
        snack: "Nuts / yogurt",
        dinner: "Fish fry + salad",
      },
      Tuesday: {
        breakfast: "Omelette + veggies",
        lunch: "Grilled chicken + rice",
        snack: "Banana shake",
        dinner: "Egg curry + roti",
      },
      Wednesday: {
        breakfast: "Chicken sandwich",
        lunch: "Fish curry + rice",
        snack: "Dry fruits",
        dinner: "Chicken soup + veggies",
      },
      Thursday: {
        breakfast: "Scrambled eggs",
        lunch: "Chicken biryani + raita",
        snack: "Protein bar",
        dinner: "Grilled fish + salad",
      },
      Friday: {
        breakfast: "Egg dosa",
        lunch: "Prawns curry + rice",
        snack: "Fruit bowl",
        dinner: "Chicken kebab + soup",
      },
      Saturday: {
        breakfast: "Omelette + juice",
        lunch: "Chicken fried rice",
        snack: "Popcorn",
        dinner: "Fish curry + chapati",
      },
      Sunday: {
        breakfast: "Boiled eggs + apple",
        lunch: "Chicken thali",
        snack: "Dry fruits",
        dinner: "Egg noodles",
      },
    };

    const selectedPlan =
      preference === "Veg" ? vegPlans[week] : nonVegPlans[week];

    setPlan({
      title: `${preference === "Veg" ? "Vegetarian" : "Non-Vegetarian"} Diet Plan for ${week}`,
      ...selectedPlan,
    });
  };

  return (
    <div className="diet-page-container">
      <h1 className="diet-title">Create Your Diet Plan</h1>
      <p className="diet-subtitle">
        Select the week day and food preference to generate your personalised diet plan.
      </p>

      {/* Main form card */}
      <div className="diet-card">
        <label className="diet-label">Select Week Day</label>
        <select
          className="diet-input"
          value={week}
          onChange={(e) => {
            setWeek(e.target.value);
            setPreference("");
            setPlan(null);
          }}
        >
          <option value="">-- Choose a Day --</option>
          {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((d)=>(
            <option key={d}>{d}</option>
          ))}
        </select>

        {week && (
          <>
            <label className="diet-label">Select Diet Preference</label>
            <select
              className="diet-input"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
            >
              <option value="">-- Choose Diet Type --</option>
              <option value="Veg">Vegetarian</option>
              <option value="Non-Veg">Non-Vegetarian</option>
            </select>

            <button className="diet-btn" onClick={generatePlan}>
              Generate Diet Plan
            </button>
          </>
        )}
      </div>

      {/* OUTPUT CARD */}
      {plan && (
        <div className="diet-output-card">
          <h2>{plan.title}</h2>
          <p><strong>Breakfast:</strong> {plan.breakfast}</p>
          <p><strong>Lunch:</strong> {plan.lunch}</p>
          <p><strong>Snack:</strong> {plan.snack}</p>
          <p><strong>Dinner:</strong> {plan.dinner}</p>
        </div>
      )}
    </div>
  );
}

export default CreateDietPlan;
