import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">WellnessHub</Link>
      </div>

      <div className="right-menu">
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mental-health">Mental Health</Link></li>
          <li><Link to="/fitness">Fitness</Link></li>
          <li><Link to="/nutrition">Nutrition</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
