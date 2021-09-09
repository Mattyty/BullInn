import React, {Component} from 'react';
import {Card, CardBody, CardText, CardTitle, Col, Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMainOpen: false,
            isSundayOpen: false,
            isWineOpen: false
        };

        this.toggleMain = this.toggleMain.bind(this);
        this.toggleSunday = this.toggleSunday.bind(this);
        this.toggleWine = this.toggleWine.bind(this);

    }

    toggleMain() {
        this.setState({
            isMainOpen: !this.state.isMainOpen
        });
    }

    toggleSunday() {
        this.setState({
            isSundayOpen: !this.state.isSundayOpen
        });
    }

    toggleWine() {
        this.setState({
            isWineOpen: !this.state.isWineOpen
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row-content">
                    <div className="d-none d-lg-block">
                        <div className="row font-nob-p text-center justify-content-center">
                            <Col className="col-3">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleMain}>Main Menu
                                        </Button></CardTitle>
                                        <CardText>Monday to Saturday</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-3">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleSunday}>Sunday Menu
                                        </Button></CardTitle>
                                        <CardText>All Day Sunday</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-3">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleWine}>Wine List
                                        </Button></CardTitle>
                                        <CardText>& Information</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </div>
                    <img className="col-12 col-md-8 offset-md-2 mb-3" src="assets/images/food.jpeg"/>
                    <div className="d-block d-md-none">
                        <div className=" font-nob-p text-center offset-2">
                            <Col className="col-10">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleMain}>Main Menu
                                        </Button></CardTitle>
                                        <CardText>Monday to Saturday</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-10">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleSunday}>Sunday Menu
                                        </Button></CardTitle>
                                        <CardText>All Day Sunday</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-10">
                                <Card>
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}><Button className="btn-green" onClick={this.toggleWine}>Wine List
                                        </Button></CardTitle>
                                        <CardText>& Information</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </div>



                    <div><br/>
                        <p className="font-nob-p text-center">Eating pub food should be a little happy moment! We want
                            to make sure you have
                            all the classics you love, along with a few surprises to shake things up a bit. We try,
                            where possible, to source all of our food locally.<br/><br/>
                            If you have any special dietary requirements please let us know.<br/><br/>
                            We're here to help.</p>
                    </div>
                </div>
                <Modal isOpen={this.state.isMainOpen} toggle={this.toggleMain}>
                    <ModalHeader toggle={this.toggleMain}>Main Menu</ModalHeader>
                    <ModalBody>
                        <img className="col-12 col-md-9 text-center " src="assets/images/mainMenu.jpg"/>
                        <img className="col-12 col-md-9 " src="assets/images/mainMenu2.jpg"/>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSundayOpen} toggle={this.toggleSunday}>
                    <ModalHeader toggle={this.toggleSunday}>Sunday Menu</ModalHeader>
                    <ModalBody className="align-self-center">
                        <img className="col-12 col-md-9 text-center " src="assets/images/sunday.jpg"/>
                        <img className="col-12 col-md-9 text-center " src="assets/images/sunday2.jpg"/>

                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isWineOpen} toggle={this.toggleWine}>
                    <ModalHeader toggle={this.toggleWine}>Wine List</ModalHeader>
                    <ModalBody className="align-self-center">
                        <img className="col-12 col-md-9 text-center " src="assets/images/wine.jpg"/>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
};

export default Menu;

