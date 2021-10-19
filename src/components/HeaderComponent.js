import React, {Component} from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Col} from "reactstrap";
import {NavLink, Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    closeNavbar() {
        this.setState({
            isNavOpen: false
        });
    }

    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <a className=" mt-2 d-none d-md-block"
                               href="https://www.facebook.com/thebullinnlaunton/"><img
                                src="assets/images/fblogo.png" alt="Facebook" style={{
                                height: '35px',
                                width: '37px'
                            }}/></a>
                            <div style={{
                                width: '15px'
                            }}>
                            </div>
                            <NavLink to="/contact" className="btn btn-green align-items-center me-1 d-none d-md-block"
                               ><span className="fa fa-envelope"></span> Message us</NavLink>
                        </div>
                    </div>

                <div className="d-block d-lg-none navbar-expand-lg" style={{ alignItems: 'center'}}>
                    <div className="row mob-header-padding">
                    <Col className="col-10">
                    <Navbar dark expand="lg">
                        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nobile"/>
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav}/>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home" onClick={this.closeNavbar}>
                                            <link rel="stylesheet" type="text/css"
                                                  href="//fonts.googleapis.com/css?family=Nobile"/>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu" onClick={this.closeNavbar}>
                                            Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/whatsOn" onClick={this.closeNavbar}>
                                            What's on
                                        </NavLink>
                                    </NavItem>
                                    {/*                                    <NavItem>
                                        <NavLink className="nav-link" to="/about" onClick={this.closeNavbar}>
                                            Review us
                                        </NavLink>
                                    </NavItem>*/}
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contact" onClick={this.closeNavbar}>
                                            Contact us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                    </Col>
                    <Col className="col-2 fbLog d-block d-md-none">
                        <a href="https://www.facebook.com/thebullinnlaunton/"><img
                            src="assets/images/fblogo.png" alt="Facebook" style={{
                            height: '35px',
                            width: '37px'
                        }}/></a>
                    </Col>
                    </div>
                </div>
                <div className="row">
                    <Jumbotron>

                            <div className="row row-header">
                                <div className="col-8">
                                    <h1 className="font-nob-main d-none d-lg-block">The Bull Inn, Launton<img
                                        src="assets/images/logo.png" alt="The Bull Inn"/></h1>
                                </div>
                                <div
                                    className="col-md-4 d-none d-lg-block">
                                    <h6 className="row d-flex justify-content-end font-nob me-2">Bicester Road, Launton.
                                        Oxfordshire</h6>
                                    <h6 className="row d-flex justify-content-end font-nob me-2">OX26 5DQ</h6>
                                    <h6 className="row d-flex justify-content-end font-nob me-2">01869 248 158</h6>
                                </div>
                                <p className="sub-font d-none d-lg-block">A traditional family friendly country pub</p>
                            </div>

                    </Jumbotron>


                        <div className="row row-header">
                            <div className="col-8 d-block d-s-none d-lg-none">
                                <h1 className="font-nob-mobile">The Bull Inn, Launton</h1>
                            </div>
                            <div
                                className="col-3 align-items-center text-center d-block d-s-none d-lg-none align-self-center">
                                <img className="d-block  logo-sml" src="assets/images/logo.png" alt="logo"/>
                            </div>
                        </div>
                        <div className="col-12 blink d-block d-s-none d-lg-none">
                            <p className="sub-font-mobile">A traditional family friendly country pub</p>
                        </div>

                </div>

                    <div className="row">
                        <div className="col-md-5 d-block d-md-none ">
                            <div className="row " style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <h6 className="row"><a className="btn action-buttons col-6 call-button"
                                                       href="tel:01270 794067">
                                    <span className="fa fa-phone"></span> 01270 794067</a>
                                    <NavLink to="/contact" className="btn action-buttons col-5 call-button">
                                        <span className="fa fa-envelope"></span> Message us</NavLink>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-lg-block">
                        <Navbar dark expand="md">
                            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nobile"/>
                            <div className="container">
                                <NavbarToggler onClick={this.toggleNav}/>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar className="justify-content-end nav-tabs navbar-lg"
                                         style={{width: "100%"}}>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <link rel="stylesheet" type="text/css"
                                                      href="//fonts.googleapis.com/css?family=Nobile"/>
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/menu">
                                                Menu
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/whatsOn">
                                                What's On
                                            </NavLink>
                                        </NavItem>
                                        {/*                                        <NavItem>
                                            <NavLink className="nav-link" to="/about">
                                                Review Us
                                            </NavLink>
                                        </NavItem>*/}
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contact">
                                                Contact us
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </>
        );
    }
};

export default Header;