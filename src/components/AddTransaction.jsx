import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const {addTransaction}=   useContext(GlobalContext)

  

    const[text,setText]=useState("")
    const[amount,setAmount]=useState("")


    const onsubmit=(e)=>{
        console.log('inside addtransaction');
        e.preventDefault()

        const newTransaction ={
            id:   Math.floor(Math.random() * 100000000),
            text,
            amount:+amount

        }

        addTransaction(newTransaction)
        setAmount("")
        setText("")
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      
    </>
  )
}

export default AddTransaction
