import { formatoDineroColombiano, useGlobalState } from '../hooks';

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  console.log(amounts);
  return (
    <div className='p-5 flex items-center justify-between '>
      <div className=''>
        <h4>Expense: </h4>
        <h4>Income: </h4>
      </div>
      <div>
        <p className='ml-2 font-black'>{formatoDineroColombiano(expense)}</p>
        <p className='ml-2 font-black'>{formatoDineroColombiano(income)}</p>
      </div>
    </div>
  );
};
