import "../styles/Profile.css";
import { useAuth } from "../context/AuthContext.jsx";
import userImg from "../assets/user.png";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <h2>Not logged in!</h2>;

  const isAdmin = user.role === "admin";

  return (
    <div className="profile-container">

      <div className="profile-header">
        <img src={userImg} alt="User" className="profile-pic" />
        <div>
          <h1>{isAdmin ? "Admin Dashboard" : "My Profile"}</h1>
          <p className="profile-sub">
            {isAdmin 
              ? "Manage content, track engagement, and update wellness resources."
              : "Manage your account and wellness settings."
            }
          </p>
        </div>
      </div>

      <div className="profile-grid">

        {/* Common Card */}
        <div className="profile-card">
          <h2>Account Details</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button>Edit Profile</button>
        </div>

        {/* DIET PLAN CARD */}
        <div className="profile-card">
            <h2>My Diet Plan</h2>

            {localStorage.getItem("myDietPlan") ? (
                (() => {
                const plan = JSON.parse(localStorage.getItem("myDietPlan"));
                return (
                <>
                    <p><b>Goal:</b> {plan.goal}</p>
                    <p><b>Diet Type:</b> {plan.dietType}</p>
                    <p><b>Allergies:</b> {plan.allergies || "None"}</p>
                    <p><b>Meals Per Day:</b> {plan.mealsPerDay}</p>
                    <p><b>Notes:</b> {plan.notes || "No notes"}</p>
                </>
            );
        })()
        ) : (
             <p>No diet plan created yet.</p>
        )}

        <button onClick={() => (window.location.href = "/create-diet")}>
             Update Diet Plan
        </button>
    </div>


        {/* STUDENT */}
        {!isAdmin && (
          <>
            <div className="profile-card">
              <h2>Wellness Summary</h2>
              <p>Mental Health: Stable</p>
              <p>Fitness Level: Improving</p>
              <p>Nutrition Score: Good</p>
            </div>

            <div className="profile-card">
              <h2>Preferences</h2>
              <p>Notifications: Enabled</p>
              <p>Diet Preference: Vegetarian</p>
            </div>
          </>
        )}

        {/* ADMIN */}
        {isAdmin && (
          <>
            <div className="profile-card">
              <h2>Manage Users</h2>
              <p>View, update, or remove registered users.</p>
              <button>Open User Panel</button>
            </div>

            <div className="profile-card">
              <h2>Content Management</h2>
              <p>Update mental health, fitness, and nutrition resources.</p>
              <button>Edit Content</button>
            </div>

            <div className="profile-card">
              <h2>Analytics Dashboard</h2>
              <p>Track engagement, activity, and student progress.</p>
              <button>View Analytics</button>
            </div>
          </>
        )}

      </div>

    </div>
  );
}
