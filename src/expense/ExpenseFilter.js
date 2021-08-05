import react from 'react';
import './expenseFilter.css'
function ExpenseFilter(props){
    const dropdownHandler=(event)=>{
        props.changeFilter(event.target.value)
    console.log(event.target.value);
    }
return(
    <div className="expenses-filter">
        <div className="expenses-filter__control ">
            <label>Select year</label>
            <select value={props.filterYear}onChange={dropdownHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>

            </select>
        </div>
    </div>
)
}
export default ExpenseFilter;