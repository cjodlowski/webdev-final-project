import React from "react";
import { Link } from "react-router-dom"
import "../vendors/bootstrap/bootstrap.min.css"
import "../vendors/fontawesome/css/all.css"

import SearchBar from "./SearchBar";

const Navigation = (active = 'featured') => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container-fluid mt-2 d-flex flex-row">
                <div className="d-flex justify-content-start">
                    <Link to="/home">
                        <span className={"remove-decorations override-bs title-format" +
                        " color-light"}>Shop</span>
                    </Link>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'featured' ? 'active' : ''}`} href="#">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'recents' ? 'active' : ''}`} href="#">Recents</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'policies' ? 'active' : ''}`} href="#">Policies</a>
                        </li>
                    </ul>
                </div>
                <div className={"d-flex justify-content-end"}>
                    <div className={"col-3 col-md-4 col-lg-8 me-1"}>
                        <SearchBar/>
                    </div>
                    <div className="col-4 mb-3 btn-group" role="group">
                            <Link to="/profile">
                                <button type="button" className="btn btn-light button-group-border override-bs">Profile</button>
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