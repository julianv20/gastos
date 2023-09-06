import { Context } from '../context/GlobalState';
import { useContext } from 'react';

export const useGlobalState = () => {
  const data = useContext(Context);
  return data;
};

export const formatoDineroColombiano = (numero) => {
  // Formatea el número en formato de dinero colombiano
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(numero);
};
