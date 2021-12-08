import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import Categories from "./CategorySidebar/Categories";
import Catalog from "./Catalog/Catalog";

const Home = () => {
    return(
        <div className={"row mt-3"}>
            <div className="col-2 ms-3">
                <Categories/>
            </div>
            <div className={"col-9 me-3"}>
                <Catalog/>
            </div>
        </div>
    )
}
export default Home; 
