import React from "react";
import "./profile.css"
import CatalogItem from "../Home/Catalog/CatalogItem";

const Bookmark = () => {
    return (
        // TODO: this is broken af
        <li className="row">
            <div className="col-5 px-0 override-bs">
                <CatalogItem/>
            </div>
        </li>
    )
}
export default Bookmark;