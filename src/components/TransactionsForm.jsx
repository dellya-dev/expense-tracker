import { useState } from "react"

function TransactionsForm() {
  const [type, setType] = useState("Income")
  return(
    <>
      <div>
        <h3>Add Transaction</h3>
        <input 
          type="text"
          placeholder="Add Transaction"
        />
        <h3>Amount</h3>
        <input 
          type="text" 
          name=""
          placeholder="Amout"
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
                id="category">
                <option value="salary">Salary</option>
                <option value="needs">Needs</option>
                <option value="entertaiment">Entertaiment</option>
                <option value="holiday">Holiday</option>
                <option value="education">Education</option>
              </select>
            </label>
          </div>
          <h3>Date</h3>
          <input type="date" />
      </div>
    </>
  )
}

export default TransactionsForm