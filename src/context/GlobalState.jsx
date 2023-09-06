import { createContext, useState, useReducer, useEffect } from 'react';
import { reducer } from './AppReducer';

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRNSACTION',
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRNSACTION',
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
