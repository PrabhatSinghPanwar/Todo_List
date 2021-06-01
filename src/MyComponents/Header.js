import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 


export default function Header(props) {

    const headerstyle = {
        fontSize: 40,
        fontFamily: "Ubuntu",
        fontWeight: 'bold'
      };

    const navstyle = {
        paddingLeft: 18,
        paddingRight: 18,
        fontFamily: "Montserrat-Light",
        fontSize: 19
    };

    const mar={
        marginLeft: 800
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mb-0 h1" to="/" style={headerstyle}><i className="fas fa-list-alt"></i>{props.title}</Link>          {/* Example to use props */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={mar}>
                            <li className="nav-item" style={navstyle}>
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" style={navstyle}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Header.propTypes ={                        /* This is used to make code more rombust, which makes error finding easy*/
    title: PropTypes.string,                /* This is an example of prop types */
    SearchBar: PropTypes.bool.isRequired    /* This will make the passing of the search bar compulory,
    BUT for that You have to remove default value and also don't pass it to see it work in console */
}

Header.defaultProps ={                     /* This will put an default value to the prop if not provided */
    title: "You Shoud put title here",     /* This is an example of default props */
    SearchBar: true
}