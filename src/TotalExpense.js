import React from 'react'

const TotalExpense = ({expense,totalExpense}) => {
  // console.log(totalExpense)
  return (
    <div className='totalExpense  bg-blue-200 border border-blue-200 p-4 rounded-md shadow-md'>
      <h1 className='text-blue-500 font-bold text-2xl my-2'>Expense Data</h1>
        <h2 className='text-pink-500 font-bold text-xl'>TotalExpense &#8377;{expense}</h2>
        <h2 className='text-pink-500 font-bold text-xl'>MaxExpense &#8377;{totalExpense.length > 0 ? Math.max(...totalExpense) : 0}</h2>
        <h2 className="text-pink-500 font-bold text-xl">MinExpense &#8377;{totalExpense.length > 0 ? Math.min(...totalExpense) : 0}</h2>
        {/* <h2>AvgIncome {income/TotalIncome.length}</h2> */}
    </div>
  )
}

export default TotalExpense;