import React, {useState} from "react";
import {Link} from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearch] = useState("");
    return(
    <div className="input-group mb-3">
        <span className="input-group-text bg-light" onClick= { () => console.log("Clicked search lol")}>
            <Link to={`/search/${searchTerm}`}>
                <i className="fas fa-search"/> 
            </Link>
        </span>
        <input className="form-control button-input-group-border bg-light override-bs" placeholder="Search Store" value={searchTerm}
            onChange={(e) => setSearch(e.target.value)}/>
    </div>
    )
}
export default SearchBar;