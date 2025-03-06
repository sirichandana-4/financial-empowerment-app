import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ExpenseTracker = () => {
  const [amount, setAmount] = useState("");

  const addExpense = async () => {
    await addDoc(collection(db, "expenses"), { amount });
    setAmount("");
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={addExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseTracker;
