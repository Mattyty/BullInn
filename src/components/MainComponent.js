import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import WhatsOn from './WhatsOnComponent';
import Contact from './ContactComponent';


const MainComponent = () => {

    return (
        <div>
            <Header></Header>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/whatsOn" component={WhatsOn}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Redirect to="/home" />
            </Switch>

            <Footer/>
        </div>
    );
}

export default MainComponent;