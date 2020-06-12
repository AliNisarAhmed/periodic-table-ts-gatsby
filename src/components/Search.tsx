import React, { ChangeEvent } from "react";
import { tabIndex } from "../utils/helpers";

const Search = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className="search">
      <label htmlFor="search" className="search__label">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onChange}
        className="search__input"
        tabIndex={tabIndex.search}
      />
    </div>
  );

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onSearchTermChange(value);
  }
};

export default Search;
