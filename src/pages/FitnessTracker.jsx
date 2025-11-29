import { useState } from "react";
import "../styles/FitnessTracker.css";

export default function FitnessTracker() {
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [workout, setWorkout] = useState("");
  const [calories, setCalories] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const stepPercent = Math.min((steps / 10000) * 100, 100);
  const waterPercent = Math.min((water / 3) * 100, 100);
  const workoutPercent = Math.min((workout / 60) * 100, 100);

  return (
    <div>
      <h1 className="title">My Fitness Tracker</h1>
      <p className="subtitle">Track your daily activity and stay motivated</p>

      {/* INPUT CARD */}
      <div className="card">
        <label>Steps Walked (Goal: 10,000)</label>
        <input
          type="number"
          placeholder="Enter steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <label>Water Intake (Litres) (Goal: 3L)</label>
        <input
          type="number"
          placeholder="Enter litres"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />

        <label>Workout Duration (minutes) (Goal: 60 mins)</label>
        <input
          type="number"
          placeholder="Enter workout minutes"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        />

        <label>Calories Burned</label>
        <input
          type="number"
          placeholder="Enter calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <button onClick={handleSubmit}>Update Fitness Status</button>
      </div>

      {/* SUMMARY CARD */}
      {submitted && (
        <div className="summary-card">
          <h2 className="summary-title">Today's Fitness Summary</h2>

          <div className="progress-container">
            <p className="progress-title">Steps: {steps} / 10,000</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${stepPercent}%` }} />
            </div>
          </div>

          <div className="progress-container">
            <p className="progress-title">Water: {water}L / 3L</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${waterPercent}%` }} />
            </div>
          </div>

          <div className="progress-container">
            <p className="progress-title">Workout: {workout} mins / 60 mins</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${workoutPercent}%` }} />
            </div>
          </div>

          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            <strong>Calories Burned:</strong> {calories}
          </p>
        </div>
      )}
    </div>
  );
}
