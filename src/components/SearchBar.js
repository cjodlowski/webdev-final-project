import React from "react";

const SearchBar = () => {
    return(
    <div className="input-group mb-3">
        <span className="input-group-text bg-light">
            <i className="fas fa-search"/>
        </span>
        <input className="form-control button-input-group-border bg-light override-bs" placeholder="Search Store"/>
    </div>
    )
}
export default SearchBar;