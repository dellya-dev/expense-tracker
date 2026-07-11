import TransactionsItem from "./TransactionsItem"
import '../App.css'

function TransactionsList({ transactions, deleteTransaction, handleStartEdit }) {

  return(
    <>
      <div>{transactions.map((transaction) => {
        return (
          <TransactionsItem 
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            handleStartEdit={handleStartEdit}
          />
        )
      })}</div>
    </>
  )
}

export default TransactionsList