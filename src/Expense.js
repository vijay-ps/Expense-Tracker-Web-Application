import React from 'react'
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import Transaction from './Transaction';
import { useNavigate } from 'react-router-dom';
const Expense = ({setExpenseList,expenseList}) => {
    const sortDesc = () => {
        let newList = [...expenseList].sort((a,b) => b.amount - a.amount);
        setExpenseList(newList);
        // console.log(expenseList)
      }
      const sortAsec = () => {
        let newList = [...expenseList].sort((a,b) => a.amount - b.amount);
        setExpenseList(newList);
        // console.log(expenseList)
      }
      const navigate = useNavigate();
  return (
    <div className='transaction-list'>
        <div className='list-ops flex justify-between px-2'>
          <h1 className='text-pink-600 font-bold text-3xl max-md:text-xl'>Expense List</h1>
          <div>
            <button className='list-btn listBtn   px-6 py-2 border-2 bg-pink-500 text-white hover:bg-slate-100 hover:text-pink-500  hover:border-pink-800 rounded' onClick={sortDesc}>
              <FaSortAmountDown />
            </button>
            <button className='list-btn listBtn   px-6 py-2 border-2 bg-pink-500 text-white hover:bg-slate-100 hover:text-pink-500  hover:border-pink-800 rounded' onClick={sortAsec}>
              <FaSortAmountUp />
            </button>
          </div>
        </div>
        <div className='results'>
          {expenseList.length > 0 ? (
            expenseList.map((item) => (
              <Transaction key = {item.id} item = {item}>
              </Transaction>
              
            ))
          ) : (
            <h2>No Items Available</h2>
          )}
        </div>
        <button className = "list-btn listBtn   px-6 py-2 border-2 bg-pink-500 text-white hover:bg-slate-100 hover:text-pink-500  hover:border-pink-800 rounded" onClick={() => navigate("/transactionlist")}>Back</button>
      </div>
  )
}

export default Expense