
import { useState } from 'react'
import './App.css'
import TransactionsForm from './components/TransactionsForm'
import TransactionsList from './components/TransactionsList'

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: Date.now,
      title: "makan",
      amount: 500000,
      type: "Income",
      category: "Needs",
      date: "2026-07-6"
    }, 
    {
      id: Date.now,
      title: "jajan",
      amount: 300000,
      type: "Income",
      category: "Needs",
      date: "2026-07-6"
    }
  ])
  
 

  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionsForm 
        transactions={transactions}
      />
      <TransactionsList 
         transactions={transactions}
      />
    </>
  )
}

export default App
