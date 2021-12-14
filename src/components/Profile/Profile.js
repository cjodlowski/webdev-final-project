import React, {useState, useEffect} from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link, useParams } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import FollowingList from "./FollowingList";
import CartList from "./CartList";
import SellList from "./SellList";

import { findUserbyId } from "../../services/user-service";

const ProfileTabs = (active) => {
    active = active.active;
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))});
    return (
        <div className={"card-header"}>
            <ul className="nav nav-tabs card-header-tabs justify-content-center">
                <li className={`nav-item`}>
                    <Link className= {` nav-link ${active === 'bookmarks' ? 'active' : ''}`} to={`/profile/${user._id}/bookmarks`}>Bookmarks</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'following' ? 'active' : ''}`} to={`/profile/${user._id}/following`}>Following</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'cart' ? 'active' : ''}`} to={`/profile/${user._id}/cart`}>Cart</Link>
                </li>
                <li className={`nav-item`}>
                    <Link className={`nav-link ${active === 'selling' ? 'active' : ''}`} to={`/profile/${user._id}/selling`}>Now Selling</Link>
                </li>
            </ul>
        </div>
    )
}
const Profile = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))});
    return (
        <div className="row mt-3">
            <div className="col-4 ms-2">
                <div className={"card bg-light card-profile-format override-bs"}>
                    <div className="card-header larger-text">Profile</div>
                    <img className="mt-2 profile-image d-block mx-auto border" src="/images/spooder.jpg" alt="profile icon"/>
                    <div className="d-flex flex-column card-body">
                        <h5 className="card-title d-flex justify-content-center">{user.username}</h5>
                        <p className="card-text d-flex justify-content-center">{user.firstName}</p>
                        <p className="card-text d-flex justify-content-center">{user.lastName}</p>
                        <p className="card-text d-flex justify-content-center">Date of birth</p>
                        <p className="card-text d-flex justify-content-center">Phone Number</p>
                        <a href="#" className="btn btn-primary mb-2">Edit</a>
                        <a href="#" className="btn btn-primary mb-2">Save</a>
                    </div>
                </div>
            </div>
            <div className="col-7 card bg-light profile-section override-bs px-0 override-bs">
                <Route path={["/profile/:id", "/profile/:id/bookmarks"]} exact={true}>
                    <ProfileTabs user={user} active="bookmarks"/>
                    <BookmarkList />
                </Route>
                <Route path={["/profile/:id/following"]} exact={true}>
                    <ProfileTabs user={user} active="following"/>
                    <FollowingList />
                </Route>
                <Route path={["/profile/:id/cart"]} exact={true}>
                    <ProfileTabs  user={user} active="cart"/>
                    <CartList />
                </Route>
                <Route path={["/profile/:id/selling"]} exact={true}>
                    <ProfileTabs  user={user} active="selling"/>
                    <SellList />
                </Route>
            </div>
        </div>
    )
}

export default Profile;