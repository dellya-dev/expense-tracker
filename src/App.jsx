
import { useState } from 'react'
import './App.css'
import TransactionsForm from './components/TransactionsForm'
import TransactionsList from './components/TransactionsList'
import Summary from './components/Summary'

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
  const [editingTransaction, setEditingTransaction] = useState(null)

  function addTransaction(transaction) {
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...transaction
      }
    ])
  }

  console.log(transactions)

  function editTransaction(updatedTransaction) {
    
    setTransactions(transactions.map((transaction) => transaction.id === updatedTransaction.id
      ? updatedTransaction
      : transaction
    ))
    setEditingTransaction(null)
  }

  const filterIncome = transactions.filter((transaction) => transaction.type === "income")

  const totalIncome =
    filterIncome.reduce((total, transaction) => { return total + transaction.amount }, 0)

  const filterExpense = transactions.filter((transaction) => transaction.type === "expense")

  const totalExpense = filterExpense.reduce((total, transaction) => { return total + transaction.amount }, 0)

  const balance = totalIncome - totalExpense

  function deleteTransaction(id) {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }


  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionsForm
        handleAddTransaction={addTransaction}
        editingTransaction={editingTransaction}
        handleEditTransaction={editTransaction}
      />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <Summary
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        balance={balance}
      />
    </>
  )
}

export default App
