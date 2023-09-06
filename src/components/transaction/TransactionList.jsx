import { formatoDineroColombiano, useGlobalState } from '../../hooks';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div className='p-5 flex flex-col justify-center'>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={` mb-2 p-2 rounded-lg flex justify-between items-center ${
            transaction.amount < 0 ? 'bg-red-700/50 ' : 'bg-neutral-900/20'
          }`}
        >
          <div>
            <p className='text-neutral-900 font-bold'>
              {transaction.description}
            </p>
            <span>{formatoDineroColombiano(transaction.amount)}</span>
          </div>

          <div>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className='bg-pink-600  text-center rounded-lg text-neutral-100 font-black px-4 py-2 '
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
