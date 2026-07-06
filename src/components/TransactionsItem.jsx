function TransactionsItem({ transaction }) {

  return(
    <>  
      <div>
          <p>Title: {transaction.title}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Type: {transaction.type}</p>
          <p>Category: {transaction.category}</p>
          <p>Date: {transaction.date}</p>
      </div>
    </>
  )

}

export default TransactionsItem