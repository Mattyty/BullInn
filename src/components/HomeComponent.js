import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Jumbotron} from "reactstrap";

const Home = () => {
    return (
        <div className="container">
            <div className="row-content">
                <div className="row mb-4">
                    <img className="col-12 col-lg-9 " src="assets/images/pub1.jpg" style={{display: 'flex', alignItems: 'center'}}/>
                    <div className="col-12 d-block d-lg-none">
                        <div className="container">
                            <div className="row">
                                <Card className="font-nob-p text-center mt-3 mb-3">
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'
                                        }}>Opening
                                            Times:</CardTitle>
                                        <CardText>Monday to Thursday :
                                            12 noon - 10.30pm</CardText>
                                        <CardText>Friday & Saturday :12 noon - 11pm</CardText>
                                        <CardText>Sunday : 12 noon - 1.0.30pm</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="font-nob-p text-center">
                                    <CardBody>
                                        <CardTitle style={{
                                            fontWeight: 'bold'

                                        }}>Food Served:</CardTitle>
                                        <CardText>Monday to Saturday:<br/> 12-2.30pm  &  6-8.30pm<br/></CardText>
                                        <CardText>Sunday: 12-3pm</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>


                    <Card className="col-3 font-nob-p text-center pt-3 mt-3 d-none d-lg-block ">
                        <CardBody>
                            <CardTitle style={{
                                opacity:'',
                                fontWeight: 'bold',
                                textDecorationLine: 'underline'
                            }}>Opening
                                Times:</CardTitle>
                            <CardText>Monday - Thursday :<br/>
                                12 noon - 10.30pm</CardText>
                            <CardText>Friday & Saturday :<br/>12 noon - 11pm <br/></CardText>
                            <CardText>Sunday :
                                <br/>12 noon - 1.0.30pm</CardText><br/>
                            <CardText style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Food
                                Served:</CardText>
                            <CardText>Monday - Saturday:<br/> 12-2.30pm & 6-8.30pm<br/></CardText>
                            <CardText>Sunday:<br/> 12-3pm</CardText><br/>
                            <img src="assets/images/logo.png" alt="The Bull Inn" style={{
                                opacity:'.5'}}/>
                        </CardBody>
                    </Card>
                    <br/>
                </div>
                <div>
                    <p className="font-nob-p text-center">Karen, Brandon & the team warmly welcome you to The Bull Inn
                        in
                        Launton. Since taking the pub over in 2014 we've been working hard to create the perfect
                        environment
                        for you to relax, eat and drink.
                        We welcome families and are dog friendly. We have disabled access
                        from our large Car Park. Our menu caters for Gluten Free, Vegetarian & Vegan dietry needs.</p>
                    <p className="font-nob-p text-center">We are only 8 minutes from Bicester Village and 4 minutes from
                        Bicester Heritage. We take pride in serving the perfect pint and home cooked food.</p>
                    <p className="font-nob-p text-center"> Come and Enjoy!</p>
                </div>
            </div>
        </div>

    );
}


export default Home;