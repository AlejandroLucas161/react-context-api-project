import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul>
      {expenses.map(({ id, name, cost }) => (
        <ExpenseItem key={id} id={id} name={name} cost={cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;