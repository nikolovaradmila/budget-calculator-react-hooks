import React, {useState} from 'react';
import './App.css';
import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"
import Alert from "./components/Alert"
import uuid from "uuid/v4"


// useState is a function that returns an array with two values
// the first value is the actual value of the stat
// the second value is the fuction that we use to update/control the state
// we can add a default value of the state


const initialExpenses = [
  {
    id: uuid(), 
    charge: "rent",
    amount: 900,
  },
  {
    id: uuid(), 
    charge: "car payment",
    amount: 300,
  },
  {
    id: uuid(), 
    charge: "credit card bill",
    amount: 200,
  },
];

console.log(initialExpenses);


function App(){
  const [expenses, setExpenses] = useState(initialExpenses); 
  
  return (
    <>
  <Alert/>
  <h1>Budget Calculator</h1>
  <main className="main-container">
  <ExpenseForm/>
  <ExpenseList expenses={expenses}></ExpenseList>
  </main>

  <h1>
    total spendings: <span className="total">
     ${expenses.reduce((acc, curr) => {
       return (acc += curr.amount);
     }, 0)}
    </span>
  </h1>
    </>
  );
}

export default App;
