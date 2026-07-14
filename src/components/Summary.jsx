import './Summary.css'

function Summary({ totalIncome, totalExpense, balance }) {
  return (
    <>
      <div>
        <h2 className='balance'
          >Your Balance: Rp{balance.toLocaleString("id-ID")},00</h2>
        <div className="total-income-expense">
          <div>
            <p>Total Income</p>
            <p>Rp{totalIncome.toLocaleString("id-ID")},00 </p>
          </div>
          <div>
            <p>Total Expense</p>
            <p> Rp{totalExpense.toLocaleString("id-ID")},00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary