import React from 'react'
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import Transaction from './Transaction';
import { useNavigate } from 'react-router-dom';
const Income = ({setIncomeList,incomeList}) => {
    const sortDesc = () => {
        let newList = [...incomeList].sort((a,b) => b.amount - a.amount);
        setIncomeList(newList);
        // console.log(incomeList)
      }
      const sortAsec = () => {
        let newList = [...incomeList].sort((a,b) => a.amount - b.amount);
        setIncomeList(newList);
        // console.log(incomeList)
      }
    const navigate = useNavigate();
  return (
    <div className='transaction-list'>
        <div className='list-ops flex justify-between px-3'>
          <h1 className='text-blue-600 font-bold text-3xl max-md:text-xl'>Income List</h1>
          <div className="flex">
            <button className='list-Btn px-6 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded mx-4' onClick={sortDesc}>
              <FaSortAmountDown />
            </button>
            <button className='list-Btn px-6 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded' onClick={sortAsec}>
              <FaSortAmountUp />
            </button>
          </div>
        </div>
        <div className='results'>
          {incomeList.length > 0 ? (
            incomeList.map((item) => (
              <Transaction key = {item.id} item = {item}>
              </Transaction>
            ))
          ) : (
            <h2>No Items Available</h2>
          )}
        </div>
        <button className = "list-btn px-6 py-2 border-2 bg-blue-500 text-white hover:bg-slate-100 hover:text-blue-500  hover:border-blue-800 rounded" onClick={() => navigate("/transactionlist")}>Back</button>
      </div>
  )
}

export default Income