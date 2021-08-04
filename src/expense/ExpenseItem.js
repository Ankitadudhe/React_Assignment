import React from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props){

return(
    <div className="expense">
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <h2 >{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
        </div>
    </div>
)
}
export default ExpenseItem;