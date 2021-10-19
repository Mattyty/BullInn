import React, {Component, useEffect} from 'react';
import FBComponent from "./FacebookComponent";
import {Card, CardImg, CardBody, CardTitle, CardText, Col} from 'reactstrap';


function RenderQuiz() {
    return (
        <Card>
            <CardImg src="assets/images/quiz.jpg" style={{
                height: '150px'
            }}/>
            <CardBody>
                <CardTitle>Quiz Night</CardTitle>
                <CardText></CardText>
            </CardBody>
        </Card>
    );
}

function RenderSpecials() {
    return (
        <Card>
            <CardImg src="assets/images/specials.jpg" style={{
                height: '150px'
            }}/>
            <CardBody>
                <CardTitle>Weekly Specials</CardTitle>
                <CardText></CardText>
            </CardBody>
        </Card>
    );
}

function RenderBook() {
    return (
        <Card>
            <CardImg src="assets/images/event.jpg" style={{
                height: '150px'
            }}/>
            <CardBody>
                <CardTitle>Book Your Event With Us!</CardTitle>
                <CardText></CardText>
            </CardBody>
        </Card>
    );
}

function RenderCharity() {
    return (
        <Card>
            <CardImg src="assets/images/charity.png" style={{
                height: '150px'
            }}/>
            <CardBody>
                <CardTitle>Charity Events</CardTitle>
                <CardText></CardText>
            </CardBody>
        </Card>
    );
}

const WhatsOn = () => {

    return (
        <div className="container">
            <div className="row-content">
                <div className="d-none d-lg-block ">
                    <div className="row text-center font-nob-p">
                        <Col className="col-5" span={4}>
                            <FBComponent/>
                        </Col>
                        <Col className="col-3">
                            <RenderQuiz/>
                            <RenderSpecials/>
                        </Col>
                        <Col className="col-3">
                            <RenderBook/>
                            <RenderCharity/>
                        </Col>
                    </div>
                </div>


                <div className=" col-12 col-md-8 d-block d-lg-none">
                    <div className="row text-center font-nob-p">
                        <div>
                            <FBComponent/>
                            <div className="col-8 offset-2 mt-3">
                                <RenderQuiz/>
                                <RenderSpecials/>
                                <RenderBook/>
                                <RenderCharity/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsOn;


/*
class WhatsOn extends Component {
    constructor(props) {
        super(props);

    }


    render() {



        return (
            <div className="container row-content">
                <div className="fb-page" data-href="https://www.facebook.com/thebullinnlaunton/" data-tabs="timeline"
                     data-width="900" data-height="500" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                </div>
                Hello
            </div>
        );
    }
}

export default WhatsOn;*/
