import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {createNewUser} from "../../services/user-service";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNO, setPhoneNO] = useState('');
    const [acctType, setAcctType] = useState('');

    // useEffect(  () => {
    //     window.location = "/login"}, []
    // )

    const createUser = () => {
        let user = {
            username : username,
            password : password,
            firstName : firstName,
            lastName : lastName,
            loggedIn : false,
            bookmarks : [],
            following : [],
            selling : [],
            cart : [],
            role : acctType,
            profile : "/images/spooder.jpg",
            phone : phoneNO
        }
        createNewUser(user);
    }

    return (
        <div className={"d-flex p-2"}>
            <div className={"col-3"}/>
            <div className={"container col-6"}>
                <div className={"mx-3 my-3 card bg-light px-3 py-3"}>
                    <h2>Sign up:</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-1">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" value={password} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Your first and last name</label>
                        <input onChange={(e) => setFirstName(e.target.value)} type="firstname" className="form-control mb-2" id="firstName" value={firstName} placeholder="First name"/>
                        <input onChange={(e) => setLastName(e.target.value)} type="lastname" className="form-control" id="lastName" value={lastName} placeholder="Last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-4">Profile picture</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="examplePhone" className="form-label mt-4">Phone Number</label>
                        <input onChange={(e) => setPhoneNO(e.target.value)} type="phone" className="form-control" id="examplePhone" value={phoneNO} placeholder="###-###-####"/>
                    </div>

                    <fieldset className="form-group">
                        <legend className="mt-4">I am a:</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input onChange={(e) => setAcctType(e.target.value)} type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="BUYER"/>
                                    Customer
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input onChange={(e) => setAcctType(e.target.value)} type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="SELLER"/>
                                    Seller
                            </label>
                        </div>
                    </fieldset>
                    <div>
                        {/* Add User in DB here */}
                        <button className={"btn btn-secondary mt-2"} onClick={() => {createUser()}}>Sign up</button>
                    </div>
                    <h3 className={"mt-3 mb-2"}>Already an existing user?</h3>
                    <Link to="/login"><p>Click here to log in instead!</p></Link>
                </div>
            </div>
            <div className={"col-3"}/>
        </div>
    )
}

export default SignUp;