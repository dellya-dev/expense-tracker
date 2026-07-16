import './TransactionsItem.css'

function TransactionsItem({ transaction, deleteTransaction, handleStartEdit }) {

  return(
    <>  
      <div className="transaction-header">
          <p>{transaction.title}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.type}</p>
          <p>{transaction.category}</p>
          <p>{transaction.date}</p>
          <button className='delete-button' onClick={() => deleteTransaction(transaction.id)}>🗑️</button>
          <button className='edit-button' onClick={() => handleStartEdit(transaction)}>🖋️</button>
      </div>
    </>
  )

}

export default TransactionsItem