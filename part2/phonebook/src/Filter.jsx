const Filter=({newSearch,handleNewSearch})=>{
    return(
        <>
        <h2>Search here</h2>
        <div>
        filter with: <input value={newSearch} onChange={handleNewSearch}/>
        </div>
        </>
    )
}

export default Filter