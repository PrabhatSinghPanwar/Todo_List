import React from 'react'
import PropTypes from 'prop-types'



export default function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>          {/* Example to use props */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                         { props.SearchBar? <form className="d-flex">                           {/* Example to use props */}
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>: "Nothing is Here Bro" }
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