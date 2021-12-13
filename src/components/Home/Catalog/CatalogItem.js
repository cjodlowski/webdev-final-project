import React from "react";
import {Link} from "react-router-dom";


const CatalogItem = (item = {
    title: "",
    price: 0,
    image: "...",
    rating: 0,
    tags: [],
    featured: false,
    seller : ""
}) => {
    return(
        <>
            <div className={"card border-secondary card-format override-bs"}>
                <div className="card-header">{item.seller}</div>
                <img className="card-img-top" src={item.image} alt="shop item image"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Flavor text maybe.</p>
                    <p className="card-text">{item.price}</p>

                    <Link to="#" className="btn btn-secondary me-2"><i className={"fas" +
                    " fa-cart-plus me-2"}/>Add to cart</Link>
                    <Link to={"#"} className={"btn btn-secondary me-2"}>
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-shopping-cart fa-stack-2x icon-cart-offset override-bs"/>
                            <i className="fas fa-check fa-stack-1x fa-inverse icon-check-offset override-bs"/>
                        </span>
                        Added to cart
                    </Link>

                    <Link to="#" className="btn btn-secondary"><i
                        className="far fa-bookmark me-2"/>Bookmark</Link>
                    {/*<Link to="#" className="btn btn-secondary"><i*/}
                    {/*    className="fas fa-bookmark me-2"/>Bookmarked</Link>*/}
                </div>
            </div>
        </>
    )
}

export default CatalogItem;