import { Link } from "react-router-dom";
import "../styles/Fitness.css";
import fitnessImg from "../assets/fitness.png";

export default function Fitness() {
  return (
    <div className="fitness-container">

      {/* HEADER FLEX */}
      <div className="fitness-header-flex">
        <img src={fitnessImg} alt="Fitness" className="fitness-icon" />

        <div className="fitness-text">
          <h1>Fitness Programs</h1>
          <p className="fitness-tagline">
            Structured workout plans, progress tracking, and guided sessions 
            tailored for students — build strength, mobility, and stamina with safe, 
            evidence-based routines.
          </p>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="fitness-grid">

        {/* BEGINNER PLAN */}
        <a
          href="https://www.shape.com/thmb/WYsfXcl_TK-4WkKLVYiXXhDc7Bg=/1500x0/filters:no_upscale():max_bytes(200000):strip_icc()/SHAPE-X-SWEAT_Resized-1-ba1728b37f744342aa1b64c92c761b1f.png"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="fitness-card">
            <h2>Beginner Plan 🏋️‍♂️</h2>
            <p>Full-body workouts 3×/week — mobility, strength basics, and habit building (30–40 min).</p>
            <ul>
              <li>Warmup & mobility</li>
              <li>Compound movement progressions</li>
              <li>Weekly progression tracker</li>
            </ul>
          </div>
        </a>

        {/* STRENGTH & HYPERTROPHY */}
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7582410/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="fitness-card">
            <h2>Strength & Hypertrophy 💪</h2>
            <p>4-day split focused on progressive overload, safe technique cues, and recovery.</p>
            <ul>
              <li>Periodized strength training</li>
              <li>Rep/weight targets</li>
              <li>Optional accessory work</li>
            </ul>
          </div>
        </a>

        {/* CARDIO & CONDITIONING */}
        <a
          href="https://www.health.harvard.edu/exercise-and-fitness/cardio-exercise"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="fitness-card">
            <h2>Cardio & Conditioning 🏃‍♀️</h2>
            <p>Interval plans & low-impact options for endurance and heart health.</p>
            <ul>
              <li>HIIT & LISS routines</li>
              <li>Time-efficient sessions</li>
              <li>Weekly performance tracking</li>
            </ul>
          </div>
        </a>

        {/* TOOLS & TRACKING */}
        <a
          href="https://www.google.com/fit/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="fitness-card">
            <h2>Tools & Tracking 📊</h2>
            <p>Monitor your habits and progress with simple, effective tools.</p>
            <ul>
              <li>Workout log</li>
              <li>Weekly progress charts</li>
              <li>Habit streaks</li>
            </ul>
          </div>
        </a>

      </div>

      <div className="fitness-center-btn">
  <Link to="/fitness-tracker" className="fitness-btn">
    Fitness Tracker
  </Link>
</div>


    </div>
  );
}
