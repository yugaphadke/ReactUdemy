import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    //working with states
    // let title=props.title;
    // const [title, setTitle] = useState(props.title); 

    // const clickHandler = () =>{
    //     setTitle('UPDATED!');
    //     console.log(title);//o/p prevtitle name
    // };

    // const clickHandler= () =>{
    //     console.log('CLicked!!!');
    // };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                {/* <button onClick={clickHandler}>Change title</button> */}
            </div>
        </Card>

    );

}

export default ExpenseItem;