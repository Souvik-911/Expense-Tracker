import React from "react";

const Expenses = ({ expenses, deleteExpense }) => {
  return (
    <div className="border-2 w-300 min-h-screen p-4 flex flex-col items-center bg-white text-xl">
      <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
        Expenses
      </h1>

      <div className="w-280 p-4">
        {/* Header */}
        <div className="grid grid-cols-4 font-semibold text-slate-700 mb-3">
          <div className="text-center">Name</div>
          <div className="text-center">Amount</div>
          <div className="text-center">Category</div>
          <div className="text-center">Action</div>
        </div>

        {/* Expenses */}
        <div className="flex flex-col gap-4">
          {expenses.map((expense) => (
            <div
              key={expense.name}
              className="grid grid-cols-4 items-center bg-[#f5f7fa] p-4 rounded-xl">
              <div className="text-center">{expense.name}</div>

              <div className="text-center">₹{expense.amount}</div>

              <div className="text-center">{expense.category}</div>

              <div className="flex justify-center">
                <button
                  onClick={() => deleteExpense(expense.name)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
