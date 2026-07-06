
import { useState } from 'react'
import './App.css'
import TransactionsForm from './components/TransactionsForm'
import TransactionsList from './components/TransactionsList'

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "makan",
      amount: 500000,
      type: "income",
      category: "Needs",
      date: "2026-07-6"
    }, 
    {
      id: 2,
      title: "jajan",
      amount: 300000,
      type: "income",
      category: "Needs",
      date: "2026-07-6"
    }
  ])
  
  function addTransactions(transaction) {
    setTransactions((prev) => [
      ...prev, 
      {
        id: Date.now(),
        ...transaction
      }
    ])
  }

  console.log(transactions)
  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionsForm 
        transactions={transactions}
        handleTransactions={addTransactions}
      />
      <TransactionsList 
         transactions={transactions}
      />
    </>
  )
}

export default App
