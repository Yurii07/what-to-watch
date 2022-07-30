import React from 'react'
import { Link } from "react-router-dom";

import './notFound.scss'

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h1>404</h1>
                <h2>Oops, the page you're looking for does not exist.</h2>
                <p>
                    You may want to head back to the homepage.<br />
                </p>
                <span className="btn">
                    <Link to="/">
                        RETURN HOME
                    </Link>
                </span>
            </div>
            <div className="bg-img" />
        </React.Fragment>
    )
}

export default NotFound