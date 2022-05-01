import React from "react";
import "./Search.css";

const Search = (props) => {
  const{searchValue,searcharea}=props
  return (
    <div className="searchbox">
      <input type="search" placeholder="search users" onChange={searchValue} value={searcharea}/>
    </div>
  );
};

export default Search;
