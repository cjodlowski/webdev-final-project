import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findUserbyUN, logUserIn} from "../../services/user-service";

const Login = () => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const doesUserExist = (inputUN) => { findUserbyUN(inputUN).then(result => setUser(result));};
    useEffect( () => {
        if (user.username !== undefined) {
            console.log("User exists!");
            if (user.password === password) {
                logIn();
                console.log("Password correct!");
                let uID = user._id;
                window.location = "/profile/" + uID;
            }
             else {
                console.log("oops... that password didn't work :(")
            }
        } else {
            console.log("oops... that user doesn't exist :(")
        }}, [user]);

    const logIn = () => {
        logUserIn(user._id);
    };
    return (
        <div className={"d-flex p-2"}>
            <div className={"col-3"}/>
            <div className={"container col-6"}>
        <div className={"mx-3 my-3 card bg-light px-3 py-3"}>
            <h2>Log in:</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div>
                {/* Update User in DB here */}
                <button
                    onClick={() => { //GoldieLocks here
                        doesUserExist(username);
                    }}
                    className={"btn btn-secondary my-2"}>Login</button>
            </div>
            <h3 className={"mt-3"}>Not an existing user?</h3>
            <Link to="/register"><p>Click here to sign up instead!</p></Link>
        </div>
            </div>
            <div className={"col-3"}/>
        </div>
    )
}

export default Login;