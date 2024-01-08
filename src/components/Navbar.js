import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg bg-${props.mode.bgColor}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode.textColor}`} to="/">{props.title}</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link active text-${props.mode.textColor}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link active text-${props.mode.textColor}`} to="/about">{props.about}</Link>
                    </li>
                </ul>
                <div className="form-check form-switch form-check-reverse d-flex gap-2">
                     <button className="btn btn-light border-white border-2" onClick={props.customMode}></button>
                    <button className="btn btn-danger border-white border-2" onClick={props.customMode}></button>
                    <button className="btn btn-primary border-white border-2" onClick={props.customMode}></button>
                    <button className="btn btn-success border-white border-2" onClick={props.customMode}></button>
                    <button className="btn btn-dark border-white border-2" onClick={props.customMode}></button>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set Title",
    about : "About Text"
}