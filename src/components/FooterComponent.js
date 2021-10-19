import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-5 col-sm-4">
                        <h5 className="font-nob-p">Our Address:</h5>
                        <div className="font-nob-p">
                            Bicester Road, Launton. Oxfordshire<br/>
                            OX26 5DQ<br/>

                            <i class="fa fa-phone fa-lg"></i> Tel: (01869) 248158<br/>

                            <i class="fa fa-envelope fa-lg"></i> Email: <a
                            href="mailto:example@emailAddress">thebullinnlaunton@gmail.com</a>
                        </div>
                        <div style={{ alignItems: 'center'}}>
                        <a className="d-none d-lg-block"
                           href="https://www.facebook.com/thebullinnlaunton/"><img
                            src="assets/images/fblogo.png" alt="Facebook" style={{
                            height: '30px',
                            width: '30px'
                        }}/></a>
                    </div>
                    </div>
                    <div class="col-2 offset-1 col-sm-2">
                        <h5 className="font-nob-p">Links:</h5>
                        <ul className="list-unstyled">
                            <li><NavLink className="leaveAlone" to="/home">Home</NavLink></li>
                            <li><NavLink className="leaveAlone" to="/menu">Menu</NavLink></li>

                            <li><NavLink className="leaveAlone" to="/whatsOn">What's on</NavLink></li>
                            <li><NavLink className="leaveAlone" to="/contact">Contact</NavLink></li>
{/*                            <li><a href="./about.html">Reviews</a></li>*/}
                        </ul>
                    </div>

                    <div class="offset-1 col-1 align-self-center">
                     <img class="" src="assets/images/beer_guide.png" alt="logo"/>
                    </div>
                    <div className=" col-1 align-self-center">
                         <img className="d-block footerLogo d-none d-lg-block " src="assets/images/camra.png" alt="logo"/>
                    </div>
                    <p>Copyright © Matt Tyldesley</p>
                </div>
            </div>
        </div>

     );
    }



export default Footer;