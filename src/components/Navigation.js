import React from "react";
import { Link } from "react-router-dom"
import "../vendors/bootstrap/bootstrap.min.css"
import "../vendors/fontawesome/css/all.css"

import SearchBar from "./SearchBar";

const Navigation = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-2">
                    <Link to="/home">
                        <i className="fas fa-home"></i>
                    </Link>
                </div>
                <div className="col-6">
                    <SearchBar />
                </div>
                <div className="col-4 list-group list-group-horizontal">
                    <Link to="/profile">
                        <button className="btn btn-primary list-group-item mx-2">My Profile</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-primary list-group-item mx-2">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navigation;