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

  //******************************* state values ***********************************/

  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses); 
  
  // single expense, add single expense
  const [charge, setCharge] = useState("");

  // single amount, add single amount
  const [amount, setAmount] = useState("");

  //alert, show or hide alert
  const [alert, setAlert] = useState({show: false});


  //******************************* functionality ***********************************/
   const handleCharge = e => {
     console.log(`charge: ${e.target.value}`)
     setCharge(e.target.value);
   };

   const handleAmount = e => {
    console.log(`amount: ${e.target.value}`)
     setAmount(e.target.value);
   };

   const handleAlert = ({type, text}) => {
     setAlert({show: true, type, text});
     setTimeout(() => {
       setAlert({show: false});
     }, 3000);
   };

   const handleSubmit = e => {
     e.preventDefault();
     if (charge !== "" && amount > 0) {
      const singleExpense = {id: uuid(), charge: charge, amount: amount};
      setExpenses([...expenses, singleExpense]);
      handleAlert({type: "success", text: "the item has been added successfuly"});
      setCharge(" ");
      setAmount(" ");
     
     } else {
       // handle alert called
       handleAlert({type: "danger", text: "Please fill the inputs"});

     }
   };

   const clearAllItems = () => {
     console.log("cleared all items");
     setExpenses([]);
     handleAlert({type: "danger", text: "all items deleted"})
   };

   const deleteSingleItem = id => {
     console.log(`deleted the item with id: ${id}`)
     let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({type: "danger", text: "item deleted"})
   }

   const editItem = id => {
    console.log(`edited the item with id: ${id}`)
   }

  return (
    <>
  {alert.show && <Alert type={alert.type} text={alert.text}/>}
  <h1>Budget Calculator</h1>
  <main className="main-container">
  <ExpenseForm 
  charge={charge}
  amount={amount}
  handleCharge={handleCharge}
  handleAmount={handleAmount}
  handleSubmit={handleSubmit}
  />
  <ExpenseList 
  expenses={expenses}
  clearAllItems={clearAllItems}
  deleteSingleItem={deleteSingleItem}
  editItem={editItem}
  ></ExpenseList>
  </main>

  <h1>
    total spendings: <span className="total">
     ${expenses.reduce((acc, curr) => {
       return (acc += parseInt(curr.amount));
     }, 0)}
    </span>
  </h1>
    </>
  );
}

export default App;
