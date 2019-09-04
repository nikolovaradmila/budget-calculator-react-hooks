import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({expense, deleteSingleItem, editItem}) => {

    const {id, charge, amount} = expense

    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div>
                <button className="edit-btn" aria-label="edit button">
                    <MdEdit onClick={() => editItem(id)}/>
                </button>
                <button className="clear-btn" aria-label="delete button">
                    <MdDelete onClick={() => deleteSingleItem(id)} />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem
