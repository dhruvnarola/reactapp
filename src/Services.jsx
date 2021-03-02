import { React } from "react";
import Card from "./Card"


const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container nav_bg mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                                <div className="col-lg-4">
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services