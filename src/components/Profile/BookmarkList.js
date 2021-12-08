import React from "react";
import Bookmark from "./Bookmark"
const BookmarkList = () => {
    return(
        <div className="mx-2">
            <h2>Bookmarks</h2>
            <ul className="list-group">
                {/* map bookmark here */}
                <Bookmark />
            </ul>
        </div>
    )
}

export default BookmarkList;