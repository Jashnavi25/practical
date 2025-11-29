import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nutrition.css";

import nutritionImg from "../assets/nutrition.png";

export default function Nutrition() {
  return (
    <div className="nutrition-container">

      {/* TOP HEADER FLEX - IMAGE LEFT + TEXT RIGHT */}
      <div className="nutrition-header-flex">
        <img src={nutritionImg} alt="Nutrition" className="nutrition-img" />

        <div className="nutrition-text">
          <h1>Nutrition Advice</h1>
          <p>
            Fuel your body and mind with balanced meals, smart choices, and 
            personalized recommendations to support your daily well-being.
          </p>
        </div>
      </div>

      {/* 3 CARD ROW */}
      <div className="nutrition-card-row">

        {/* BALANCED MEAL PLANS */}
        <a
          href="https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="nutrition-card">
            <h2>Balanced Meal Plans 🥗</h2>
            <p>
              Simple templates for breakfast, lunch, and dinner designed 
              to boost focus, energy, and long-term health.
            </p>
            <ul>
              <li>Easy 20-minute meals</li>
              <li>Protein, greens, whole grains balance</li>
              <li>Veg / Non-veg / Vegan options</li>
            </ul>
          </div>
        </a>

        {/* SMART SNACKS & HYDRATION */}
        <a
          href="https://www.nutritionsolutions.ca/wp-content/uploads/5-Smart-Snacks-rev.png"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="nutrition-card">
            <h2>Smart Snacks & Hydration 💧</h2>
            <p>
              Healthy snack ideas and hydration guidance to help you stay active 
              and alert throughout the day.
            </p>
            <ul>
              <li>Brain-boosting snacks</li>
              <li>Daily hydration targets</li>
              <li>Electrolyte & fruit options</li>
            </ul>
          </div>
        </a>

        {/* BUDGET-FRIENDLY RECIPES */}
        <a
          href="https://www.budgetbytes.com/category/recipes/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="nutrition-card">
            <h2>Budget-Friendly Recipes 🍽️</h2>
            <p>
              Affordable, quick recipes for students — tasty, nutritious, 
              and practical for everyday cooking.
            </p>
            <ul>
              <li>₹100–₹150 recipes</li>
              <li>5-ingredient meals</li>
              <li>Weekly grocery checklist</li>
            </ul>
          </div>
        </a>

      </div>

      {/* PERSONALIZED DIET SECTION */}
      <div className="nutrition-reco">
        <h2>Personalized Diet Recommendations</h2>
        <p>
          Create your nutrition profile to receive diet plans tailored to your 
          goals — weight balance, energy boost, muscle gain, or healthy lifestyle.
        </p>

        <div className="nutrition-buttons">
          <Link to="/create-diet-plan" className="nutrition-btn primary">
            Create My Diet Plan
          </Link>

          <Link to="/sample-plans" className="nutrition-btn outline">
            View Sample Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
