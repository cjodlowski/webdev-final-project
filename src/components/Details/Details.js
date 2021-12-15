import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
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
                <div className={" mt-3 col-6 card border-secondary px-0 override-bs"}>
                    <h4 className="card-header larger-text">Item Details</h4>
                    <div className="card-header">{item.seller}</div>
                    <img className="mt-2 profile-image d-block mx-auto border" src={item.image} alt="item icon"/>
                    <h4 className={"card-title ms-2"}>{item.title}</h4>
                    <ul className={"list-group list-group-flush custom-border-light override-bs"}>
                        <li className="list-group-item">${formatCurrency(item.price)}</li>
                        <li className="list-group-item">Rated at: {item.rating}<i
                            className="fas fa-star ms-2 gold-star override-bs"/></li>
                        <li className="list-group-item">{item.desc}</li>
                    </ul>
                </div>
                <div className={"col-3"}/>
            </div>
        );
    }


export default Details;