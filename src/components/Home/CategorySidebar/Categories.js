import {Link} from "react-router-dom";

const Categories = ({
                        active = 'cat1'
                    }) => {
    return(
        <ul className={`list-group`}>
            <Link to="/home" className={`list-group-item remove-decorations override-bs ${active === 'cat1' ? 'active' : ''}`}>
                <i className={"fas fa-home me-3"}/>
                <span className={"d-sm-none d-xl-inline"}>Category 1</span>
            </Link>
            <Link to="/explore" className={`list-group-item remove-decorations override-bs ${active === 'cat2' ? 'active' : ''}`}>
                <i className={"fas fa-hashtag me-3"}/>
                <span className={"d-sm-none d-xl-inline"}>Category 2</span>
            </Link>
            <Link to="/notifications" className={`list-group-item remove-decorations override-bs ${active === 'cat3' ? 'active' : ''}`}>
                <i className={"fas fa-bell me-3"}/>
                <span className={"d-sm-none d-xl-inline"}>Category 3</span>
            </Link>
            <Link to="/messages" className={`list-group-item remove-decorations override-bs ${active === 'cat4' ? 'active' : ''}`}>
                <i className={"fas fa-envelope me-3"}/>
                <span className={"d-sm-none d-xl-inline"}>Category 4</span>
            </Link>
        </ul>
    )
}

export default Categories;