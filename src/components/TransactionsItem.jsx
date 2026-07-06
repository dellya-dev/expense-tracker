function TransactionsItem({ transaction }) {

  return(
    <>  
      <div>
          <p>{transaction.title}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.type}</p>
          <p>{transaction.category}</p>
          <p>{transaction.date}</p>
      </div>
    </>
  )

}

export default TransactionsItem