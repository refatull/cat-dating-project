
import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to Cat Dating!</h1>
        <p>Find your purr-fect match.</p>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
