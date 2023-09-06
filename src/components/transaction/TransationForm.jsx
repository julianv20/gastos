import React, { useState } from 'react';
import { useGlobalState } from '../../hooks';

export const TransationForm = () => {
  const { addTransaction, transaction } = useGlobalState();
  const [description, setDesciption] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (amount !== 0) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
      });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='flex flex-col p-5 space-y-2'>
        <input
          type='text'
          placeholder='Enter a Description'
          className='px-5 py-3 rounded-lg text-neutral-900  focus:outline-none focus:border-transparent focus:ring-0 font-light'
          onChange={(e) => setDesciption(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter an Amount'
          className='px-5 py-3 rounded-lg text-neutral-900 focus:outline-none focus:border-transparent focus:ring-0 font-light '
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className='w-full bg-pink-400 px-5 py-3 rounded-lg text-neutral-100 font-black uppercase'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};
