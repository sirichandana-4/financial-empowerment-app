import React, { useState } from "react";
import "../styles/Calculators.css"; // ✅ Import Styling

const Calculators = () => {
  // SIP State
  const [sipAmount, setSipAmount] = useState("");
  const [sipRate, setSipRate] = useState("");
  const [sipYears, setSipYears] = useState("");
  const [sipResult, setSipResult] = useState(null);

  // EMI State
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emiResult, setEmiResult] = useState(null);

  // SIP Calculation
  const calculateSIP = () => {
    if (!sipAmount || !sipRate || !sipYears) {
      alert("Please fill all SIP fields.");
      return;
    }

    const r = sipRate / 100 / 12;
    const n = sipYears * 12;
    const sipValue = sipAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setSipResult(sipValue.toFixed(2));
  };

  // EMI Calculation
  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) {
      alert("Please fill all EMI fields.");
      return;
    }

    const r = interestRate / 100 / 12;
    const n = loanTenure * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(emi.toFixed(2));
  };

  return (
    <div className="calculators-container">
      <h2>📊 Financial Calculators</h2>
      <p>Calculate your SIP returns and EMI easily.</p>

      <div className="calculators-grid">
        {/* SIP Calculator */}
        <div className="calculator-card">
          <h3>📈 SIP Calculator</h3>
          <input type="number" placeholder="Monthly Investment (₹)" value={sipAmount} onChange={(e) => setSipAmount(e.target.value)} />
          <input type="number" placeholder="Annual Return Rate (%)" value={sipRate} onChange={(e) => setSipRate(e.target.value)} />
          <input type="number" placeholder="Investment Duration (Years)" value={sipYears} onChange={(e) => setSipYears(e.target.value)} />
          <button onClick={calculateSIP}>Calculate</button>
          {sipResult !== null && <p>Estimated Maturity Amount: ₹{sipResult}</p>}
        </div>

        {/* EMI Calculator */}
        <div className="calculator-card">
          <h3>🏡 EMI Calculator</h3>
          <input type="number" placeholder="Loan Amount (₹)" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
          <input type="number" placeholder="Interest Rate (%)" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          <input type="number" placeholder="Loan Tenure (Years)" value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} />
          <button onClick={calculateEMI}>Calculate</button>
          {emiResult !== null && <p>Monthly EMI: ₹{emiResult}</p>}
        </div>
      </div>
    </div>
  );
};

export default Calculators;
