import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({handleLogout,handleTheme}) => {
  return (
    <nav className='nav'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-extrabold text-blue-500 max-md:w-94'>Expense Tracker</h1>
        {/* <button type="text" onClick={handleTheme}>
          <FaSun className='text-2xl mx-2'/>
        </button> */}
      </div>
      <div className='nav-links flex bg-blue-500 p-3 gap-4 my-4 max-md:gap-0 max-md:px-0 justify-between'>
        <div className='flex '>
          <Link to="/home">
              <p className='text-slate-100 p-2'>Home</p>
          </Link>
          <Link to="/transactionlist">
              <p className='text-slate-100 p-2'>TransactionList</p>
          </Link>
          <Link to="/data">
              <p className='text-slate-100 p-2'>Data</p>
          </Link>
        </div>
          <button className ="bg-rose-600 text-slate-100 px-2 py-1" id="logoutBtn"
            onClick={handleLogout}
          >Logout</button>
      </div>
    </nav>
  )
}

export default Nav