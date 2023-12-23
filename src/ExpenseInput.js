import React from 'react';

function ExpenseInput({name,amount,handleSubmit, setName,setType,setAmount}) {
  
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="expenseName">
        <h3 className='my-2'>Name Of Expense</h3>
        <input
        className='max-md:w-full w-64 px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800'
          type="text"
          placeholder="Name Of Expense"
          required
          autoFocus
          value = {name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="expenseAmount">
        <h3 className='my-2'>Amount</h3>
        <input
        className='max-md:w-full w-64 px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800'
          min = "0"
          type="number"
          placeholder="Enter Amount"
          value = {amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="expenseType">
        <h3 className='my-2'>Expense Type</h3>
        <select className="border p-2 bg-pink-500 text-white max-md:w-full" name="expense" id="dropdown" onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button
      className='my-3 max-md:w-full px-6 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded'
        id="addBtn"
        type="button" 
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}

export default ExpenseInput;
