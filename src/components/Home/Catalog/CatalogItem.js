import React from "react";
import {Link} from "react-router-dom";

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

    return(
            <div className={"me-3 mb-3 col-3 card border-secondary px-0 override-bs"}>
                <div className="card-header">{item.seller}</div>
                <img className="card-img-top" src={item.image} alt="shop item"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Flavor text maybe.</p>
                    <p className="card-text">${item.price}.00</p>
                    {/*fix the double 0 stuff....gold*/}

                    <Link to="#" className="btn btn-secondary me-2 mb-xxl-0">
                        <i className={"fas fa-cart-plus me-2"}/>Add to cart</Link>
                    {/*<Link to={"#"} className={"btn btn-secondary me-2 mb-2 mb-xxl-0"}>*/}
                    {/*    <i className="fas fa-check me-2"/>Added to cart</Link>*/}

                    <Link to="#" className="btn btn-secondary mt-2 mt-xl-0" data-bs-toggle="tooltip" title="Add to Bookmarks!"><i
                        className="far fa-bookmark"/></Link>
                    {/*<Link to="#" className="btn btn-secondary mt-2 mt-xl-0"
                     data-bs-toggle="tooltip" title="Remove from Bookmarks :("><i*/}
                    {/*    className="fas fa-bookmark me-2"/></Link>*/}
                </div>
            </div>
    )
}

export default CatalogItem;