import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <>
        <h1>This is temp home page</h1>
        <ul>
            <li>
                <Link>Category 1</Link>
            </li>
            <li>
                <Link>Category 2</Link>
            </li>
            <li>
                <Link>Category 3</Link>
            </li>
            <li>
                <Link>Category 4</Link>
            </li>
        </ul>
        </>
    )
}
export default Home; 
