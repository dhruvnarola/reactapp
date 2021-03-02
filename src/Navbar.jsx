import React from "react"
import { NavLink } from "react-router-dom"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const Navbar = () => {
    return (
        <><div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <span className="navbar-brand" style={{ color: "rgb(57, 103, 255)" }} exact to="#">My web</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent"><ul className="navbar-nav ml-auto mb-2 mb-lg-0"><li className="nav-item"><NavLink className="nav-link active menu_active" to="/" aria-current="page">Home</NavLink></li><li className="nav-item"><NavLink className="nav-link" to="/service">Services</NavLink></li><li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li><li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li></ul></div>
                            </div>
                    </nav>
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar