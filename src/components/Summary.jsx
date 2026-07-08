function Summary({ totalIncome, totalExpense, balance }) {

  return(
    <>
      <div>
        <h3>Summary</h3>
        <p>Total Income: {totalIncome} </p>
        <p>Total Expense: {totalExpense} </p>
        <p>Balance: {balance} </p>
      </div>
    </>
  )
}

export default Summary