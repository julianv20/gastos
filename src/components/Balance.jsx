import React from 'react';
import { formatoDineroColombiano, useGlobalState } from '../hooks';

export const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  console.log(total);
  return (
    <div className='p-5 flex items-center justify-between'>
      <h2 className='text-2xl lg:text-3xl font-semibold'>Your Balance</h2>
      <div>{formatoDineroColombiano(total)}</div>
    </div>
  );
};
