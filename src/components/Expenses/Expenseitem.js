import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
//custome component function can return only
//one root component , ekkai choti dherai ota return garna mildaina
//shift alt f to auto format
//js ma chai hamley css ma use gareko classes harulai rakhni matra ho
//css ma hamley sab styling ko kaam haru garna parxa
//usestate always returns an array with 2 values 
//the first value is what needs to be changed and secpmd is new value