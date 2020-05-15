import React, { useState } from "react";

const Search = (props) => {
  const { updateSearchTerm } = props;

  const changeHandler = (event) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <div>
      <input onChange={changeHandler} />
    </div>
  );
};

export default Search;
