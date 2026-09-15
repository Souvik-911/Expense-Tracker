import { useState } from "react";
import Expenses from "./Components/Expenses";
import Heading from "./Components/Heading";
import Inputs from "./Components/Inputs";

function App() { 
  const [expenses, setExpenses] = useState([
    {
      name: "Pizza",
      amount: 500,
      category: "Food",
    },
    {
      name: "Movie",
      amount: 300,
      category: "Entertainment",
    },
  ]);

  function getdata(name, amount, category) {
    setExpenses([...expenses, { name, amount, category }]);
  }
  function deleteExpense(name) {
    setExpenses(expenses.filter((expense)=>  expense.name !== name ))
  }
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i].amount);
  }



  return (
    <div className="min-h-screen flex flex-col items-center gap-3 bg-[#F5F7FA]">
      <Heading />
      <h1 className="text-2xl">Total expense: {total}</h1>
      <Inputs getdata={getdata} />
      <Expenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}
export default App;
