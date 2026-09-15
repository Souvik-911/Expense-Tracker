import { useState } from "react"; 

const Inputs = ({ getdata }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  return (
    <div className="flex gap-3 text-xl">
      <div className="bg-white border border-slate-300 p-2">
        <label htmlFor="">Expense name: </label>
        <input
          className="p-2"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter item.."
        />
      </div>

      <div className="bg-white border border-slate-300 p-2">
        <label htmlFor="">Amount: </label>
        <input
          className="p-2"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          type="text"
          placeholder="Enter amount.."
        />
      </div>

      <div className="bg-white border border-slate-300 p-2">
        <label htmlFor="">Category: </label>

        <select className="p-2" onChange={(e) => setCategory(e.target.value)}>
          <option value="None">Select</option>
          <option value="Food">Food</option>
          <option value="Movies">Movies</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>

      <button
        onClick={() => {
          // if (name === "") {
          //   alert("Please enter name of expense");
          // }
          // else if (amount === "") {
          //   alert("Please enter an amount")
          // }
          // else
          getdata(name, amount, category);
        }}
        className="bg-blue-200 rounded-2xl p-2">
        Add Expense
      </button>
    </div>
  );
};

export default Inputs;
