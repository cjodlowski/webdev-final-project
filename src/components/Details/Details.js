import React, { useEffect, useState } from "react";
import "./details.css"
import {Link, Route, useParams} from "react-router-dom";
import {findItemById} from "../../services/item-service";


const details = () => {
    const [item, setItem] = useState({});
    const params = useParams();
    useEffect(() => {findItemById(params.id).then(result => setItem(result))}, [item]);
        return(
            <div className={"card bg-light card-profile-format override-bs"}>
                <div className="card-header larger-text">{details()}</div>
                <div className="card-header larger-text">{item.title}</div>
                <img className="mt-2 profile-image d-block mx-auto border" src={item.image} alt="profile icon"/>
                <div className="d-flex flex-column card-body">
                    <h5 className="card-title d-flex justify-content-center">{item.price}</h5>
                    <p className="card-text d-flex justify-content-center">{item.seller}</p>
                    <p className="card-text d-flex justify-content-center">{item.rating}</p>
                    <p className="card-text d-flex justify-content-center">{item.desc}</p>
                </div>
            </div>);
    }


export default details;