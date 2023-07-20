import './NewExpense.css'
import Expenseform from './Expenseform'
import React from "react";
function NewExpense(props){
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
       const  expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
       };
       props.onAddExpense(expenseData);
    };
    return (
        <div  className = 'new-expense'>
           <Expenseform onSaveExpenseData = {SaveExpenseDataHandler} ></Expenseform>
           
        </div>
    );
};
export default NewExpense;