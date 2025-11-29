import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MentalHealth from "./pages/MentalHealth";
import Fitness from "./pages/Fitness";
import Nutrition from "./pages/Nutrition";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreateDietPlan from "./pages/CreateDietPlan";
import SampleDietPlans from "./pages/SampleDietPlans";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/Global.css";

export default function App() {
  const location = useLocation();

  // Hide navbar & footer on login & signup
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="app-layout">
      
      {/* NAVBAR */}
      {!hideLayout && <Navbar onLogout={handleLogout} />}

      <div className="page-content">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* MENTAL HEALTH */}
          <Route
            path="/mental-health"
            element={
              <ProtectedRoute>
                <MentalHealth />
              </ProtectedRoute>
            }
          />

          {/* FITNESS */}
          <Route
            path="/fitness"
            element={
              <ProtectedRoute>
                <Fitness />
              </ProtectedRoute>
            }
          />

          {/* NUTRITION */}
          <Route
            path="/nutrition"
            element={
              <ProtectedRoute>
                <Nutrition />
              </ProtectedRoute>
            }
          />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* SAMPLE PLANS */}
          <Route
            path="/sample-plans"
            element={
              <ProtectedRoute>
                <SampleDietPlans />
              </ProtectedRoute>
            }
          />

          <Route
  path="/create-diet-plan"
  element={
    <ProtectedRoute>
      <CreateDietPlan />
    </ProtectedRoute>
  }
/>


          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* CATCH ALL */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </div>
  );
}
