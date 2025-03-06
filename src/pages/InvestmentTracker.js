import { useState, useEffect } from "react";
import { db, auth } from "../services/firebaseConfig"; // Import Firestore
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore"; // Firestore functions
import "../styles/InvestmentTracker.css";

const InvestmentTracker = () => {
  const [investmentName, setInvestmentName] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investments, setInvestments] = useState([]);

  // Reference to Firestore investments collection
  const investmentsRef = collection(db, "investments");

  // Fetch investments from Firestore
  useEffect(() => {
    const fetchInvestments = async () => {
      if (auth.currentUser) {
        const q = query(investmentsRef, where("userId", "==", auth.currentUser.uid));
        const snapshot = await getDocs(q);
        const investmentList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setInvestments(investmentList);
      }
    };

    fetchInvestments();
  }, [auth.currentUser]); // Runs every time user logs in

  // Add investment to Firestore
  const addInvestment = async () => {
    if (!investmentName || !investmentAmount) return;

    const newInvestment = {
      name: investmentName,
      amount: investmentAmount,
      userId: auth.currentUser.uid, // Associate investment with user
    };

    const docRef = await addDoc(investmentsRef, newInvestment);
    setInvestments([...investments, { id: docRef.id, ...newInvestment }]);
    setInvestmentName("");
    setInvestmentAmount("");
  };

  // Delete investment from Firestore
  const deleteInvestment = async (id) => {
    await deleteDoc(doc(db, "investments", id));
    setInvestments(investments.filter((inv) => inv.id !== id));
  };

  return (
    <div className="investment-tracker">
      <h2>Investment Tracker</h2>
      <div className="investment-form">
        <input
          type="text"
          placeholder="Investment Name"
          value={investmentName}
          onChange={(e) => setInvestmentName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
        />
        <button onClick={addInvestment}>Add Investment</button>
      </div>
      <div className="investment-list">
        {investments.map((inv) => (
          <div key={inv.id} className="investment-item">
            <span>{inv.name} - ₹{inv.amount}</span>
            <button onClick={() => deleteInvestment(inv.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentTracker;
