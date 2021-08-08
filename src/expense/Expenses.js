import React, { useState } from 'react';
import ExpenseChart  from './ExpenseChart';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './expense.css';
import ExpenseList from './ExpenseList'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // let selectedYear;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // selectedYear=selectedYear;
    console.log("selectedYear",selectedYear);
  };
  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
 });
 
 
  return (
    <div>
      <div className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart  expense={filteredData}/>
        <ExpenseList   filteredData={filteredData}/>     
      </div>
    </div>
  );
};

export default Expenses;