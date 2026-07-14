function SearchBar({ search, setSearch }) {
 
  return(
    <>
      <div>
        <h1>Expense Tracker</h1>
        <input 
          type="text" 
          placeholder="Search Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar