import React, { useEffect, useState } from "react";
import "./details.css"
import CatalogItem from "./CatalogItem"

import {findAllItems} from "../../../services/item-service"


//needs to be changed but if 'More Details' is clicked, will take the item and get the name, image, seller's name, desc., and cost

const details = () => {
    return (
        <div className="row mt-3">
            <div className="col-4 ms-2">
                <div className={"card bg-light card-profile-format override-bs"}>
                    <div className="card-header larger-text">get.Name == Name </div> //get item name
                    <img className="mt-2 profile-image d-block mx-auto border" src="/images/spooder.jpg" alt="item icon"/> //get item image
                    <div className="d-flex flex-column card-body">
                        <h5 className="card-title d-flex justify-content-center">//get.Seller == ID</h5> //get Seller name
                        <p className="card-text d-flex justify-content-center">get.Description == ID</p> //Show Description (SECRET FIELD only shown in details page)
                        <p className="card-text d-flex justify-content-center">get.Cost == ID</p> //Get cost of item
                    </div>
                </div>
            </div>
            )
            }


        </>
    )
}

export default details;