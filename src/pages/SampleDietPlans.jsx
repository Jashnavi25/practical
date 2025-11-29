import "../styles/SampleDietPlans.css";

export default function SampleDietPlans() {
  const samplePlans = [
    {
      title: "Weight Loss Plan",
      emoji: "🔥",
      meals: [
        "Breakfast: Oats + Nuts + Green Tea",
        "Lunch: Brown Rice + Veg Curry + Salad",
        "Snack: Fruits / Sprouts",
        "Dinner: 2 Rotis + Dal + Veg Subji"
      ]
    },
    {
      title: "Muscle Gain Plan",
      emoji: "💪",
      meals: [
        "Breakfast: 3 Eggs + Milk + Banana",
        "Lunch: Chicken / Paneer + Rice + Veggies",
        "Snack: Peanut Butter Sandwich",
        "Dinner: Roti + Paneer + Curd"
      ]
    },
    {
      title: "Energy Boost Plan",
      emoji: "⚡",
      meals: [
        "Breakfast: Smoothie + Dry Fruits",
        "Lunch: Rice + Sambar + Sabji",
        "Snack: Coconut Water + Fruits",
        "Dinner: Roti + Dal + Veg"
      ]
    },
    {
      title: "Vegetarian Healthy Plan",
      emoji: "🥗",
      meals: [
        "Breakfast: Poha / Upma + Tea",
        "Lunch: Roti + Dal + Sabji",
        "Snack: Fruit Bowl",
        "Dinner: Khichdi + Curd"
      ]
    }
  ];

  return (
    <div className="sample-container">
      <h1>Sample Diet Plans</h1>
      <p className="sample-sub">
        Explore example diet plans designed for common goals.
      </p>

      <div className="sample-grid">
        {samplePlans.map((plan, index) => (
          <div className="sample-card" key={index}>
            <h2>
              {plan.title} {plan.emoji}
            </h2>
            <ul>
              {plan.meals.map((meal, i) => (
                <li key={i}>{meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
