import React from 'react';
import { Link } from "react-router-dom"

const PrivacyPolicyLink = () => {
    return (
        <div className="row">
            <div className="col-12 align-center">
                <Link to="/privacypolicy">
                    Check Out Our Privacy Policy!
                </Link>
            </div>
        </div>
    )
}
export default PrivacyPolicyLink;