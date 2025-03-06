import { useState } from "react";
import "../styles/BudgetTracker.css"; // ✅ Import CSS

const BudgetTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!description || !amount) return;
    const newExpense = { id: Date.now(), description, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="budget-tracker-container">
      <div className="budget-tracker">
        <h2>💰 Budget Tracker</h2>

        {/* Input Fields */}
        <div className="budget-inputs">
          <input
            type="text"
            placeholder="Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount ($)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="add-btn" onClick={addExpense}>Add</button>
        </div>

        {/* Expense List */}
        <div className="expense-list">
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <span>{expense.description}: ${expense.amount.toFixed(2)}</span>
              <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
