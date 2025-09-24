import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
