import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <>
        <h1>Shop</h1>
            <div className="col-2">
                <ul className="list-group">
                    <li className="list-group-item background-color-light override-bs">
                        <Link>Category 1</Link>
                    </li>
                    <li className="list-group-item background-color-light override-bs">
                        <Link>Category 2</Link>
                    </li>
                    <li className="list-group-item background-color-light override-bs">
                        <Link>Category 3</Link>
                    </li>
                    <li className="list-group-item background-color-light override-bs">
                        <Link>Category 4</Link>
                    </li>
                </ul>
            </div>
        <h1>Recently Viewed</h1>
        </>
    )
}
export default Home; 
