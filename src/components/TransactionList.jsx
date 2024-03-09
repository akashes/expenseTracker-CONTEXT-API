import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
  const {transactions} =useContext(GlobalContext)
  console.log('value is ',transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">{

       transactions.length>0 &&  transactions.map((transaction)=>(
        <Transaction transaction={transaction} />

       ))
      }
      
      </ul>
      
    </>
  )
}

export default TransactionList
