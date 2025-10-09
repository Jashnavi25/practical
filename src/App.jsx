import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("register");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  // 🔹 Registration handlers
  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }
    setRegisteredUser({
      username: formData.username,
      password: formData.password,
    });
    setMessage("✅ Registration Successful! Redirecting to login...");
    setTimeout(() => setPage("login"), 2000);
  };

  // 🔹 Login handlers
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      registeredUser &&
      loginData.username === registeredUser.username &&
      loginData.password === registeredUser.password
    ) {
      setMessage("");
      setPage("homepage");
    } else {
      setMessage("❌ Invalid credentials, try again!");
    }
  };

  // 🔹 Homepage (WellnessHub)
  const HomePage = () => (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">WellnessHub</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Mental Health</li>
          <li>Fitness</li>
          <li>Nutrition</li>
          <li>Profile</li>
          <li onClick={() => setPage("login")} style={{ color: "red", cursor: "pointer" }}>Logout</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Your Health Matters</h1>
        <button className="explore-btn">Explore Resources</button>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/brain.png"
            alt="Mental Health"
          />
          <h3>Mental Health Support</h3>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/dumbbell.png"
            alt="Fitness"
          />
          <h3>Fitness Programs</h3>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/apple.png"
            alt="Nutrition"
          />
          <h3>Nutrition Advice</h3>
        </div>
      </section>
    </div>
  );

  // 🔹 Render based on state
  return (
    <div className="container">
      {page === "register" && (
        <form className="form-box" onSubmit={handleRegisterSubmit}>
          <h2>Registration Page</h2>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleRegisterChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleRegisterChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleRegisterChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleRegisterChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleRegisterChange}
          />

          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleRegisterChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleRegisterChange}
              />
              Female
            </label>
          </div>

          <button type="submit" className="btn">Register</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setPage("login")} className="link">
              Login here
            </span>
          </p>
          {message && <p className="message">{message}</p>}
        </form>
      )}

      {page === "login" && (
        <form className="form-box" onSubmit={handleLoginSubmit}>
          <h2>Login Page</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleLoginChange}
          />
          <button type="submit" className="btn">Login</button>
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setPage("register")} className="link">
              Register here
            </span>
          </p>
          {message && <p className="message">{message}</p>}
        </form>
      )}

      {page === "homepage" && <HomePage />}
    </div>
  );
}
