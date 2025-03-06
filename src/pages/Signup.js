import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import "../styles/Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ Added state for error handling
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await signup(email, password);
      navigate("/dashboard"); // Redirect after signup
    } catch (error) {
      setError("Signup failed. Try using a different email."); // ✅ Set error message
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Create an Account</h2>
        {error && <p className="error-message">{error}</p>} {/* ✅ Display error if exists */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="signup-btn" type="submit">Sign Up</button>
        <a href="/login" className="login-link">Already have an account? Log in</a>
      </form>
    </div>
  );
};

export default Signup;
