import React from 'react'
import TotalIncome from './TotalIncome'
import TotalExpense from './TotalExpense'

const Data = ({totalExpense,totalIncome,income,expense}) => {
  return (
    <div className='data grid grid-cols-2'>
        <TotalIncome totalIncome = {totalIncome} income = {income}></TotalIncome>
        <TotalExpense totalExpense = {totalExpense} expense = {expense}></TotalExpense>
    </div>
  )
}

export default Data