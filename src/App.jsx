import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransationForm } from './components/transaction/TransationForm';
import { TransactionList } from './components/transaction/TransactionList';
import { IncomeExpenses } from './components/IncomeExpenses';
import { ExpenseChart } from './components/transaction/ExpenseChart';

function App() {
  return (
    <GlobalProvider>
      <div className=' h-screen flex justify-center items-center'>
        <div className='g:w-3/4  2xl:w-1/2  bg-neutral-100 lg:mt-10 rounded-lg p-10 grid  lg:grid-cols-[1fr_1fr] xl:grid-cols-[2fr_1.5fr] justify-center h-auto   sm:h-full lg:h-2/3'>
          <div>
            <Header />
            <div className='flex flex-col sm:flex-row '>
              <ExpenseChart />
              <IncomeExpenses />
            </div>
            <Balance />
            <TransationForm />
          </div>
          <div className='sm:overflow-y-auto'>
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
