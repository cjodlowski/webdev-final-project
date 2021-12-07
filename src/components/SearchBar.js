import React from "react";

const SearchBar = () => {
    return(
    <div className="input-group mb-3">
        <span className="input-group-text">
            <i className="fas fa-search"/>
        </span>
        <input className="form-control button-input-group-border override-bs" placeholder="Search Store"/>
    </div>
    )
}
export default SearchBar;