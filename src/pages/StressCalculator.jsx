import { useState } from "react";
import "../styles/StressCalculator.css";

export default function StressCalculator() {
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);
  const [result, setResult] = useState("");

  const calculateStress = () => {
    const total = Number(q1) + Number(q2) + Number(q3) + Number(q4);

    let finalResult = "";

    if (total <= 4) {
      finalResult = "Low Stress 😊 – You’re doing great. Keep maintaining balance!";
    } 
    else if (total <= 8) {
      finalResult = "Moderate Stress 😟 – Take breaks, breathe, and relax.";
    } 
    else {
      finalResult = "High Stress 😰 – Try mindfulness, grounding, and relaxation exercises.";
    }

    setResult(finalResult);
  };

  return (
    <div className="app-container">
      <div className="stress-card">
        <h1>Stress Level Calculator 🧠</h1>

        <div className="question-block">
          <label>1. How often do you feel overwhelmed?</label>
          <select onChange={(e) => setQ1(e.target.value)}>
            <option value="0">Rarely</option>
            <option value="1">Sometimes</option>
            <option value="2">Often</option>
            <option value="3">Always</option>
          </select>
        </div>

        <div className="question-block">
          <label>2. How well are you sleeping?</label>
          <select onChange={(e) => setQ2(e.target.value)}>
            <option value="0">Very well</option>
            <option value="1">Normal</option>
            <option value="2">Not good</option>
            <option value="3">Very poor</option>
          </select>
        </div>

        <div className="question-block">
          <label>3. Do you feel anxious frequently?</label>
          <select onChange={(e) => setQ3(e.target.value)}>
            <option value="0">No</option>
            <option value="1">Sometimes</option>
            <option value="2">Most of the time</option>
            <option value="3">Always</option>
          </select>
        </div>

        <div className="question-block">
          <label>4. How often do you get headaches or body tension?</label>
          <select onChange={(e) => setQ4(e.target.value)}>
            <option value="0">Never</option>
            <option value="1">Sometimes</option>
            <option value="2">Often</option>
            <option value="3">Daily</option>
          </select>
        </div>

        <button className="calculate-btn" onClick={calculateStress}>
          Calculate Stress
        </button>

        {result && <div className="result-box">{result}</div>}
      </div>
    </div>
  );
}
