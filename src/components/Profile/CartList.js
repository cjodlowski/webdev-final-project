import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import CatalogItem from "../Home/Catalog/CatalogItem";
import { findUserbyId } from "../../services/user-service";
import { findFiltered } from "../../services/item-service";

const CartList = () => {
    //const [items, setItems] = useState([]);
    const [user, setUser] = useState({});
    const [bookmarks, setBookmark] = useState([]);
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result)) });
    useEffect(() => findFiltered(user.cart).then(result => setBookmark(result)));
    //console.log(user.bookmarks);
    //console.log(bookmarks);
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
export default CartList;