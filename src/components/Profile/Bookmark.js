import React from "react";
import "./profile.css"
const Bookmark = () => {
    return (
        // TODO: this is broken af
        <li className="list-group-item row">
            <div className="col-5 px-1">
                <img className="tab-image" src={"/shoppingcart.webp"} alt="item"/>
            </div>
            <div className="col-5 px-1">
                <div className="">
                    <h5 className="card-title">Item</h5>
                    <h6 className="card-subtitle">Price</h6> 
                    <i className="fas fa-heart"/>
                </div>
            </div>
        </li>
    )
}
export default Bookmark;