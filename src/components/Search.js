import React, {useState} from "react";

function Search({onSearch, setOnSearch}) {
  const  [search, setSearch] = useState('')
  console.log('Search: ', search)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    setOnSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
