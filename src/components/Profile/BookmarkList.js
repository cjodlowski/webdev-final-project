import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import CatalogItem from "../Home/Catalog/CatalogItem";
import { findUserbyId } from "../../services/user-service";
import { findItemById } from "../../services/item-service";


const BookmarkList = () => {
    //const [items, setItems] = useState([]);
    const [user, setUser] = useState({});
    const [currbm, setBookmark] = useState({});
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))});
    // TODO: setBookmark changes the state of the bookmark, which means all items are
    // rendered as the same item, and are rapidly switching back and forth
    // Need a good way to get an array of bookmark OBJECTS and not IDS, so that we can map through that instead
    const getBookmark = (id) => {findItemById(id).then(result => setBookmark(result))};
    if(user.bookmarks == undefined) {
        user.bookmarks = [];
    }
    return(
        <div className="mx-2 mt-3 container">
            <div className={"row ms-3"}>
                {
                    user.bookmarks.map((item, key) => {
                        getBookmark(item);
                        return <CatalogItem key={key} item={currbm} />
                    })
                }
            </div>
        </div>
    )
}

export default BookmarkList;