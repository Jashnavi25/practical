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

        {/* COUNSELING CARD */}
        <a 
          href="https://www.umhan.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="mh-card">
            <h2>Counseling & Support 🧑‍⚕️</h2>
            <p>
              Access curated articles, guided mindfulness exercises, and anonymous chat support.
              Try grounding techniques or connect with a counselor when needed.
            </p>
          </div>
        </a>

        {/* MINDFULNESS CARD */}
        <a 
          href="https://www.youtube.com/watch?v=7CBfCW67xT8&rco=1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="mh-card">
            <h2>Mindfulness 🧘‍♀️</h2>
            <p>
              Explore meditations, breathing exercises, body scans, and grounding practices for emotional balance.
            </p>
          </div>
        </a>

        {/* STRESS MANAGEMENT CARD */}
        <a 
          href="https://psu.pb.unizin.org/kines082/part/chapter-1-understanding-stress/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="mh-card">
            <h2>Stress Management 🌿</h2>
            <p>
              Learn journaling, hydration reminders, nature walks, and scientific stress-reduction techniques.
            </p>
          </div>
        </a>

        {/* PEER SUPPORT CARD */}
        <a 
          href="https://www.youtube.com/watch?v=me3GCuv0y8c"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="mh-card">
            <h2>Peer Support 🤝</h2>
            <p>
              Join peer groups to share experiences, express emotions safely, and learn coping strategies.
            </p>
          </div>
        </a>

      </div>

      <div className="mh-center-button">
  <a
    href="/stress-calculator"
    className="mh-btn"
  >
    Stress Calculator
  </a>
</div>


    </div>
  );
}
