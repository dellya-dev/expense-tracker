
import { useEffect, useState } from 'react'
import './App.css'
import TransactionsForm from './components/TransactionsForm'
import TransactionsList from './components/TransactionsList'
import Summary from './components/Summary'
import FilterBar from './components/FilterBar'
import SearchBar from './components/SearchBar'

function App() {
  const [transactions, setTransactions] = useState(()=> {
    const saved= localStorage.getItem("transactions")
    return saved? JSON.parse(saved) : [
    {
      id: 1,
      title: "Makan",
      amount: 200000,
      type: "expense",
      category: "needs",
      date: "2026-7-13"
    }, {
      id: 2,
      title: "gaji",
      amount: 10000000,
      type: "income",
      category: "salary",
      date: "2026-7-13"
    }
  ]})
  const [editingTransaction, setEditingTransaction] = useState(null)
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  function addTransaction(transaction) {
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...transaction
      }
    ])
  }

  function editTransaction(updatedTransaction) {
    
    setTransactions(transactions.map((transaction) => transaction.id === updatedTransaction.id
      ? updatedTransaction
      : transaction
    ))
    setEditingTransaction(null)
  }

  function startEdit(transaction) {
    setEditingTransaction(transaction)
  }

   function deleteTransaction(id) {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  const filterIncome = transactions.filter((transaction) => transaction.type === "income")

  const totalIncome =
    filterIncome.reduce((total, transaction) => { return total + transaction.amount }, 0)

  const filterExpense = transactions.filter((transaction) => transaction.type === "expense")

  const totalExpense = filterExpense.reduce((total, transaction) => { return total + transaction.amount }, 0)

  const balance = totalIncome - totalExpense

  const filterTransactions = 
    transactions.filter((transaction) => {

      if (filter === "income") {
        return transaction.type === "income"
      } else if (filter === "expense") {
        return transaction.type === "expense"
      } else {
        return "all"
      }
    })

    const searchedTransactions = 
      filterTransactions.filter((transaction) => transaction.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    console.log(transactions)

  return (
    <>
      <h1>Expense Tracker</h1>
      <SearchBar 
        search={search}
        setSearch={setSearch}
      />
      <TransactionsForm
        handleAddTransaction={addTransaction}
        editingTransaction={editingTransaction}
        handleEditTransaction={editTransaction}
      />
      <FilterBar 
        setFilter={setFilter}
      />
      <TransactionsList
        transactions={filterTransactions}
        transactions={searchedTransactions}
        deleteTransaction={deleteTransaction}
        handleStartEdit={startEdit}
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
