import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {findFiltered } from "../../../services/item-service";
import  {findLoggedIn} from "../../../services/user-service";
const CatalogItem = (
                         item = {
                             title: "item",
                             image: "...",
                             seller: "seller",
                             price: 0,
                             rating: 0.0,
                             tags: [],
                             featured: false
                         }
                     ) => {
    item = item.item;
    const [user, setUser] = useState({});
    const [bookmarks, setBookmark] = useState([]);
    //useEffect(() => { findLoggedIn().then(result => setUser(result));}, [user]);
    //useEffect(() => {findFiltered(user.bookmarks).then(result => setBookmark(result))}, [user.bookmarks]);
    let itemIsBookmarked = bookmarks.includes(item._id);
    //console.log(bookmarks);
    //console.log(item._id, itemIsBookmarked);
    const formatCurrency = (price = 1.01) => {
        let num = price.toLocaleString('en-US', {minimumFractionDigits: 2});
        return(num);
    };

    const addBookmark = () => {

    }

    return(
            <>
                <div className={"me-3 mb-3 col-3 card border-secondary px-0 override-bs"}>
                <Link className="card-header remove-decorations override-bs" to={"/profile/id/:id"}>
                    <h6 className={"mb-0 seller-link"}>{item.seller}</h6>
                </Link>
                    <img className="card-img-top card-img-height my-2 mx-auto d-block override-bs" src={item.image} alt="shop item"/>
                    <h5 className="card-title ms-2">{item.title}</h5>
                    <ul className={"list-group list-group-flush custom-border-light override-bs"}>
                        <li className="list-group-item">${formatCurrency(item.price)}</li>
                        {/*TODO: fix the double 0 stuff....*/}
                        <li className="list-group-item">Flavor text maybe.</li>
                    </ul>
                <div className="card-body d-flex flex-column">
                    <Link to="#" className="btn btn-secondary align-content-end mt-auto mb-2" data-bs-toggle={"tooltip"} title={"Add to cart!"}>
                        <i className={"fas fa-cart-plus me-2"}/></Link>
                    {/*<Link to={"#"} className={"btn btn-secondary me-2"}
                     data-bs-toggle={"tooltip"} title={"Remove from to cart :("}>*/}
                    {/*    <i className="fas fa-check me-2"/>Added to cart</Link>*/}

                    <Link to="#" className={`btn btn-secondary align-content-end
                    ${itemIsBookmarked ? 'd-none' : ''}`} data-bs-toggle="tooltip" title="Add to Bookmarks!"
                    onClick={addBookmark()}><i
                        className="far fa-bookmark"/></Link>
                    <Link to="#" className={`btn btn-secondary align-content-end ${itemIsBookmarked ? '' : 'd-none'}`} data-bs-toggle="tooltip" title="Remove from Bookmarks :("><i
                        className="fas fa-bookmark"/></Link>
                </div>
            </div>
            </>
    )
}

export default CatalogItem;