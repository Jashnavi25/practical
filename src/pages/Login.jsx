import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      alert("No user found! Please signup first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      login(savedUser);   // includes role
      localStorage.setItem("authUser", JSON.stringify(savedUser));
      navigate("/");
    } else {
      alert("Invalid login credentials!");
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}
