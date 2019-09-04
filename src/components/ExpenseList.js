import React from 'react'
import ExpenseItem from "./ExpenseItem"
import { MdDelete } from "react-icons/md";

const ExpenseList = ({expenses, clearAllItems, deleteSingleItem, editItem}) => {
     
    return (
        <>
             <ul className="list">
                {expenses.map((expense) => {
                   return <ExpenseItem
                    key={expense.id} 
                    expense={expense}
                    deleteSingleItem={deleteSingleItem}
                    editItem={editItem}

                    >
                    </ExpenseItem>
                })}
             </ul>
             {expenses.length > 0 && <button className="btn" onClick={clearAllItems}>clear expenses <MdDelete className="btn-icon"/></button>}
        </>
    )
}

export default ExpenseList
