import { Link } from "react-router-dom";
import "../styles/Cards.css";

export default function FeatureCard({ title, to, icon }) {
  return (
    <Link to={to} className="feature-card">
      <img src={icon} alt={title} className="card-icon" />
      <p className="card-title">{title}</p>
    </Link>
  );
}
