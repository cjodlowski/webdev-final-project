import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import {Link} from "react-router-dom"
import Categories from "./CategorySidebar/Categories";

const Home = () => {
    return(
        <>
            <div className="col-2 ms-3 mt-3">
                <Categories/>
            </div>
        </>
    )
}
export default Home; 
