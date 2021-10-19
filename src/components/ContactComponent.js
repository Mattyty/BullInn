import React, { useState } from "react";
import {Button, Label,  Col, Row } from 'reactstrap';

const onSubmit = (e) => {
    e.target.reset();
};

    const Contact= () => {
        const [ setStatus] = useState("Submit");
        const handleSubmit = async (e) => {
            e.preventDefault();link
            setStatus("Sending...");
            const { name, email, message } = e.target.elements;
            let details = {
                name: name.value,
                email: email.value,
                message: message.value,
            };
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
            if (result.status === "Message Sent") {
                onSubmit(e);
            }
        };
        return (
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-sm-12 col-md-5 font-nob-p">
                        <h3>Contact Information:</h3>
                        <br/>
                        <p><strong>The Bull Inn</strong></p>
                        <p>Bicester Road, Launton, </p>
                        <p>Oxfordshire OX26 5DQ.</p>
                        <p>Tel: (01869) 248158</p>
                        <p>Email: thebullinnlaunton@gmail.com</p>
                        <br/>

                        <h5>Booking a table?</h5><br/>
                        <p>Call us on: 01869 248 158</p>
                        <p>(Please note we might not be able to answer between 12.30-2pm & 6-8pm)</p>
                        <p>Alternatively you can fill out the contact form below, and we will respond as soon as
                            possible.</p><br/>
                    </div>
                    <div className="col-md-2 d-none d-md-block mt-5">
                        <div className="container">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="500" height="450" id="gmap_canvas"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91026.03489410099!2d-1.2190949960913562!3d51.896085344648306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e70508d0f00f%3A0x47322143ebf04ed2!2sThe%20Bull%20Inn!5e0!3m2!1sen!2suk!4v1630575326119!5m2!1sen!2suk"
                                            frameBorder="0" scrolling="no" marginHeight="0"
                                            marginWidth="0"></iframe>
                                    <a href="https://123movies-to.org"></a><br/>
                                    <style>
                                        position: relative,
                                        text-align: right,
                                        height: 500px,
                                        width: 600px,
                                    </style>
                                    <style>
                                        overflow: hidden;
                                        background: none !important;
                                        height: 500px;
                                        width: 600px;
                                    </style>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <Row className="form-group">
                                <Col md={10}>
                                    <input type="text" id="name" className="form-control form-control-lg mb-2" required placeholder="Name:"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <input type="email" id="email" className="form-control form-control-lg mb-2" required  placeholder="Email:"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <textarea id="message" className="form-control form-control-lg mb-2 input-lg contact-box" required placeholder="Message..."/>
                                </Col>
                            </Row>
                            <button type="submit" className="btn btn-green">{status}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }




export default Contact;