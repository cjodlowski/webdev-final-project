import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {findItemById} from "../../services/item-service";
import "../Home/Catalog/catalog.css";



const Details = () => {
    const [item, setItem] = useState({});
    const params = useParams();
    useEffect(() => {findItemById(params.id).then(result => setItem(result))}, [item]);

    const formatCurrency = (price = 1.01) => {
        let num = price.toLocaleString('en-US', {minimumFractionDigits: 2});
        return(num);
    };

    return(
        <div className={"row"}>
            <div className={"col-3"}/>
            <div className={" my-3 col-6 card border-secondary px-0 override-bs"}>
                    <h4 className="card-header larger-text ps-5">Item Details</h4>
                    <div className="card-header ps-5">{item.seller}</div>
                    <img className="my-3 detail-image d-block mx-auto border override-bs" src={item.image} alt="item icon"/>
                    <h4 className={"card-title ms-5 mt-2"}>{item.title}</h4>
                    <ul className={"list-group list-group-flush custom-border-light override-bs"}>
                        <li className="list-group-item d-inline-flex">
                            <span className={"ms-5"}>${formatCurrency(item.price)}</span>
                            <span className={"rating-right override-bs"}>Rated at: {item.rating}<i
                                className="fas fa-star ms-2 me-5 gold-star override-bs"/></span>
                        </li>
                        <li className="list-group-item mx-auto">{item.desc}</li>
                    </ul>
                <div className="card-body d-flex flex-column">
                    <Link to="#" className="btn btn-secondary align-content-end mt-auto mb-2" data-bs-toggle={"tooltip"} title={"Add to cart!"}>
                        <i className={"fas fa-cart-plus me-2"}/></Link>
                    {/*<Link to={"#"} className={"btn btn-secondary me-2"}
                     data-bs-toggle={"tooltip"} title={"Remove from to cart :("}>*/}
                    {/*    <i className="fas fa-check me-2"/>Added to cart</Link>*/}

                    <Link to="#" className={`btn btn-secondary align-content-end`} data-bs-toggle="tooltip" title="Add to Bookmarks!">
                        <i className="far fa-bookmark"/></Link>
                    {/*<Link to="#" className={`btn btn-secondary align-content-end ${itemIsBookmarked ? '' : 'd-none'}`} data-bs-toggle="tooltip" title="Remove from Bookmarks :("><i*/}
                    {/*    className="fas fa-bookmark"/></Link>*/}
                </div>
            </div>
            <div className={"col-3"}/>
        </div>
    );
}


export default Details;