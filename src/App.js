import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InvestmentTracker from "./pages/InvestmentTracker"; 
import EducationalResources from "./pages/EducationalResources"; 
import Calculators from "./pages/Calculators";  
import BudgetTracker from "./pages/BudgetTracker";
import Home from "./pages/Home";  // ✅ Import the new Home component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Use Home component instead of <h1> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/investments" element={<InvestmentTracker />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/budget-tracker" element={<BudgetTracker />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
