import React, {useState} from "react";

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020');
    // const filterChangeHandler= selectedYear =>{
    //     console.log('expenses.js');
    //     console.log(selectedYear);
    // }
    const filterChangeHandler= selectedYear =>{
        setFilteredYear(selectedYear);
    }
    
    // filter expneses by year using .filter
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return(
        <li>
            <Card className='expenses'>
                {/* filter dropdown */}
                <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} />

                {/* adding conditional return statement */}

                {/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p>):
                    (filteredExpenses.map((expense) =>(
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount}
                            date={expense.date} 
                        />
                    ))    
                )} */}
                <ExpensesChart expenses={filteredExpenses} />
                {/* {expenseContent} */}
                <ExpensesList items={filteredExpenses} />

                {/* rendering list of data dynamicaly*/}
                {/* {props.items.map((expense) =>( */}
                {/* {filteredExpenses.map((expense) =>(
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date} 
                    />
                ))} */}
                {/* static expense data <ExpenseItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem 
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                ></ExpenseItem>
                <ExpenseItem 
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
                ></ExpenseItem> */}
            </Card>
        </li>
    )
}

export default Expenses;