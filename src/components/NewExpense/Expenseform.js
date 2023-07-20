import React from "react";
import { useState } from "react";
import "./Expenseform.css";

const Expenseform = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [UserInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     EnteredDate: ''

  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({

    //     ...UserInput, //rest operator
    //     enteredTitle: event.target.value, //this is using single state

    //this type of state updatipn is not a good practise so arkai sikeny
  };
  // );
  // setUserInput((prevstate) => {
  //     return {...prevstate, enteredTitle: event.target.value};

  // });

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({

    //     ...UserInput,
    //     enteredAmount: event.target.value,

    //         // setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({

    //     ...UserInput,
    //     EnteredDate: event.target.value,

    //         // setEnteredTitle(event.target.value);

    //     });
  };
  const submitHandler = (event) => {
    event.preventDefault(); //it prevents the browser to be reload and stay on the same pagee
    const expenseData = {
      title: enteredTitle, //first one titile bhaneko chai intial stae snga match huna parxa ini haru chai hamro state wala
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value = {enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2021-12-31"
          value = {enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};

export default Expenseform;
