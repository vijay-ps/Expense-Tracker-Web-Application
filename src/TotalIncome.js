import React from 'react'

const TotalIncome = ({income,totalIncome}) => {
  // console.log(totalIncome)
  return (
    <div className='totalIncome  bg-pink-200 border border-blue-200 p-4 rounded-md shadow-md'>
        <h1 className='text-pink-500 font-bold text-2xl my-2'>Income Data</h1>
        <h2 className='text-blue-500 font-bold text-xl'>TotalIncome {income}</h2>
        <h2 className='text-blue-500 font-bold text-xl'>MaxIncome {totalIncome.length > 0 ? Math.max(...totalIncome): 0}</h2>
        <h2 className='text-blue-500 font-bold text-xl'>MinIncome {totalIncome.length > 0 ? Math.min(...totalIncome) : 0}</h2>
        {/* <h2>AvgIncome {income/TotalIncome.length}</h2> */}
    </div>
  )
}

export default TotalIncome;