import { useState } from "react"

function TransactionsForm({ handleTransactions, editingTransaction }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  
  const transaction = {
    title,
    amount, 
    type, 
    category, 
    date
  }

  function handleAddButton() {
    handleTransactions(transaction)
    setTitle("")
    setAmount("")
    setType("")
    setCategory("")
    setDate("")
  }

  return(
    <>
      <div>
        <h3>Add Transaction</h3>
        <input 
          type="text"
          placeholder="Add Transaction"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Amount</h3>
        <input 
          type="text" 
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          />
          <h3>Type</h3>
          <div>
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
          <h3>Category</h3>
          <div>
            <label>
              <select 
                name="category" 
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                <option value="salary">Salary</option>
                <option value="needs">Needs</option>
                <option value="entertaiment">Entertaiment</option>
                <option value="holiday">Holiday</option>
                <option value="education">Education</option>
              </select>
            </label>
          </div>
          <h3>Date</h3>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <button 
              onClick={handleAddButton}>
              {editingTransaction? "Save Changes" : "Add Transaction"}
            </button>
          </div>
      </div>
    </>
  )
}

export default TransactionsForm