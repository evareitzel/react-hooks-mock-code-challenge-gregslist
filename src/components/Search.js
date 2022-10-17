import React, {useState} from "react";

function Search({search, setSearch}) {
  // const  [inputText, setInputText] = useState('')
  console.log('Search: ', search)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    setSearch(search)
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
