import { React } from "react";
import { NavLink } from "react-router-dom";
import web from "./images/image2.png"


const About = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 body">
                                    <h1>Welcome to about page </h1>
                                    <h1><strong className="brand_name">My website</strong></h1>
                                    <p className="my-3">Welcome to our teams, probably the best team in this world</p>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn btn-outline-primary">Contact Now</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid about_animated" alt="pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About