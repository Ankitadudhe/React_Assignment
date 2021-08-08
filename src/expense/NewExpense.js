import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {
  const [hideForm,sethideForm]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    sethideForm(false)
  };
const hideFormHandler=()=>{
  sethideForm(true)
}
const cancelHandler=()=>{
  sethideForm(false)
}
  return (
    <div className='new-expense'>
     {!hideForm && <button onClick={hideFormHandler}>Add New Expense</button>}
     {hideForm && <ExpenseForm cancelHandler={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;