import React from "react";
import "./profile.css"

const Bookmark = () => {
    return (
        // TODO: this is broken af
        <li className="row">
            <div className="col-5 px-1">
                <div className={"card border-secondary card-format override-bs"}>
                    <div className="card-header">Header</div>
                    <img className="card-img-top tab-image" src={"/shoppingcart.webp"} alt="tab item"/>
                    <div className="card-body">
                        <h5 className="card-title">Item</h5>
                        <h6 className="card-subtitle">Price</h6>
                        <a href="#" className="btn btn-secondary me-2 mb-2 mb-xl-0">Add to cart</a>
                        {/* ^ fix lg/xl spacing issue ^ */}
                        <a href="#" className="btn btn-secondary me-2">Like<i className="fas fa-heart ms-2"/></a>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default Bookmark;