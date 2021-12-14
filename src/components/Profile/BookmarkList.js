import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CatalogItem from "../Home/Catalog/CatalogItem";
import { findUserbyId } from "../../services/user-service";
import { findFiltered } from "../../services/item-service";


const BookmarkList = () => {
    //const [items, setItems] = useState([]);
    const [user, setUser] = useState({});
    const [bookmarks, setBookmark] = useState([]);
    const params = useParams();
    useEffect(() => { findUserbyId(params.id).then(result => setUser(result)) });
    useEffect(() => findFiltered(user.bookmarks).then(result => setBookmark(result)));
    return (
        <div className="mx-2 mt-3 container">
            <div className={"row ms-3"}>
                {
                    bookmarks.map((item, key) => {
                        return <CatalogItem key={key} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default BookmarkList;