import './FilterBar.css'

function FilterBar({ setFilter }) {
  return(
    <>
      <div className="filter-container">
        <button
          onClick={() => setFilter("all")}
        >All</button>
        <button
          onClick={() => setFilter("income")}
        >Income</button>
        <button
          onClick={() => setFilter("expense")}
        >Expense</button>
      </div>
    </>
  )
}

export default FilterBar