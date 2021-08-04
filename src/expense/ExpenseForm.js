import react from 'react';

function ExpenseForm(){
    return(
        <div>
        <div>
            <label>Title</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Amount</label>
            <input type="number"></input>
        </div>  
        <div>
            <label>Date</label>
            <input type="date" min="2018-01-01" max="2022-12-31"></input>
        </div>
        </div>
    )
}
export default ExpenseForm;