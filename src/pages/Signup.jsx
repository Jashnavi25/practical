import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // ✅ Default role

  function handleSignup(e) {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (existingUser && existingUser.email === email) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    const newUser = { email, password, role }; // ✅ Save role
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Signup successful! Please login now.");
    navigate("/login");
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Create Account</h2>

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* ✅ Role Selection */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Sign Up</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
