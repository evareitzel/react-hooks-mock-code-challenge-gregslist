import React from "react";
import Search from "./Search";

function Header({onSearch, setOnSearch}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} setOnSearch={setOnSearch}/>
    </header>
  );
}

export default Header;
