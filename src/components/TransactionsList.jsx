import TransactionsItem from "./TransactionsItem"
import '../App.css'

function TransactionsList({ transactions, deleteTransaction }) {

  return(
    <>
      <div>{transactions.map((transaction) => {
        return (
          <TransactionsItem 
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        )
      })}</div>
    </>
  )
}

export default TransactionsList