import react, { useState } from 'react';
import './expenseForm.css'
function ExpenseForm(){
    const [enteredTitle,setEnteredTitle]=useState()
    const [enteredAmount,setEnteredAmount]=useState()
    const [enteredDate,setEnteredDate]=useState()

    // const [userInput,setUserInput]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''})
    const titleChangeHandler=(event)=>{
        setEnteredTitle({enteredTitle:event.target.value})
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount({enteredAmount:event.target.value})
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate({enteredDate:event.target.value})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenceData={
        title:enteredTitle,
        amount:enteredAmount,
        date:enteredDate
        }
        console.log("expenceData",expenceData);
        setEnteredTitle(' ');
        setEnteredAmount(' ');
        setEnteredDate(' ');
    }
    return(
        <div className="new-expense">
        <form onSubmit={submitHandler}>
        <div className="new-expense__control_textbox">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control_textbox">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
        </div>  
        <div className="new-expense__control_textbox">
            <label>Date</label>
            <input type="date" min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        <button type="submit">Add Expense</button>
       </form>
        </div>
    )
}
export default ExpenseForm;