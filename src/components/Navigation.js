import React from "react";
import { Link } from "react-router-dom"
import $ from "jquery/dist/jquery";
import "bootstrap/js/src/dropdown";
import "../vendors/bootstrap/bootstrap.min.css"
import "../vendors/fontawesome/css/all.css"

import SearchBar from "./SearchBar";

const Navigation = (active = 'featured') => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container-fluid d-flex flex-row">
                <div className="d-flex justify-content-start ms-3 me-3">
                    <Link to="/home">
                        <span className={"remove-decorations override-bs title-format" +
                        " text-light"}>Shop</span>
                    </Link>
                </div>
                <div className={"d-flex justify-content-center mt-1"}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'featured' ? 'active' : ''}`} to="/featured">Featured</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'recents' ? 'active' : ''}`} to="/recents">Recents</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'policies' ? 'active' : ''}`} to="/privacypolicy">Policies</Link>
                        </li>
                    </ul>
                </div>
                <div className={"d-flex justify-content-end"}>
                    <div className={"col-3 col-md-4 col-lg-8 me-1 mt-3"}>
                        <SearchBar/>
                    </div>
                    <div className="col-4 mb-3 mt-3 btn-group me-2" role="group">
                            <Link to="/profile">
                                <button type="button" className="btn btn-light button-group-border override-bs">Profile</button>
                            </Link>
                        <button type="button"
                                className="btn btn-light dropdown-toggle dropdown-toggle-split"
                                 data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" data-reference="parent">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRef">
                                <Link to="/login" className={"remove-decorations override-bs"}>
                                    <span className="dropdown-item">Log in</span>
                                </Link>
                                <Link to="/register" className={"remove-decorations override-bs"}>
                                    <span className="dropdown-item">Sign up</span>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;