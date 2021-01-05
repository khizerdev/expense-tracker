import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer'

// const initialState = []
const initialState = JSON.parse(localStorage.getItem('transactions')) || [[{"amount":400,"category":"Salary","type":"Income","date":"2021-01-05","id":"fb58d032-46f8-4ee5-9e60-96401895392f"}]];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)


    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION' , 
            payload: id
        })  
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION', 
            payload: transaction
        })
    }

    // console.log(transactions)
    const balance = transactions.reduce((acc,currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc +   currVal.amount)
    } , 0)

    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}