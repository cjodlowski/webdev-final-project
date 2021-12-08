import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import {Link} from "react-router-dom"

const Home = ({
active = 'cat1'
              }) => {
    return(
        <>
            <div className="col-2 ms-3 mt-3">
                <ul className={`list-group`}>
                    <Link to="/shop/home" className={`list-group-item remove-decorations override-bs ${active === 'cat1' ? 'active' : ''}`}>
                        <i className={"fas fa-home me-3"}/>
                        <span className={"d-sm-none d-xl-inline"}>Category 1</span>
                    </Link>
                    <Link to="/shop/explore" className={`list-group-item remove-decorations override-bs ${active === 'cat2' ? 'active' : ''}`}>
                        <i className={"fas fa-hashtag me-3"}/>
                        <span className={"d-sm-none d-xl-inline"}>Category 2</span>
                    </Link>
                    <Link to="/shop/notifications" className={`list-group-item remove-decorations override-bs ${active === 'cat3' ? 'active' : ''}`}>
                        <i className={"fas fa-bell me-3"}/>
                        <span className={"d-sm-none d-xl-inline"}>Category 3</span>
                    </Link>
                    <Link to="/shop/messages" className={`list-group-item remove-decorations override-bs ${active === 'cat4' ? 'active' : ''}`}>
                        <i className={"fas fa-envelope me-3"}/>
                        <span className={"d-sm-none d-xl-inline"}>Category 4</span>
                    </Link>
                </ul>
            </div>
        </>
    )
}
export default Home; 
