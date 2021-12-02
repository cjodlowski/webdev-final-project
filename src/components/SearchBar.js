import React from "react";

const SearchBar = () => {
    return(
    <div className="input-group mb-3">
        <span className="input-group-text">
            <i className="fas fa-search"></i>
        </span>
        <input className="form-control" placeholder="Search Store"/>
    </div>
    )
}
export default SearchBar;