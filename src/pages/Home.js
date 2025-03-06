import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // ✅ Import CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Financial Empowerment</h1>
        <p>Track your investments, budget wisely, and grow financially.</p>
        <div className="home-buttons">
          <Link to="/signup" className="btn-primary">Get Started</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
