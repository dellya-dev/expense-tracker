import './SearchBar.css'

function SearchBar({ search, setSearch }) {
 
  return(
    <>
      <div className='search-container'>
        <input 
          name='input-search'
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