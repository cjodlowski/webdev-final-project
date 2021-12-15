import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {findUserbyId, logUserOut} from "../../services/user-service";

const Login = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const doesUserExist = (inputUN) => { findUserbyId(inputUN).then(result => setUser(result));};
    useEffect( () =>
    {
        if(user.username !== undefined) {
            console.log("logging out!");
            logOut(user._id);
            window.location = "/login";
        } else {
            console.log("oops... couldn't log out :(")
        }
    }, [user]);

    const logOut = () => {
        logUserOut(user._id);
    };
    return (
        <div className={"d-flex p-2"}>
            <div className={"col-3"}/>
            <div className={"container col-6"}>
                <div className={"mx-3 my-3 card bg-light px-3 py-3"}>
                    <h2>Log out:</h2>
                    <h5>Are you sure you want to log out?</h5>
                    <div>
                        <button
                            onClick={() => { //GoldieLocks here
                                doesUserExist(params.id);
                                console.log(user.username);

                            }}
                            className={"btn btn-secondary my-2"}>Log out :(</button>
                    </div>
                    <h5 className={"mt-3"}>Not logged in?</h5>
                    <Link to="/login"><p>Click here to log in instead!</p></Link>
                </div>
            </div>
            <div className={"col-3"}/>
        </div>
    )
}

export default Login;