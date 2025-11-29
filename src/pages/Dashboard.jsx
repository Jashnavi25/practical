import "../styles/Dashboard.css";
import dashImg from "../assets/dashboard.png";

export default function Dashboard() {
  return (
    <div className="dash-container">
      
      {/* HEADER */}
      <div className="dash-header-flex">
        <img src={dashImg} alt="Dashboard" className="dash-icon" />
        <div>
          <h1>Well-being Dashboard</h1>
          <p className="dash-tagline">
            Track your progress, view insights, and stay consistent with your wellness goals.
          </p>
        </div>
      </div>

      {/* GRID CARDS */}
      <div className="dash-grid">

        <div className="dash-card">
          <h2>Mental Health 🌿</h2>
          <p>Daily mindfulness score, stress indicators, and emotional balance.</p>
          <button>View Details</button>
        </div>

        <div className="dash-card">
          <h2>Fitness 💪</h2>
          <p>Workout completion rate, weekly exercise minutes, and achievements.</p>
          <button>Open Fitness</button>
        </div>

        <div className="dash-card">
          <h2>Nutrition 🥗</h2>
          <p>Daily calories, hydration level, and balanced meal recommendations.</p>
          <button>Check Meals</button>
        </div>

        <div className="dash-card">
          <h2>Weekly Progress 📅</h2>
          <p>Track habits, performance streaks, and weekly improvements.</p>
          <button>Track Progress</button>
        </div>

      </div>

    </div>
  );
}
