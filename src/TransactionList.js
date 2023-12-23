import React from 'react';
import Transaction from "./Transaction"
import { Link } from 'react-router-dom';
function TransactionList({setSearchResults, searchResults, search, setSearch }) {
  return (
    <div className='transactionList'>
      <div className='searchExpense'>
        <h3>Search Income/Expense</h3>
        <input
        className='max-md:w-full w-64 px-3 py-2 border border-blue-600 rounded-md text-blue-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800'
          type="text"
          placeholder="Search Income/Expense"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='transaction-list'>
        <div className='list-ops'>
          <div className='flex justify-between items-center my-3 max-md:flex-col'>
            <h1 className='font-bold text-3xl text-pink-500 max-md:text-2xl'>Transaction List</h1>
            <div className='max-md:flex'>
              <Link to="/incomelist">
                  <button className="listBtn   px-6 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded">Income</button>
              </Link>
              <Link to="/expenselist">
                  <button className="listBtn   px-6 py-2 border-2 bg-pink-500 text-white hover:bg-slate-100 hover:text-pink-500  hover:border-pink-800 rounded">Expense</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='results'>
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <Transaction key = {item.id} item = {item}>
              </Transaction>
              
            ))
          ) : (
            <h2 className='text-blue-500 text-3xl font-bold'>No Items Available</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
