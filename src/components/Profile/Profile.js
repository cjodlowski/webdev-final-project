import React, {useState, useEffect} from "react";
import "../../vendors/bootstrap/bootstrap.min.css"
import "../../vendors/fontawesome/css/all.css"
import "./profile.css"
import { Route, Link, useParams } from "react-router-dom"

import BookmarkList from "./BookmarkList";
import CartList from "./CartList";
import SellList from "./SellList";
import MakeItem from "../ItemDetails/MakeItem";

import { findUserbyId, updateUser} from "../../services/user-service";

const ProfileTabs = (active) => {
    active = active.active;
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))}, []);
    return (
        <div className={"card-header"}>
            <ul className="nav nav-tabs card-header-tabs justify-content-center">
                <li className={`nav-item`}>
                    <Link className= {` nav-link ${active === 'bookmarks' ? 'active' : ''}`} to={`/profile/${params.id}/bookmarks`}>Bookmarks</Link>
                </li>
                <span className={ user.loggedIn !== true ? 'visually-hidden' : '' }>
                    <li className={`nav-item`}>
                        <Link className={`nav-link ${active === 'cart' ? 'active' : ''}`} to={`/profile/${params.id}/cart`}>Cart</Link>
                    </li>
                </span>
                <span className={ user.role !== 'SELLER' || user.loggedIn !== true ? 'visually-hidden' : '' }>
                    <li className={`nav-item`}>
                        <Link className={`nav-link ${active === 'selling' ? 'active' : ''}`} to={`/profile/${params.id}/selling`}>Now Selling</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={`nav-link ${active === 'makeItem' ? 'active' : ''}`} to={`/profile/${params.id}/makeItem`}>Create Item</Link>
                    </li>
                </span>
            </ul>
        </div>
    )
}

const EditProfile = (active) => {
    active = active.active;
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNO, setPhoneNO] = useState('');
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))}, []);

    const updateThisUser = () => {
        let update = {
            firstName : firstName,
            lastName : lastName,
            phone : phoneNO
        }

        updateUser(params.id, update)
    }

    if (active !== 'edit' && user.loggedIn) {
        return(
        <div className={"card bg-light card-profile-format override-bs"}>
            <div className="card-header larger-text">Profile</div>
            <img className="mt-2 profile-image d-block mx-auto border" src={user.profile} alt="profile icon"/>
            <div className="d-flex flex-column card-body">
                <h5 className="card-title d-flex justify-content-center">{user.username}</h5>
                <div className="form-group mt-3">
                    <label htmlFor="newFirstName" className="form-label">Change first name to:</label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="email" className="form-control" id="newFirstName" aria-describedby="emailHelp" placeholder={user.firstName}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="newLastName" className="form-label">Change last name to:</label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="email" className="form-control" id="newLastName" placeholder={user.lastName}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="newPhoneNumber" className="form-label">Change phone number to:</label>
                    <input onChange={(e) => setPhoneNO(e.target.value)} value={phoneNO} type="email" className="form-control" id="newPhoneNumber" placeholder={user.phone}/>
                </div>
                <p className="card-text d-flex my-3">Date of birth</p>
                <Link to={`/profile/${params.id}`} className={`btn btn-primary mb-2`} onClick={() => updateThisUser()}>Save</Link>
            </div>
        </div>);
    }
    else {
        return(
        <div className={"card bg-light card-profile-format override-bs"}>
            <div className="card-header larger-text">Profile</div>
            <img className="mt-2 profile-image d-block mx-auto border" src={user.profile} alt="profile icon"/>
            <div className="d-flex flex-column card-body">
                <h5 className="card-title d-flex justify-content-center">{user.username}</h5>
                <p className="card-text d-flex justify-content-center">{user.firstName}</p>
                <p className="card-text d-flex justify-content-center">{user.lastName}</p>
                <p className="card-text d-flex justify-content-center">{user.phone}</p>
                <p className="card-text d-flex justify-content-center">{user.dob}</p>
                <Link to={`/profile/${params.id}/edit`}
                      className={`btn btn-primary mb-2 ${user.loggedIn === false ? 'visually-hidden' : ''}`}>Edit</Link>
            </div>
        </div>);
    }
}

const Profile = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(() => {findUserbyId(params.id).then(result => setUser(result))}, []);
    return (
        <div className="row mt-3 mb-3">
            <div className="col-4 ms-3 me-1">
                <Route path={["/profile/:id", "/profile/:id/bookmarks", "/profile/:id/cart", "/profile/:id/selling", "/profile/:id/makeItem"]} exact={true}>
                    <EditProfile user={user} active={`edit`}/>
                </Route>
                <Route path={"/profile/:id/edit"} exact={true}>
                    <EditProfile user={user} active={`save`}/>
                </Route>
            </div>
            <div className="col-7 card bg-light profile-section override-bs px-0 override-bs">
                <Route path={["/profile/:id", "/profile/:id/edit", "/profile/:id/bookmarks"]} exact={true}>
                    <ProfileTabs user={user} active="bookmarks"/>
                    <BookmarkList/>
                </Route>
                <Route path={["/profile/:id/cart"]} exact={true}>
                    <ProfileTabs  user={user} active="cart"/>
                    <CartList />
                </Route>
                <Route path={["/profile/:id/selling"]} exact={true}>
                    <ProfileTabs  user={user} active="selling"/>
                    <SellList />
                </Route>
                <Route path={["/profile/:id/makeItem"]} exact={true}>
                    <ProfileTabs user={user} active="makeItem"/>
                    <MakeItem />
                </Route>
            </div>
        </div>
    )
}

export default Profile;