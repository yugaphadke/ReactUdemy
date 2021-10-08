import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props){
     // adding conditional return statement

    //  let expenseContent= <p>No Expenses found.</p>;

    //  if(filteredExpenses.length > 0){
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback"> Found no expenses.</h2>    
     }
     
     return <ul className = "expenses-list">
         {props.items.map((expense) =>(
             <ExpenseItem 
                 key={expense.id}
                 title={expense.title} 
                 amount={expense.amount}
                 date={expense.date} 
             />
         ))}
     </ul>
};

export default ExpensesList;