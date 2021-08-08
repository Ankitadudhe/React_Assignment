import React from 'react';
import ExpenseItem from './ExpenseItem';
import './expenseList.css'
const ExpenseList=(props)=>{
    if(props.filteredData.length === 0 ){
    return <h2 className="expenses-list__fallback">No Expense found</h2>
    }
    return(
<div>
   <ul className="expenses-list">
    { props.filteredData.map((expense) => (
       <ExpenseItem
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
       />
     ))}
    </ul> 
    </div>
    )
}
export default ExpenseList;