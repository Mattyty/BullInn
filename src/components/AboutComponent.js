import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Col} from 'reactstrap';


const About = () => {
    return (
        <div className="container row-content">
            <div className="row">
                <div className="col-3 ml-2">
                    <Col className="">
                    <div id="TA_cdswritereviewlg9" className="TA_cdswritereviewlg">
                        <ul id="jPn4CQgABiKB" className="TA_links gLymDnfV">
                            <li id="EYXsxQP7yu" className="OLMO7Dbki">
                                <a target="_blank" href="https://www.tripadvisor.co.uk/Restaurant_Review-g1015731-d1840158-Reviews-The_Bull_Inn-Bicester_Oxfordshire_England.html"><img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                                alt="TripAdvisor"/></a></li>
                        </ul>
                    </div>
                        <div className="col-12 col-md-3 mb-3">
                            <div id="TA_selfserveprop663" className="TA_selfserveprop">
                                <ul id="rPfTBZYZ" className="TA_links nJP2vUnAMA">
                                    <li id="uY53IqSKxQka" className="m30VFxR"><a target="_blank"
                                                                                 href="https://www.tripadvisor.co.uk/Restaurant_Review-g1015731-d1840158-Reviews-The_Bull_Inn-Bicester_Oxfordshire_England.html"><img
                                        src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                                        alt="TripAdvisor"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </div>
                <Col className="col-12 col-md-4">
                    <Card>
                        <CardBody className="text-center font-nob-p">
                            <CardTitle style={{
                                fontWeight: 'bold'
                            }}>Relaxing Sunday Lunch</CardTitle>
                            <CardText style={{
                                styles: 'italic'
                            }}>"Traditional county pub, went here with family for Sunday lunch. Pub busy but plenty space and COVID rules being followed
                                staff very friendly, good menu for vegetarians and non vegetarians. Went for traditional roast beef which was very nice. Didn’t have starter but good selection and the puddings very nice and all reasonably priced.
                                Good selection beers and wines.
                                The pub was busy but we didn’t feel rushed and overall a very pleasant experience"</CardText>
                        </CardBody>
                    </Card>                    <Card>
                    <CardBody className="text-center font-nob-p">
                        <CardTitle style={{
                            fontWeight: 'bold'
                        }}>Outstanding Thatched Restaurant</CardTitle>
                        <CardText style={{
                            styles: 'italic'
                        }}>"Great looking thatched restaurant inside & out. Staff are very helpful & polite. We both ordered the mixed grill, having them both cooked completely opposite to each other by our choice, & they both came out perfect.
                            There is plenty of choice on the menu at good fair prices. We will be returning."</CardText>
                    </CardBody>
                </Card>
                </Col>

                <Col className="col-12 col-md-4">
                    <Card>
                        <CardBody className="text-center font-nob-p">
                            <CardTitle style={{
                                fontWeight: 'bold'
                            }}>Absolutely Fantastic Service</CardTitle>
                            <CardText style={{
                                styles: 'italic'
                            }}>"We came away with a group on friends and visited the pub for a few drinks on a Saturday. The bar staff were lovely and so welcoming, they could not do enough to make our stay memorable.
                                They had great humour and were very chatty and friendly. Would definitely recommend."</CardText>
                        </CardBody>
                    </Card>                    <Card>
                    <CardBody className="text-center font-nob-p">
                        <CardTitle style={{
                            fontWeight: 'bold'
                        }}>Good Sunday Roast</CardTitle>
                        <CardText style={{
                            styles: 'italic'
                        }}>"Having not had a proper Sunday Roast for over a year, I decided to treat the family. We were greeted with open arms directed to a reserved table. High chair was also provided. A good honest Roast beef dinner was had by two of us and chicken by another the little one had a
                            child's portion. Clean plates all round."</CardText>
                    </CardBody>
                </Card>
                    <div >
                        <a className="btn btn-green align-items-center me-2 d-none d-lg-block "
                           href="/contact"><span className="fa fa-envelope"></span> Book a Table</a>
                    </div>
                </Col>
            </div>
        </div>
    );
}

export default About;