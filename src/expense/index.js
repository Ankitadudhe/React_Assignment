import React from 'react';
import ExpenseItem from './ExpenseItem';
import './expense.css'
function Expense(){
    const Data=[
        {id:1,title:'Apple',price:'$450',date:new Date(2021,5,12)},
        {id:2,title:'Mango',price:'$350',date:new Date(2021,7,12)},
        {id:3,title:'Pineapple',price:'$550',date:new Date(2021,10,15)},
        {id:4,title:'Banana',price:'$50',date:new Date(2021,6,2)},

    ]
    return(
        <div className="expenses">
<ExpenseItem 
title={Data[0].title}
price={Data[0].price}
date={Data[0].date}
/>
<ExpenseItem 
title={Data[1].title}
price={Data[1].price}
date={Data[1].date}
/><ExpenseItem 
title={Data[2].title}
price={Data[2].price}
date={Data[2].date}
/><ExpenseItem 
title={Data[3].title}
price={Data[3].price}
date={Data[3].date}
/>
        </div>
    )
}
export default Expense;