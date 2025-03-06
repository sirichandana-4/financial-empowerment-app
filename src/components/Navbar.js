import { Link } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css"; // Import CSS

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/investments">Investments</Link>
          <Link to="/budget-tracker">💰 Budget Tracker</Link> {/* ✅ Added */}
          <Link to="/educational-resources">📚 Educational Resources</Link>
          <Link to="/calculators">📊 Calculators</Link>
          
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
