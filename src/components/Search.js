import React from "react";

function Search({ onSearch, searchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
