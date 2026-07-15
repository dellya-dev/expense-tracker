import './TransactionsForm.css'

import { useEffect, useState } from "react"

function TransactionsForm({ handleAddTransaction, editingTransaction, handleEditTransaction }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")

  console.log(amount)
  console.log(typeof amount)

  const transaction = {
    title,
    amount,
    type,
    category,
    date
  }

  function resetForm() {
    setTitle("")
    setAmount("")
    setType("")
    setCategory("")
    setDate("")
  }

  function handleSubmit() {
    if (editingTransaction === null) {
      handleAddTransaction(transaction)
      resetForm()
    } else {
      const updatedTransaction = {
        id: editingTransaction.id,
        title,
        amount,
        type,
        category,
        date
      }
      handleEditTransaction(updatedTransaction)
      resetForm()

    }
  }

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title)
      setAmount(editingTransaction.amount)
      setType(editingTransaction.type)
      setCategory(editingTransaction.category)
      setDate(editingTransaction.date)
    }

  }, [editingTransaction])

  const isValidForm =
    title !== "" &&
    amount > 0 &&
    type !== "" &&
    category !== "" &&
    date !== ""

  return (
    <>
      <div className='transaction-container'>
        <div>
          <h3>Add Transaction</h3>
          <input
            className='form-title'
            type="text"
            placeholder="Add Transaction"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h3>Amount</h3>
          <input
            className='form-amount'
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div>
          <h3>Type</h3>
          <div className='form-type'>
            <label>
              <input
                type="radio"
                name="type"
                value="income"
                checked={type === "income"}
                onChange={(e) => setType(e.target.value)}
              />
              Income
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === "expense"}
                onChange={(e) => setType(e.target.value)}
              />
              Expense
            </label>
          </div>
        </div>
        <div>
          <h3>Category</h3>
          <div className='form-category'>
            <label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }
                }
              >
                <option value="">Choose category</option>
                <option value="salary">Salary</option>
                <option value="needs">Needs</option>
                <option value="entertaiment">Entertaiment</option>
                <option value="holiday">Holiday</option>
                <option value="education">Education</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <h3>Date</h3>
          <input
            className='form-date'
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          disabled={!isValidForm}
          onClick={handleSubmit}>
          {editingTransaction ? "Save Changes" : "Add Transaction"}
        </button>
        <p className='isvalid-form'> {!isValidForm ? "All data must be filled in" : ""}</p>
      </div>
    </>
  )
}

export default TransactionsForm