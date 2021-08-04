import React,{useState} from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props){
const [title,setTitle]=useState(props.title);
const clickHandler=()=>{
   setTitle('Updated')
   console.log(title);
    }
return(
    <div className="expense">
        <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <h2 >{title}</h2>
        <div className="expense-item__price">{props.price}</div>
        <button onClick={clickHandler}>Title update</button>
        </div>
    </div>
)
}
export default ExpenseItem;