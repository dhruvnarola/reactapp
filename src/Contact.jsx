import { React, useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        textarea: ""
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }

        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My number is ${data.phone}. My email is ${data.email}. My message is ${data.textarea}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter full name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="fullname" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter Phone No:</label>
                                <input type="number" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone} onChange={InputEvent} placeholder="enter no:" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput3" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" name="textarea" value={data.textarea} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3 text-center pt-2 pb-5">
                                <button className="btn btn-outline-success btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact