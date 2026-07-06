import TransactionsItem from "./TransactionsItem"

function TransactionsList({ transactions }) {

  return(
    <>
      <div>{transactions.map((transaction) => {
        return (
          <TransactionsItem 
            key={transaction.id}
            transaction={transaction}
          />
        )
      })}</div>
    </>
  )
}

export default TransactionsList