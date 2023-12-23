import React from 'react';

const Transaction = ({ item }) => {
  return (
    <div className="transaction bg-pink-200 border border-blue-200 p-4 rounded-md shadow-md grid grid-cols-5 my-3 max-md:grid-cols-1">
      <p className="text-blue-500 font-bold">ID: {item.id}</p>
      <p className="text-blue-800 font-bold text-lg">{item.name}</p>
      <p className="text-pink-500 font-bold text-xl">&#8377;{item.amount}</p>
      <p className={`font-bold ${item.type === 'expense' ? 'text-pink-600' : 'text-blue-600'}`}>{(item.type).toUpperCase()}</p>
      <p className="text-blue-500 text-sm font-bold">{item.date}</p>
    </div>
  );
};

export default Transaction;
