import React from "react";
const Bookmark = () => {
    return (
        <li className="col-2">
            <img className="card-img-top" src={"./shoppingcart.webp"} alt="item"/>
            <div className="card-body">
                <h5 className="card-title">Item</h5>
                <h6 className="card-subtitle">Price</h6> 
                <i class="fas fa-heart"></i>
            </div>
        </li>
    )
}
export default Bookmark;