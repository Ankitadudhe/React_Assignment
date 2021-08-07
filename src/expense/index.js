import React, { useState } from 'react';

import NewExpense from './NewExpense';
import Expenses from './Expenses';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Apple',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '2',
   title: 'Pineapple',
   amount: 700,
   date: new Date(2021, 2, 12) },
  {
    id: '3',
    title: 'Mango',
    amount: 550,
    date: new Date(2021,10,15),
  },
  {
    id: '4',
    title: 'Banana',
    amount: 450,
    date: new Date(2021,6,2),
  },
];

const Expense = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Expense;