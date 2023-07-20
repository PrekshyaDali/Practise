import Card from '../UI/Card';
import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

 const [title, setTitle] = useState(props.title);
//usestate always returns an array with 2 values 
//the first value is what needs to be changed and secpmd is new value
console.log('expenseitem revevaluated by react');

  const clickhandler = () => {
    setTitle('updated');
    //we are calling updating function
    console.log("updated");
  }
 
//dynamic placeholders garna gareko
//object lai nai call gareko so halkya dymanic but not fully
//

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}/> 
      <div className='expense-item_description'>
        <h2> {title}</h2>
      </div>
      <div className='expense-item_price' >${props.amount}</div>
    <button onClick = {clickhandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

//custome component function can return only
//one root component , ekkai choti dherai ota return garna mildaina
//shift alt f to auto format
//js ma chai hamley css ma use gareko classes harulai rakhni matra ho
//css ma hamley sab styling ko kaam haru garna parxa
