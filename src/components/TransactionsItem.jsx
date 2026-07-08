import '../App.css'

function TransactionsItem({ transaction, deleteTransaction }) {

  return(
    <>  
      <div className="transaction-header">
          <p>{transaction.title}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.type}</p>
          <p>{transaction.category}</p>
          <p>{transaction.date}</p>
          <button onClick={() => deleteTransaction(transaction.id)}>🗑️</button>
      </div>
    </>
  )

}

export default TransactionsItem