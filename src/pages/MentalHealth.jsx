import "../styles/MentalHealth.css";
import mentalImg from "../assets/mental.png";

export default function MentalHealth() {
  return (
    <div className="mh-container">
      
      {/* HEADER WITH IMAGE LEFT + TEXT RIGHT */}
      <div className="mh-header-flex">
        
        <img 
          src={mentalImg} 
          alt="Mental Health" 
          className="mh-icon-side" 
        />

        <div className="mh-header-text">
          <h1>Mental Health Support</h1>
          <p className="mh-tagline">
            Your well-being matters. Explore guidance, resources, and practices to support your mental health.
          </p>
        </div>

      </div>

      {/* 2x2 GRID */}
      <div className="mh-grid">

        <div className="mh-card">
          <h2>Counseling & Support 🧑‍⚕️</h2>
          <p>
            Access curated articles, guided mindfulness exercises, and anonymous chat support.
            Try grounding techniques or connect with a counselor when needed.
          </p>
        </div>

        <div className="mh-card">
          <h2>Mindfulness 🧘‍♀️</h2>
          <p>
            Explore meditations, breathing exercises, body scans, and grounding practices for emotional balance.
          </p>
        </div>

        <div className="mh-card">
          <h2>Stress Management 🌿</h2>
          <p>
            Learn journaling, hydration reminders, nature walks, and scientific stress-reduction techniques.
          </p>
        </div>

        <div className="mh-card">
          <h2>Peer Support 🤝</h2>
          <p>
            Join peer groups to share experiences, express emotions safely, and learn coping strategies.
          </p>
        </div>

      </div>

    </div>
  );
}
