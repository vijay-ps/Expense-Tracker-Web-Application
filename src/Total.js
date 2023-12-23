import React from 'react'

function Total({total}) {
  return (
    <div className='total my-4'>
        <h3 className='text-pink-500 text-3xl font-bold text-center'>${total}</h3>
    </div>
  )
}

export default Total