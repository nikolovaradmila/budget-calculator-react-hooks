import React from 'react';
import './App.css';
import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"
import Alert from "./components/Alert"
import uuid from "uuid/v4"

function App() {
  return (
    <>
  <Alert/>
  <ExpenseForm/>
  <ExpenseList></ExpenseList>
    </>
  );
}

export default App;
