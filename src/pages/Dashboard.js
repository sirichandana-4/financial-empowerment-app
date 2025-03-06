import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css"; // ✅ Import CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>📊 Dashboard</h1>
      <p>Welcome! Manage your finances smartly with these tools.</p>

      <div className="dashboard-sections">
        <Link to="/investments" className="dashboard-card">
          💰 <h3>Investment Tracker</h3>
          <p>Monitor your investments and analyze trends.</p>
        </Link>

        <Link to="/budget-tracker" className="dashboard-card">
          📉 <h3>Budget Tracker</h3>
          <p>Track your expenses and plan your budget.</p>
        </Link>

        <Link to="/calculators" className="dashboard-card">
          📊 <h3>Financial Calculators</h3>
          <p>Use SIP, EMI & goal calculators.</p>
        </Link>

        <Link to="/educational-resources" className="dashboard-card">
          📚 <h3>Learn & Grow</h3>
          <p>Explore educational resources to improve financial knowledge.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
