import React from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import {Link} from "react-router-dom"

const Profile = () => {
    return (
        <div>
            <h1>Profile is going here.</h1>
            <p>Username</p>
            <p>Date of Birth</p>
            {/* TODO: link these items to pages but make sure profile is still shown*/}
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" to="/profile/bookmarks">Bookmarks</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link"  to="/profile/following">Following</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link"  to="/profile/reviews">Reviews</Link>
                </li>
            </ul>
        </div>
    )
}

export default Profile;