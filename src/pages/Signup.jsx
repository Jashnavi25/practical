import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [study, setStudy] = useState("");

  const [role, setRole] = useState("student");

  function handleSignup(e) {
    e.preventDefault();

    // PASSWORD CHECK
    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (existingUser && existingUser.email === email) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    const newUser = { 
      email, 
      password, 
      role,
      gender,
      age,
      study
    };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Signup successful! Please login now.");
    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Wellness Hub</p>

        <form onSubmit={handleSignup} className="auth-form">

          {/* EMAIL */}
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password"
              placeholder="Re-enter password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
          </div>

          {/* GENDER + AGE (Side-by-side) */}
          <div className="two-col">
            <div className="input-group">
              <label>Gender</label>
              <div className="gender-box">
                <label><input type="radio" name="gen" value="Female" onChange={(e)=>setGender(e.target.value)} /> Female</label>
                <label><input type="radio" name="gen" value="Male" onChange={(e)=>setGender(e.target.value)} /> Male</label>
                <label><input type="radio" name="gen" value="Other" onChange={(e)=>setGender(e.target.value)} /> Other</label>
              </div>
            </div>

            <div className="input-group">
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>

          {/* STUDY */}
          <div className="input-group">
            <label>Study</label>
            <select 
              value={study}
              onChange={(e) => setStudy(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="Primary School">Primary School</option>
              <option value="Secondary School">Secondary School</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
            </select>
          </div>

          {/* ROLE */}
          <div className="input-group gender-section">
            <label>Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="auth-btn" type="submit">Register</button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
