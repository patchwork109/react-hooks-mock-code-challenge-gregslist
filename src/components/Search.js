import React, { useState } from "react";

function Search({searchedValueUpdate}) {

  const [searchInputValue, setSearchInputValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    searchedValueUpdate(searchInputValue)
  }

  const handleSearchInputChange = (e) => {
    console.log(e.target.value);
    setSearchInputValue(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInputValue}
        onChange={handleSearchInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
