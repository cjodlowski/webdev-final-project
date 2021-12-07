import React from "react";
import Bookmark from "./Bookmark"
const BookmarkList = () => {
    return(
        <div mx-2>
        <h2>Bookmarks</h2>
        <li className="row">
            {/* map bookmark here */}
            <Bookmark />
        </li>
        </div>
    )
}

export default BookmarkList;