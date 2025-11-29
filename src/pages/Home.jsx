import "../styles/Home.css";
import "../styles/Cards.css";
import FeatureCard from "../components/FeatureCard";

import mentalShot from "../assets/mental.png";
import fitnessShot from "../assets/fitness.png";
import nutritionShot from "../assets/nutrition.png";

export default function Home() {
  return (
    <div className="home-container">

      <h1 className="home-title">Your Health Matters</h1>

      <button 
        className="home-btn"
        onClick={() => window.open("https://www.ox.ac.uk/wellbeingatoxford", "_blank")}
      >
         Explore Resources
      </button>


      <div className="cards-wrapper" style={{ marginTop: 40 }}>
        
        <FeatureCard
          title="Mental Health Support"
          to="/mental-health"
          icon={mentalShot}
        />

        <FeatureCard
          title="Fitness Programs"
          to="/fitness"
          icon={fitnessShot}
        />

        <FeatureCard
          title="Nutrition Advice"
          to="/nutrition"
          icon={nutritionShot}
        />

      </div>

    </div>
  );
}
