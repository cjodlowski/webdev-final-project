import React from 'react';
import { Link } from "react-router-dom"

const PrivacyPolicyLink = () => {
    return (
        <div className="container">
            <Link to="/privacypolicy">
                Check Out Our Privacy Policy!
            </Link>
        </div>
    )
}
export default PrivacyPolicyLink;