import React from "react";
import { Link } from "react-router-dom"
import "../vendors/bootstrap/bootstrap.min.css"
import "../vendors/fontawesome/css/all.css"

import SearchBar from "./SearchBar";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid mt-2">
                <div className="col-1 ms-3 mb-3">
                    <Link to="/home">
                        <span className={"remove-decorations override-bs text-color-light"}>Shop</span>
                    </Link>
                </div>
                <button className="col-1 navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item mb-2">Home
                            <span className="visually-hidden">(current)</span></li>
                        <li className="nav-item mb-2">Details</li>
                        {/* ^^ placeholder for potential future implementation,,, do the $active
                         check for this if used*/}
                    </ul>

                        <div className="d-flex">
                            <SearchBar/>
                        </div>
                <div className="col-2 mb-3 btn-group" role="group">
                    <Link to="/profile">
                        <button type="button" className="btn btn-light button-group-border my-2 my-sm-0 my-md-0 ms-2 override-bs">Profile</button>
                    </Link>
                    <div className="btn-group" role="group">
                        <button  id="btnGroupDrop1" type="button"
                                 className="btn btn-light dropdown-toggle"
                                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="#">Dropdown link</a>
                            <Link to="/login">
                                <span className="dropdown-item">Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;