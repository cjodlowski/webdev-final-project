import React from "react";
import Bookmark from "./Bookmark"
import CatalogItem from "../Home/Catalog/CatalogItem";

const BookmarkList = () => {
    return(
        <div className="mx-2">
            <h2>Bookmarks</h2>
            <ul className="list-group">
                {/* map bookmark here */}
                <CatalogItem/>
            </ul>
        </div>
    )
}

export default BookmarkList;