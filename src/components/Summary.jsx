import './Summary.css'

function Summary({ totalIncome, totalExpense, balance }) {
  return (
    <>
      <div >
        <div className='summary-container'>
          <div className='balance-card'>
            <h3
            >Balance</h3>
            <h3> Rp{balance.toLocaleString("id-ID")},00</h3>
          </div>
          <div className='income-card'>
            <h3>Total Income</h3>
            <h3>Rp{totalIncome.toLocaleString("id-ID")},00 </h3>
          </div>
          <div className='expense-card'>
            <h3>Total Expense</h3>
            <h3> Rp{totalExpense.toLocaleString("id-ID")},00</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary